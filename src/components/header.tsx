import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart, User, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-400 to-black shadow-lg">
            <img 
              src="/assets/logo.png" 
              alt="Logo Hat Crown" 
              className="h-6 w-6 object-contain"
            />
          </div>
          {/* <span className="text-xl font-bold text-white">Hat Crown</span> */}
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden lg:flex items-center space-x-2 max-w-sm">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Buscar productos..."
              className="pl-9 bg-gray-800/60 border-0 text-white placeholder-gray-400 focus:bg-gray-700/80 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="hidden sm:flex text-white hover:text-blue-400">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-white hover:text-blue-400">
            <User className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="relative text-white hover:text-blue-400">
            <ShoppingCart className="h-5 w-5" />
            <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-blue-500 text-white p-0 text-xs flex items-center justify-center shadow-md">
              2
            </Badge>
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-blue-400">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
