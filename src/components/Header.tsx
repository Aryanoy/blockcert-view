import { Shield, FileCheck, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold">CertiChain</span>
        </Link>
        
        <nav className="ml-auto flex items-center space-x-4">
          <Button
            variant={isActive("/issue") ? "default" : "ghost"}
            size="sm"
            asChild
          >
            <Link to="/issue" className="flex items-center space-x-2">
              <FileCheck className="h-4 w-4" />
              <span>Issue Certificate</span>
            </Link>
          </Button>
          
          <Button
            variant={isActive("/verify") ? "default" : "ghost"}
            size="sm"
            asChild
          >
            <Link to="/verify" className="flex items-center space-x-2">
              <Search className="h-4 w-4" />
              <span>Verify Certificate</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;