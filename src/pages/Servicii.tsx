import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Truck, ArrowUpFromLine, Mountain, Wrench } from "lucide-react";
import pouringImg from "@/assets/pouring.jpg";
import aggregatesImg from "@/assets/aggregates.jpg";

const services = [
  {
    icon: Truck,
    title: "Livrare Beton",
    desc: "Flotă proprie de autobetoniere cu capacitate 8–10 m³. Livrăm beton proaspăt pe șantierul tău din Ineu și zonele limitrofe, la ora convenită.",
  },
  {
    icon: ArrowUpFromLine,
    title: "Pompare Beton",
    desc: "Pompe de beton cu braț de până la 36 m pentru turnări la înălțime sau în zone greu accesibile. Rapiditate și precizie.",
  },
  {
    icon: Mountain,
    title: "Agregate & Materiale",
    desc: "Nisip, pietriș, balast și alte agregate de calitate, disponibile pentru livrare directă pe șantier sau ridicare de la stație.",
  },
  {
    icon: Wrench,
    title: "Beton la Comandă",
    desc: "Rețete personalizate în funcție de specificațiile proiectului: beton cu fibră, impermeabil, autocompactant sau cu aditivi speciali.",
  },
];

const Servicii = () => (
  <>
    <section className="section-padding bg-card">
      <div className="container">
        <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Serviciile Noastre</h1>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Oferim servicii complete de producție, livrare și pompare beton, plus agregate de construcții, toate la standarde profesionale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((s) => (
            <div key={s.title} className="flex gap-5 bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <s.icon className="h-12 w-12 text-secondary shrink-0" />
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-2 gap-6">
          <img src={pouringImg} alt="Pompare beton pe șantier" className="rounded-lg shadow-md w-full h-72 object-cover" loading="lazy" width={1200} height={800} />
          <img src={aggregatesImg} alt="Agregate de construcții" className="rounded-lg shadow-md w-full h-72 object-cover" loading="lazy" width={1200} height={800} />
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary text-secondary-foreground text-center">
      <div className="container">
        <h2 className="text-3xl font-extrabold mb-4">Începe Proiectul cu Invent Beton</h2>
        <p className="text-secondary-foreground/80 max-w-lg mx-auto mb-8">Indiferent de dimensiunea proiectului, suntem pregătiți să livrăm. Solicită o ofertă acum!</p>
        <Link to="/contact">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-6">
            Solicită Ofertă
          </Button>
        </Link>
      </div>
    </section>
  </>
);

export default Servicii;
