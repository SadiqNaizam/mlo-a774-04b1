import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { ChevronRight } from "lucide-react";

// Define the possible order statuses to ensure type safety
export type OrderStatus = 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';

// Define the props interface for the component
interface OrderListItemProps {
  id: string;
  customerName: string;
  date: string; // Assuming the date is pre-formatted for display
  status: OrderStatus;
  total: number;
  onViewDetails: () => void;
}

const OrderListItem: React.FC<OrderListItemProps> = ({
  id,
  customerName,
  date,
  status,
  total,
  onViewDetails,
}) => {
  console.log('OrderListItem loaded for order:', id);

  /**
   * Determines the visual style of the status badge based on the order status.
   * @param status - The current status of the order.
   * @returns The variant name for the Badge component.
   */
  const getBadgeVariant = (status: OrderStatus): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
      case 'Processing':
        return 'secondary';
      case 'Shipped':
        return 'default';
      case 'Cancelled':
        return 'destructive';
      case 'Delivered':
        return 'outline'; // Using outline to distinguish, will add custom color
      default:
        return 'default';
    }
  };
  
  // Apply a green color for 'Delivered' status to indicate success
  const statusColorClass = status === 'Delivered' ? 'text-green-600 border-green-600' : '';

  // Format the total amount into a standard currency string (e.g., $1,234.56)
  const formattedTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(total);

  return (
    <TableRow onClick={onViewDetails} className="cursor-pointer hover:bg-muted/50" data-testid={`order-row-${id}`}>
      <TableCell className="hidden font-medium sm:table-cell">{id}</TableCell>
      <TableCell>
        <div className="font-medium">{customerName}</div>
        <div className="text-sm text-muted-foreground sm:hidden">{id}</div>
      </TableCell>
      <TableCell className="hidden md:table-cell">{date}</TableCell>
      <TableCell>
        <Badge variant={getBadgeVariant(status)} className={statusColorClass}>
          {status}
        </Badge>
      </TableCell>
      <TableCell className="text-right font-medium">{formattedTotal}</TableCell>
      <TableCell className="text-right">
        <Button variant="ghost" size="icon" aria-label="View order details">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default OrderListItem;