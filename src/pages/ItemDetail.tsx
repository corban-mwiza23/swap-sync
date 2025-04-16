
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { mockItems } from "@/data/mockItems";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Star, MapPin, Clock, ArrowLeft, Info, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(mockItems.find(item => item.id === id));
  const [imageError, setImageError] = useState(false);
  
  useEffect(() => {
    // In a real app, this would be an API call to fetch the item
    const foundItem = mockItems.find(item => item.id === id);
    setItem(foundItem);
    
    // Reset image error state when item changes
    setImageError(false);
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [id]);
  
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
  
  if (!item) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container px-4 md:px-6 py-12">
          <div className="text-center py-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Item Not Found</h2>
            <p className="text-muted-foreground mb-6">The item you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/explore">Browse Available Items</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <Button variant="ghost" asChild className="mb-6 pl-0 hover:bg-transparent">
            <Link to="/explore" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Explore</span>
            </Link>
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden border bg-muted">
                <AspectRatio ratio={1/1} className="bg-muted">
                  {!imageError ? (
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="object-cover w-full h-full"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-muted">
                      <ImageIcon className="h-12 w-12 text-muted-foreground" />
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
            </div>
            
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter">{item.title}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="outline" className="bg-swap-green-light text-swap-green-dark font-normal">
                    {item.category}
                  </Badge>
                  <Badge variant="outline" className="bg-swap-earth-light text-swap-earth-dark font-normal">
                    {item.condition}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Description
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      Location
                    </h3>
                    <p className="text-muted-foreground">{item.location}</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      Availability
                    </h3>
                    <p className="text-muted-foreground">{item.timeframe}</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden bg-muted">
                      <img
                        src={item.owner.avatar}
                        alt={item.owner.name}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(item.owner.name);
                        }}
                      />
                    </div>
                    <div>
                      <p className="font-medium">{item.owner.name}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-3.5 w-3.5 fill-swap-accent text-swap-accent" />
                        <span>{item.owner.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                  <Button disabled={item.availability !== 'Available'}>
                    {item.availability === 'Available' ? 'Request to Borrow' : 'Not Available'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tighter mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {mockItems
                .filter(relatedItem => relatedItem.id !== item.id && relatedItem.category === item.category)
                .slice(0, 4)
                .map(relatedItem => (
                  <div key={relatedItem.id} className="border rounded-lg overflow-hidden">
                    <Link to={`/items/${relatedItem.id}`}>
                      <AspectRatio ratio={1/1} className="bg-muted">
                        <img 
                          src={relatedItem.imageUrl} 
                          alt={relatedItem.title} 
                          className="object-cover w-full h-full"
                          loading="lazy"
                          onError={(e) => {
                            const imgElement = e.target as HTMLImageElement;
                            imgElement.src = "https://placehold.co/400x400/e2e8f0/64748b?text=Image+Unavailable";
                          }}
                        />
                      </AspectRatio>
                      <div className="p-4">
                        <h3 className="font-medium truncate">{relatedItem.title}</h3>
                        <p className="text-sm text-muted-foreground">{relatedItem.owner.name}</p>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ItemDetail;
