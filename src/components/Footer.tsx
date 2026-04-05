import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-surface-dark text-surface-dark-foreground">
    <div className="container section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-extrabold mb-4">
            INVENT<span className="text-secondary"> BETON</span>
          </h3>
          <p className="text-surface-dark-foreground/70 text-sm leading-relaxed">
            Stație de betoane modernă din Ineu, jud. Arad. Oferim beton de calitate superioară, livrare rapidă și servicii complete pentru construcții.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4 text-secondary">Navigare</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/despre-noi", label: "Despre Noi" },
              { to: "/tipuri-beton", label: "Tipuri de Beton" },
              { to: "/servicii", label: "Servicii" },
              { to: "/galerie", label: "Galerie" },
              { to: "/recenzii", label: "Recenzii" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-surface-dark-foreground/70 hover:text-secondary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4 text-secondary">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-surface-dark-foreground/70">
            <a href="tel:+40700000000" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4 shrink-0" /> 0700 000 000
            </a>
            <a href="mailto:contact@inventbeton.ro" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="h-4 w-4 shrink-0" /> contact@inventbeton.ro
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" /> Ineu, jud. Arad, România
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4 text-secondary">Program</h4>
          <div className="text-sm text-surface-dark-foreground/70 space-y-1">
            <p>Luni – Vineri: 06:00 – 18:00</p>
            <p>Sâmbătă: 07:00 – 14:00</p>
            <p>Duminică: Închis</p>
          </div>
        </div>
      </div>

      <div className="border-t border-surface-dark-foreground/10 mt-10 pt-6 text-center text-xs text-surface-dark-foreground/50">
        © {new Date().getFullYear()} Invent Beton. Toate drepturile rezervate.
      </div>
    </div>
  </footer>
);

export default Footer;
