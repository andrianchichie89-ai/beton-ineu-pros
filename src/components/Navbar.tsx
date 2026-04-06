import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Acasă" },
  { to: "/despre-noi", label: "Despre Noi" },
  { to: "/tipuri-beton", label: "Tipuri de Beton" },
  { to: "/servicii", label: "Servicii" },
  { to: "/calculator", label: "Calculator Preț" },
  { to: "/galerie", label: "Galerie" },
  { to: "/recenzii", label: "Recenzii" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-xl md:text-2xl font-extrabold text-primary tracking-tight">
            INVENT<span className="text-secondary"> BETON</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === link.to
                  ? "text-primary bg-muted"
                  : "text-foreground/70 hover:text-primary hover:bg-muted/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+40700000000" className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="h-4 w-4" />
            0700 000 000
          </a>
          <Link to="/contact">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
              Solicită Ofertă
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium ${
                  location.pathname === link.to
                    ? "text-primary bg-muted"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full mt-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
                Solicită Ofertă
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
