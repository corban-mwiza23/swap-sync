
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [imageError, setImageError] = useState(false);
  
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-swap-green-light to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Borrow, Lend, Connect <br /> with Your Community
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Share resources, save money, and build meaningful connections with neighbors through SwapSync.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="h-12 px-6">
                Find Items
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6">
                How It Works
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <svg
                  className="h-5 w-5 fill-swap-green"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span>Verified Users</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  className="h-5 w-5 fill-swap-green"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span>Free to Use</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  className="h-5 w-5 fill-swap-green"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span>Local Communities</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[450px] w-full max-w-[450px] shadow-xl rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-muted">
                {!imageError ? (
                  <img 
                    src="https://images.unsplash.com/photo-1559308448-de7de9335461?w=600&auto=format&fit=crop&q=80"
                    alt="Neighbors sharing tools"
                    className="object-cover w-full h-full"
                    onError={() => setImageError(true)}
                    loading="eager"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full bg-swap-green-light text-swap-green">
                    <span className="text-xl font-medium">Community Sharing</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="text-xl font-semibold">
                  "SwapSync helped me connect with neighbors and saved me hundreds on tools I rarely use!"
                </p>
                <p className="mt-2">— Maria G., Oak Street</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
