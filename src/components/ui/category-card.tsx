import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  count: number;
  className?: string;
  onClick?: () => void;
}

export function CategoryCard({
  title,
  description,
  image,
  count,
  className,
  onClick
}: CategoryCardProps) {
  return (
    <Card 
      className={cn(
        "group cursor-pointer overflow-hidden border-0 bg-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl",
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="relative h-48 overflow-hidden">
          
          {/* Imagen de categoría */}
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Overlay de gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
          
          {/* Contenido */}
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-white/80 mb-2">{description}</p>
            <span className="text-xs bg-blue-600/30 text-white px-2 py-1 rounded-full backdrop-blur-sm shadow-md">
              {count} productos
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
