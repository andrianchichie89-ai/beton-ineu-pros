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
        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-1.5 text-[13px] font-medium rounded-full transition-all duration-200 ${
                location.pathname === link.to
                  ? "text-primary-foreground bg-primary shadow-sm"
                  : "text-foreground/70 hover:text-primary hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+40700000000" className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
            <Phone className="h-4 w-4" />
            0700 000 000
          </a>
          <Link to="/contact">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 font-semibold rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-200">
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
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.to
                    ? "text-primary-foreground bg-primary shadow-sm"
                    : "text-foreground/70 hover:text-primary hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full mt-3 bg-secondary text-secondary-foreground hover:bg-secondary/80 font-semibold rounded-full shadow-md">
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
