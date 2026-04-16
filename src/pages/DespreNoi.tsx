import { Award, Truck, Factory, Users } from "lucide-react";
import aboutImg from "@/assets/about-plant.jpg";
import fleetImg from "@/assets/fleet.jpg";

const stats = [
  { icon: Factory, value: "210 m³/zi", label: "Capacitate de producție" },
  { icon: Truck, value: "8+", label: "Autobetoniere" },
  { icon: Users, value: "500+", label: "Clienți mulțumiți" },
  { icon: Award, value: "100%", label: "Beton certificat" },
];

const DespreNoi = () => (
  <>
    {/* Hero compact: title + stats side by side, no scroll needed */}
    <section className="section-padding bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Despre Invent Beton</h1>
            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong className="text-foreground">Invent Beton</strong> este o stație de betoane modernă situată în Ineu, județul Arad. Producem beton de înaltă calitate conform standardelor europene EN 206, cu livrare rapidă pe orice șantier din zonă.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Investim continuu în tehnologie, flotă și personal, pentru a oferi servicii complete: consultanță, producție, pompare și livrare.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-primary text-primary-foreground rounded-lg p-5 text-center">
                <s.icon className="h-8 w-8 mx-auto mb-2 text-secondary" />
                <div className="text-2xl md:text-3xl font-extrabold">{s.value}</div>
                <div className="text-xs text-primary-foreground/70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Fleet */}
    <section className="section-padding bg-card">
      <div className="container grid lg:grid-cols-2 gap-10 items-center">
        <img src={fleetImg} alt="Flota de autobetoniere Invent Beton" className="rounded-lg shadow-lg w-full object-cover h-80 lg:h-96 order-2 lg:order-1" loading="lazy" width={1200} height={800} />
        <div className="order-1 lg:order-2">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-4">Flotă Modernă de Autobetoniere</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Dispunem de o flotă proprie de peste 8 autobetoniere și pompe de beton, echipate pentru a asigura livrarea eficientă și la timp a betonului pe orice tip de șantier.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-secondary shrink-0" /> Autobetoniere cu capacitate 8–10 m³</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-secondary shrink-0" /> Pompe de beton cu braț de până la 36 m</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-secondary shrink-0" /> Vehicule verificate tehnic și menținute constant</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-secondary shrink-0" /> Șoferi cu experiență și profesionalism</li>
          </ul>
        </div>
      </div>
    </section>
  </>
);

export default DespreNoi;
