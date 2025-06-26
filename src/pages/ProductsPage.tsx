import React from 'react';
import { PlusCircle, Search } from 'lucide-react';

import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';
import ProductListItem, { ProductListItemProps } from '@/components/ProductListItem';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

// Placeholder data for the product list
const sampleProducts: ProductListItemProps[] = [
  {
    id: 'prod_1',
    name: 'Ergonomic Office Chair',
    sku: 'EO-CH-BLK-01',
    imageUrl: 'https://placehold.co/400x400/cccccc/1f1f1f/png?text=Chair',
    price: 249.99,
    stock: 25,
  },
  {
    id: 'prod_2',
    name: 'Mechanical Keyboard',
    sku: 'MK-RGB-TKL-01',
    imageUrl: 'https://placehold.co/400x400/cccccc/1f1f1f/png?text=Keyboard',
    price: 120.0,
    stock: 8,
  },
  {
    id: 'prod_3',
    name: '4K UltraWide Monitor',
    sku: 'UW-4K-34-01',
    imageUrl: 'https://placehold.co/400x400/cccccc/1f1f1f/png?text=Monitor',
    price: 799.5,
    stock: 15,
  },
  {
    id: 'prod_4',
    name: 'Wireless Charging Pad',
    sku: 'WC-QI-15W-01',
    imageUrl: 'https://placehold.co/400x400/cccccc/1f1f1f/png?text=Charger',
    price: 45.0,
    stock: 0,
  },
  {
    id: 'prod_5',
    name: 'Noise-Cancelling Headphones',
    sku: 'NC-HP-BLU-01',
    imageUrl: 'https://placehold.co/400x400/cccccc/1f1f1f/png?text=Headphones',
    price: 350.0,
    stock: 50,
  },
];

const ProductsPage = () => {
  console.log('ProductsPage loaded');

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <LeftSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between gap-4">
                  <div>
                      <CardTitle>Products</CardTitle>
                      <CardDescription>
                        Manage your products and view their stock levels.
                      </CardDescription>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search products..."
                          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                        />
                    </div>
                    <Button size="sm" className="h-8 gap-1">
                      <PlusCircle className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Add Product
                      </span>
                    </Button>
                  </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-center">Stock Status</TableHead>
                    <TableHead className="text-right">
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sampleProducts.map((product) => (
                    <ProductListItem key={product.id} {...product} />
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-5</strong> of <strong>{sampleProducts.length}</strong> products
              </div>
              <div className="ml-auto">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </CardFooter>
          </Card>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ProductsPage;