import React from 'react';
import { Link } from 'react-router-dom';
import {
  DollarSign,
  Users,
  CreditCard,
  Activity,
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';

// Custom Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';
import KPI_Card from '@/components/KPI_Card';
import ActivityFeed from '@/components/ActivityFeed';

// shadcn/ui Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Placeholder data for the chart and table
const salesData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 6000 },
  { month: 'Jun', revenue: 5500 },
];

const recentOrders = [
  {
    orderId: 'ORD-2024-1235',
    customer: 'Liam Johnson',
    email: 'liam@example.com',
    amount: '$250.00',
    status: 'Delivered',
  },
  {
    orderId: 'ORD-2024-1234',
    customer: 'Olivia Smith',
    email: 'olivia@example.com',
    amount: '$150.00',
    status: 'Processing',
  },
  {
    orderId: 'ORD-2024-1233',
    customer: 'Noah Williams',
    email: 'noah@example.com',
    amount: '$350.00',
    status: 'Shipped',
  },
  {
    orderId: 'ORD-2024-1232',
    customer: 'Emma Brown',
    email: 'emma@example.com',
    amount: '$450.00',
    status: 'Delivered',
  },
  {
    orderId: 'ORD-2024-1231',
    customer: 'Ava Jones',
    email: 'ava@example.com',
    amount: '$550.00',
    status: 'Cancelled',
  },
];

const DashboardOverview = () => {
  console.log('DashboardOverview loaded');

  const getBadgeVariant = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'default'; // default is green-ish in shadcn
      case 'Processing':
        return 'secondary'; // secondary is grey
      case 'Shipped':
        return 'outline';
      case 'Cancelled':
        return 'destructive'; // destructive is red
      default:
        return 'default';
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <LeftSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {/* KPI Cards Section */}
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <KPI_Card
              title="Total Revenue"
              value="$45,231.89"
              icon={DollarSign}
              trendValue="+20.1%"
              trendDirection="up"
              description="from last month"
            />
            <KPI_Card
              title="New Customers"
              value="+2350"
              icon={Users}
              trendValue="+180.1%"
              trendDirection="up"
              description="from last month"
            />
            <KPI_Card
              title="Sales"
              value="+12,234"
              icon={CreditCard}
              trendValue="+19%"
              trendDirection="up"
              description="from last month"
            />
            <KPI_Card
              title="Active Now"
              value="573"
              icon={Activity}
              trendValue="+201"
              trendDirection="down"
              description="since last hour"
            />
          </div>

          {/* Chart and Activity Feed Section */}
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-2">
              <CardHeader>
                <CardTitle>Sales Trend</CardTitle>
                <CardDescription>
                  Showing revenue for the last 6 months.
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <ActivityFeed />
          </div>

          {/* Recent Orders Table Section */}
          <Card>
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>
                  An overview of the most recent transactions.
                </CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link to="/orders">
                  View All
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden sm:table-cell">Order ID</TableHead>
                    <TableHead className="hidden md:table-cell">Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentOrders.map((order) => (
                    <TableRow key={order.orderId}>
                      <TableCell>
                        <div className="font-medium">{order.customer}</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          {order.email}
                        </div>
                      </TableCell>
                       <TableCell className="hidden sm:table-cell">{order.orderId}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Badge variant={getBadgeVariant(order.status)}>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">{order.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardOverview;