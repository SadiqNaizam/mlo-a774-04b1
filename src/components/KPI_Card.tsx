import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from 'lucide-react';

interface KPI_CardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  trendValue?: string;
  trendDirection?: 'up' | 'down' | 'none';
  description?: string;
}

const KPI_Card: React.FC<KPI_CardProps> = ({
  title,
  value,
  icon: Icon,
  trendValue,
  trendDirection = 'none',
  description
}) => {
  console.log('KPI_Card loaded:', title);

  const TrendIcon = trendDirection === 'up' ? ArrowUp : ArrowDown;
  const trendColor = trendDirection === 'up' ? 'text-green-500' : 'text-red-500';

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trendValue && (
          <p className="text-xs text-muted-foreground flex items-center">
            {trendDirection !== 'none' && (
              <TrendIcon className={`h-4 w-4 mr-1 ${trendColor}`} />
            )}
            <span className={trendDirection !== 'none' ? trendColor : ''}>{trendValue}</span>
            {description && <span className="ml-1">{description}</span>}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default KPI_Card;