
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ItemCard } from "@/components/ItemCard";
import { mockItems, categories } from "@/data/mockItems";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter items based on the active category and search query
  const filteredItems = mockItems.filter(item => {
    // Category filter
    const categoryMatch = activeCategory === "All" || item.category === activeCategory;
    
    // Search filter
    const searchLower = searchQuery.toLowerCase();
    const searchMatch = searchQuery === "" || 
      item.title.toLowerCase().includes(searchLower) || 
      item.description.toLowerCase().includes(searchLower) ||
      item.category.toLowerCase().includes(searchLower);
    
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-swap-green-light py-12">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter mb-4">Explore Items</h1>
            <p className="text-muted-foreground max-w-2xl mb-6">
              Discover items available to borrow in your community. Filter by category or search for specific items.
            </p>
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-white"
              />
            </div>
          </div>
        </div>

        <div className="container px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="mb-6 overflow-auto pb-2 w-full md:w-auto">
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
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Filter className="h-4 w-4" />
              <span>More Filters</span>
            </Button>
          </div>

          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No items found</h3>
              <p className="text-muted-foreground mt-1">Try changing your filters or search terms</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
