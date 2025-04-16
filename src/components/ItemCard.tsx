
import { useState } from "react";
import { Link } from "react-router-dom";
import { Item } from "@/data/mockItems";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star, MapPin, Clock, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  const [imageError, setImageError] = useState(false);
  
  // Function to determine the badge color based on availability
  const getBadgeVariant = (availability: string) => {
    switch (availability) {
      case 'Available':
        return 'default';
      case 'Borrowed':
        return 'secondary';
      case 'Reserved':
        return 'outline';
      default:
        return 'default';
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <Link to={`/items/${item.id}`}>
        <div className="relative">
          <AspectRatio ratio={1/1} className="bg-muted">
            {!imageError ? (
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                onError={() => setImageError(true)}
                loading="lazy"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-muted">
                <ImageIcon className="h-10 w-10 text-muted-foreground" />
              </div>
            )}
            <Badge 
              variant={getBadgeVariant(item.availability) as any}
              className="absolute top-3 right-3 z-10"
            >
              {item.availability}
            </Badge>
          </AspectRatio>
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg line-clamp-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{item.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-2">
            <Badge variant="outline" className="bg-swap-green-light text-swap-green-dark font-normal">
              {item.category}
            </Badge>
            <Badge variant="outline" className="bg-swap-earth-light text-swap-earth-dark font-normal">
              {item.condition}
            </Badge>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex flex-col items-start gap-2">
          <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              <span>{item.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{item.timeframe}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full">
            <div className="relative h-6 w-6 rounded-full overflow-hidden bg-muted">
              <img
                src={item.owner.avatar}
                alt={item.owner.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  // Set a default avatar if owner image fails to load
                  (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(item.owner.name);
                }}
                loading="lazy"
              />
            </div>
            <span className="text-sm">{item.owner.name}</span>
            <div className="ml-auto flex items-center">
              <Star className="h-3.5 w-3.5 fill-swap-accent text-swap-accent" />
              <span className="text-sm ml-1">{item.owner.rating.toFixed(1)}</span>
            </div>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
