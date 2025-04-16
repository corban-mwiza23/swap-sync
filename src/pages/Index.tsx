
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedItems } from "@/components/FeaturedItems";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedItems />
        <HowItWorks />
        
        {/* Community Stats Section */}
        <section className="py-16 bg-swap-green-light">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="bg-swap-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-swap-green" />
                </div>
                <h3 className="text-3xl font-bold">2,500+</h3>
                <p className="text-muted-foreground">Active Community Members</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="bg-swap-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-swap-green" />
                </div>
                <h3 className="text-3xl font-bold">6,300+</h3>
                <p className="text-muted-foreground">Successful Swaps</p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="bg-swap-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-swap-green" />
                </div>
                <h3 className="text-3xl font-bold">93%</h3>
                <p className="text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="bg-swap-earth-light rounded-xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-opacity-10 mix-blend-multiply">
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-swap-earth-light to-transparent"></div>
              </div>
              <div className="relative z-10 max-w-xl">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Ready to start sharing with your community?
                </h2>
                <p className="text-muted-foreground mt-4 mb-6">
                  Join SwapSync today and discover a new way to connect with neighbors, save money, 
                  and reduce waste through collaborative sharing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="h-12 px-6">
                    Get Started
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 px-6">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
