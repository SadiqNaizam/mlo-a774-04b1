import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ShoppingCart, PackageX, UserPlus, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const activities = [
  {
    id: 1,
    icon: <ShoppingCart className="h-5 w-5" />,
    text: "New order #ORD-2024-1235 received.",
    timestamp: "5m ago",
    link: "/orders",
  },
  {
    id: 2,
    icon: <PackageX className="h-5 w-5" />,
    text: "Product 'Monstera Deliciosa' is low on stock.",
    timestamp: "30m ago",
    link: "/products",
  },
  {
    id: 3,
    icon: <UserPlus className="h-5 w-5" />,
    text: "A new customer 'Jane Doe' has registered.",
    timestamp: "1h ago",
  },
  {
    id: 4,
    icon: <DollarSign className="h-5 w-5 text-green-500" />,
    text: "Payment of $129.99 received for order #ORD-2024-1234.",
    timestamp: "2h ago",
    link: "/orders",
  },
  {
    id: 5,
    icon: <ShoppingCart className="h-5 w-5" />,
    text: "New order #ORD-2024-1234 received.",
    timestamp: "3h ago",
    link: "/orders",
  },
];

const ActivityFeed: React.FC = () => {
  console.log('ActivityFeed loaded');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <Avatar className="h-10 w-10 border">
                <AvatarFallback className="bg-secondary">
                  {activity.icon}
                </AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <p className="text-sm">
                  {activity.link ? (
                    <Link to={activity.link} className="font-medium hover:underline">
                      {activity.text}
                    </Link>
                  ) : (
                    <span className="font-medium">{activity.text}</span>
                  )}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {activity.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;