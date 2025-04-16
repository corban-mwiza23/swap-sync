
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X, User, MessageCircle, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Link 
              to="/" 
              className="flex items-center gap-2 font-semibold text-xl"
            >
              <div className="rounded-full bg-swap-green p-1.5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10L17 4M17 20L7 14M19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12ZM7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>SwapSync</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center max-w-sm flex-1 mx-8">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search items to borrow..."
                className="w-full pl-8 rounded-full bg-muted"
              />
            </div>
          </div>

          {/* Desktop Navigation Items */}
          <nav className="hidden md:flex items-center gap-5">
            <Link 
              to="/explore" 
              className="text-sm font-medium hover:text-primary"
            >
              Explore
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-sm font-medium hover:text-primary"
            >
              How It Works
            </Link>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="default">
                List an Item
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 border-t bg-background">
          <div className="relative w-full mb-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search items to borrow..."
              className="w-full pl-8 rounded-full bg-muted"
            />
          </div>
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/explore" 
              className="text-sm font-medium hover:text-primary py-2"
            >
              Explore
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-sm font-medium hover:text-primary py-2"
            >
              How It Works
            </Link>
            <Link 
              to="/profile" 
              className="text-sm font-medium hover:text-primary py-2"
            >
              Profile
            </Link>
            <Link 
              to="/messages" 
              className="text-sm font-medium hover:text-primary py-2"
            >
              Messages
            </Link>
            <Link 
              to="/notifications" 
              className="text-sm font-medium hover:text-primary py-2"
            >
              Notifications
            </Link>
            <Button className="w-full mt-2">
              List an Item
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
