import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';
import DateRangePicker from '@/components/DateRangePicker';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { DateRange } from 'react-day-picker';

// Placeholder data for charts
const salesData = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 4500 },
  { name: 'May', revenue: 6000 },
  { name: 'Jun', revenue: 5500 },
];

const customerData = [
  { name: 'Jan', new: 20, returning: 15 },
  { name: 'Feb', new: 25, returning: 20 },
  { name: 'Mar', new: 30, returning: 22 },
  { name: 'Apr', new: 28, returning: 25 },
  { name: 'May', new: 35, returning: 30 },
  { name: 'Jun', new: 40, returning: 32 },
];

const productPerformanceData = [
    { name: 'Product A', sold: 120 },
    { name: 'Product B', sold: 98 },
    { name: 'Product C', sold: 86 },
    { name: 'Product D', sold: 75 },
    { name: 'Product E', sold: 60 },
];


const AnalyticsPage = () => {
    console.log('AnalyticsPage loaded');
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
        from: new Date(2024, 0, 1),
        to: new Date(),
    });

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <LeftSidebar />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <Header />
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
                        <DateRangePicker 
                            initialDateRange={dateRange}
                            onUpdate={({ range }) => setDateRange(range)} 
                        />
                    </div>
                    
                    <Tabs defaultValue="sales">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="sales">Sales Trends</TabsTrigger>
                            <TabsTrigger value="customers">Customer Behavior</TabsTrigger>
                            <TabsTrigger value="products">Product Performance</TabsTrigger>
                        </TabsList>

                        <TabsContent value="sales">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Sales Revenue</CardTitle>
                                    <CardDescription>Monthly revenue over the selected period.</CardDescription>
                                </CardHeader>
                                <CardContent className="h-[400px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={salesData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip formatter={(value) => `$${value}`} />
                                            <Legend />
                                            <Bar dataKey="revenue" fill="#8884d8" name="Revenue" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="customers">
                             <Card>
                                <CardHeader>
                                    <CardTitle>New vs. Returning Customers</CardTitle>
                                    <CardDescription>A look at customer acquisition and retention.</CardDescription>
                                </CardHeader>
                                <CardContent className="h-[400px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={customerData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="new" stroke="#82ca9d" name="New Customers" />
                                            <Line type="monotone" dataKey="returning" stroke="#8884d8" name="Returning Customers" />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="products">
                             <Card>
                                <CardHeader>
                                    <CardTitle>Top Performing Products</CardTitle>
                                    <CardDescription>Units sold for the top 5 products.</CardDescription>
                                </CardHeader>
                                <CardContent className="h-[400px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart layout="vertical" data={productPerformanceData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis type="number" />
                                            <YAxis type="category" dataKey="name" width={80} />
                                            <Tooltip formatter={(value) => `${value} units`} />
                                            <Legend />
                                            <Bar dataKey="sold" fill="#ffc658" name="Units Sold" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default AnalyticsPage;