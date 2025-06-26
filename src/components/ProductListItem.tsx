import React from 'react';
import { MoreHorizontal } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export interface ProductListItemProps {
  id: string;
  name: string;
  sku: string;
  imageUrl: string;
  price: number;
  stock: number;
}

const ProductListItem: React.FC<ProductListItemProps> = ({
  id,
  name,
  sku,
  imageUrl,
  price,
  stock,
}) => {
  console.log(`ProductListItem loaded for: ${name}`);

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  const getStockBadge = () => {
    if (stock === 0) {
      return <Badge variant="destructive">Out of Stock</Badge>;
    }
    if (stock > 0 && stock <= 10) {
      return <Badge variant="secondary">Low Stock</Badge>;
    }
    return <Badge variant="outline">In Stock</Badge>;
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <TableRow key={id}>
      <TableCell className="font-medium">
        <div className="flex items-center gap-3">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src={imageUrl} alt={name} />
            <AvatarFallback>{getInitials(name)}</AvatarFallback>
          </Avatar>
          <div className="grid gap-0.5">
            <p className="font-medium">{name}</p>
            <p className="text-xs text-muted-foreground">SKU: {sku}</p>
          </div>
        </div>
      </TableCell>
      <TableCell className="text-right">{formatPrice(price)}</TableCell>
      <TableCell>
        <div className="flex flex-col items-center sm:flex-row sm:justify-start sm:items-center gap-2">
            {getStockBadge()}
            <span className="text-muted-foreground text-sm">({stock} units)</span>
        </div>
      </TableCell>
      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onSelect={() => console.log(`Editing product ${id}`)}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() => console.log(`Viewing product ${id}`)}
            >
              View
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

export default ProductListItem;