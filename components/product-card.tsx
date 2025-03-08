import Image from "next/image";
import { Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  thumbnailUrl?: string;
  rating: number;
  soldOut?: boolean;
  // stock?: number;
  // updatedAt?: Date;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  imageUrl,
  rating,
  soldOut,
  // stock,
  // updatedAt,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden border rounded-md h-full flex flex-col">
      <div className="relative">
        {/* Main product image */}
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform hover:scale-105"
            priority
          />

          {/* Sold out overlay */}
          {soldOut && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/70 text-white rounded-full w-16 h-16 flex items-center justify-center text-sm">
                已售完
              </div>
            </div>
          )}
        </div>

        {/* Product ID badge */}
        <Badge variant="secondary" className="absolute top-2 left-2 text-xs">
          {id}
        </Badge>
      </div>

      <CardContent className="p-3 flex-grow">
        {/* Product name */}
        <h3 className="font-medium text-sm line-clamp-2 mb-1">{name}</h3>

        {/* Price information */}
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-red-500 font-bold">
            ${price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-muted-foreground text-xs line-through">
              ${originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-3 pt-0 flex items-center justify-between">
        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs">{rating}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
