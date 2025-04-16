
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HowItWorks as HowItWorksSection } from "@/components/HowItWorks";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertTriangle, HelpCircle } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-swap-green-light py-12">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter mb-4">How SwapSync Works</h1>
            <p className="text-muted-foreground max-w-2xl">
              Learn how to get started with SwapSync and make the most of your community sharing experience.
            </p>
          </div>
        </div>

        <HowItWorksSection />
        
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-swap-accent" />
                      Is SwapSync completely free to use?
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Yes, SwapSync is completely free for community members. We believe in making sharing accessible to everyone.
                    </p>
                  </div>
                  
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-swap-accent" />
                      What if an item gets damaged?
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Our community guidelines ask borrowers to treat items with care and return them in the same condition. If accidents happen, we encourage open communication between members to find a fair resolution.
                    </p>
                  </div>
                  
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-swap-accent" />
                      How do I know I can trust someone?
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      All SwapSync members have verified profiles and ratings from previous exchanges. You can message them before agreeing to any exchange, and our platform encourages meeting in safe, public locations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold tracking-tighter mb-6">Tips for Successful Sharing</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-swap-green mt-0.5" />
                    <div>
                      <h3 className="font-medium">Clear Communication</h3>
                      <p className="text-muted-foreground">
                        Be specific about the item's condition, usage instructions, and your expectations for return timing.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-swap-green mt-0.5" />
                    <div>
                      <h3 className="font-medium">Take Photos</h3>
                      <p className="text-muted-foreground">
                        Document the condition of items before and after lending to avoid any misunderstandings.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-swap-green mt-0.5" />
                    <div>
                      <h3 className="font-medium">Meet in Public</h3>
                      <p className="text-muted-foreground">
                        For your first few exchanges, meet in public places until you build trust with neighbors.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-swap-green mt-0.5" />
                    <div>
                      <h3 className="font-medium">Be Timely</h3>
                      <p className="text-muted-foreground">
                        Return items when promised and communicate promptly if you need an extension.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-swap-accent mt-0.5" />
                    <div>
                      <h3 className="font-medium">Items to Avoid Sharing</h3>
                      <p className="text-muted-foreground">
                        Very expensive, irreplaceable, or potentially dangerous items should be shared with extra caution.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-swap-earth-light rounded-xl">
                  <h3 className="font-medium mb-2">Ready to get started?</h3>
                  <p className="text-muted-foreground mb-4">
                    Join the SwapSync community and start sharing with your neighbors today.
                  </p>
                  <Button>Create Your Account</Button>
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

export default HowItWorks;
