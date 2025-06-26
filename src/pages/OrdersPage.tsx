import React from 'react';
import { Search, FileDown } from 'lucide-react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';

// Custom Components
import DateRangePicker from '@/components/DateRangePicker';
import OrderListItem, { OrderStatus } from '@/components/OrderListItem';

// shadcn/ui Components
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
} from '@/components/ui/pagination';


// Sample data for the orders table
const sampleOrders = [
  { id: 'ORD001', customerName: 'Liam Johnson', date: '2023-11-23', status: 'Delivered' as OrderStatus, total: 250.00 },
  { id: 'ORD002', customerName: 'Olivia Smith', date: '2023-11-22', status: 'Shipped' as OrderStatus, total: 150.75 },
  { id: 'ORD003', customerName: 'Noah Williams', date: '2023-11-21', status: 'Processing' as OrderStatus, total: 350.50 },
  { id: 'ORD004', customerName: 'Emma Brown', date: '2023-11-20', status: 'Delivered' as OrderStatus, total: 450.00 },
  { id: 'ORD005', customerName: 'Ava Jones', date: '2023-11-19', status: 'Cancelled' as OrderStatus, total: 75.00 },
  { id: 'ORD006', customerName: 'Lucas Garcia', date: '2023-11-18', status: 'Delivered' as OrderStatus, total: 55.25 },
  { id: 'ORD007', customerName: 'Sophia Miller', date: '2023-11-17', status: 'Processing' as OrderStatus, total: 125.00 },
];

const OrdersPage = () => {
  console.log('OrdersPage loaded');

  const handleViewDetails = (orderId: string) => {
    // In a real app, this would navigate to an order detail page or open a dialog
    console.log(`Viewing details for order: ${orderId}`);
    alert(`Viewing details for order: ${orderId}`);
  };

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <LeftSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 w-full">
        <Header />
        <main className="flex-1 grid items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Orders</h1>
                    <p className="text-muted-foreground">Manage and view recent customer orders.</p>
                </div>
            </div>
            
            {/* Toolbar for Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="relative flex-1 w-full sm:w-auto">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search by Order ID or Customer..."
                        className="pl-8 w-full sm:w-[300px] lg:w-[400px]"
                    />
                </div>
                <div className="flex items-center gap-2 ml-auto">
                    <DateRangePicker />
                    <Button variant="outline" size="sm" className="gap-1">
                        <FileDown className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Export</span>
                    </Button>
                </div>
            </div>

            {/* Orders Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>A list of the most recent orders.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="hidden sm:table-cell">Order ID</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead className="hidden md:table-cell">Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Total</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {sampleOrders.map((order) => (
                                <OrderListItem
                                    key={order.id}
                                    id={order.id}
                                    customerName={order.customerName}
                                    date={order.date}
                                    status={order.status}
                                    total={order.total}
                                    onViewDetails={() => handleViewDetails(order.id)}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* Pagination */}
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default OrdersPage;