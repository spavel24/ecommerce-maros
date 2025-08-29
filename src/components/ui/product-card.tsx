import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  className?: string;
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isNew = false,
  className
}: ProductCardProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className={cn(
      "group cursor-pointer overflow-hidden border-0 bg-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl",
      className
    )}>
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Badge de nuevo producto */}
          {isNew && (
            <Badge className="absolute left-3 top-3 bg-blue-600 text-white font-bold px-2 py-1 shadow-md">
              NUEVO
            </Badge>
          )}
          
          {/* Badge de descuento */}
          {discount > 0 && (
            <Badge className="absolute right-3 top-3 bg-red-500 text-white font-bold px-2 py-1 shadow-md">
              -{discount}%
            </Badge>
          )}
          
          {/* Overlay de hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
        </div>
        
        <div className="p-4">
          {/* Categoría y nombre */}
          <div className="mb-2">
            <p className="text-xs font-medium text-blue-400 uppercase tracking-wider">
              {category}
            </p>
            <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">
              {name}
            </h3>
          </div>
          
          {/* Precios */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl font-bold text-white">
              ${price.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          {/* Botón agregar al carrito */}
          <Button className="w-full bg-gradient-to-r from-blue-600 via-blue-400 to-black text-white hover:scale-105 hover:shadow-xl transition-all duration-300">
            Agregar al Carrito
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
