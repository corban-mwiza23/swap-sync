
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ItemCard } from "@/components/ItemCard";
import { mockItems, categories } from "@/data/mockItems";

export function FeaturedItems() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter items based on the active category
  const filteredItems = activeCategory === "All" 
    ? mockItems 
    : mockItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter">Available in Your Community</h2>
            <p className="text-muted-foreground mt-1">Discover items you can borrow from neighbors near you</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            View All Items
          </Button>
        </div>
        
        <div className="mb-6 overflow-auto pb-2">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium">No items found in this category</h3>
            <p className="text-muted-foreground mt-1">Try another category or check back later</p>
          </div>
        )}
      </div>
    </section>
  );
}
