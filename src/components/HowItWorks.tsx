
import { CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      title: "Create Your Profile",
      description: "Sign up in minutes and set up your profile so neighbors can learn about you",
      icon: "/placeholder.svg"
    },
    {
      title: "List or Find Items",
      description: "Add items you're willing to share or browse what's available in your community",
      icon: "/placeholder.svg"
    },
    {
      title: "Connect & Arrange",
      description: "Message to arrange pickup/return and agree on borrowing timeframes",
      icon: "/placeholder.svg"
    },
    {
      title: "Share & Rate",
      description: "Exchange items safely and provide feedback after the swap is complete",
      icon: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 bg-swap-earth-light/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">How SwapSync Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
            Borrowing and lending items in your community has never been easier
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-5 shadow-md mb-4">
                <div className="rounded-full bg-swap-green/10 p-4">
                  <span className="bg-swap-green text-white flex items-center justify-center rounded-full w-10 h-10 text-lg font-semibold">
                    {index + 1}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Why Choose SwapSync?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-swap-green mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Save Money</h4>
                <p className="text-sm text-muted-foreground">
                  Borrow what you need instead of buying items you rarely use
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-swap-green mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Reduce Waste</h4>
                <p className="text-sm text-muted-foreground">
                  Promote sustainability by sharing resources and reducing consumption
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-swap-green mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Build Community</h4>
                <p className="text-sm text-muted-foreground">
                  Meet neighbors and create meaningful local connections
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-swap-green mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium">Verified Users</h4>
                <p className="text-sm text-muted-foreground">
                  Our verification system ensures safety and trust
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
