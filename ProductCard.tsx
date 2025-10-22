import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  rating: number;
  category: string;
}

const ProductCard = ({ name, price, image, rating, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-smooth hover:shadow-elegant border-border/50">
      {/* Image */}
      <div className="relative overflow-hidden aspect-square bg-accent/30">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 rounded-full bg-secondary/90 backdrop-blur-sm text-secondary-foreground text-xs font-medium">
            {category}
          </span>
        </div>
      </div>

      <CardContent className="p-4 space-y-2">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "fill-secondary text-secondary" : "text-muted"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground mr-2">({rating}.0)</span>
        </div>

        {/* Name */}
        <h3 className="font-bold text-lg text-foreground line-clamp-2 text-right">{name}</h3>

        {/* Price */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold text-gradient-primary">{price} ر.س</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button variant="default" className="w-full" size="lg">
          <ShoppingCart className="ml-2 h-4 w-4" />
          أضف للسلة
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
