
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Serviços", path: "/servicos" },
    { name: "Contato", path: "/contato" },
  ];

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomePage]);

  const headerBg = isHomePage 
    ? isScrolled 
      ? "bg-background/95 backdrop-blur-md shadow-sm" 
      : "bg-transparent backdrop-blur-sm"
    : "bg-background shadow-sm";

  const textColor = isHomePage && !isScrolled ? "text-white" : "text-foreground";
  const logoFilter = isHomePage && !isScrolled ? "brightness-0 invert drop-shadow-lg" : "drop-shadow-sm";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/97e4c6a2-9810-4383-bed5-793a2892dab6.png" 
              alt="Merge"
              className={`h-8 w-auto transition-all duration-300 ${logoFilter}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-all duration-300 ${
                    isHomePage && !isScrolled ? "drop-shadow-lg" : ""
                  } ${
                    isActive(item.path)
                      ? isHomePage && !isScrolled
                        ? "text-blue-300 border-b-2 border-blue-300 pb-1"
                        : "text-primary border-b-2 border-primary pb-1"
                       : isHomePage && !isScrolled
                         ? "text-white hover:text-blue-200"
                         : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="md:hidden">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className={`transition-all duration-300 ${
                isHomePage && !isScrolled
                  ? "text-white hover:text-blue-200 hover:bg-white/10"
                  : "text-foreground hover:text-primary hover:bg-muted"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={`h-5 w-5 ${isHomePage && !isScrolled ? "drop-shadow-lg" : ""}`} />
              ) : (
                <Menu className={`h-5 w-5 ${isHomePage && !isScrolled ? "drop-shadow-lg" : ""}`} />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
           <div className={`md:hidden py-4 rounded-b-lg border-t transition-all duration-300 ${
             isHomePage && !isScrolled
               ? "bg-black/20 backdrop-blur-md border-white/20"
               : "bg-background border-border shadow-lg"
           }`}>
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-all duration-300 ${
                    isHomePage && !isScrolled ? "drop-shadow-lg" : ""
                  } ${
                    isActive(item.path) 
                      ? isHomePage && !isScrolled ? "text-blue-300" : "text-primary"
                       : isHomePage && !isScrolled
                         ? "text-white hover:text-blue-200" 
                         : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
