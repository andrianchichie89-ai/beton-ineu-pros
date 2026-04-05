import { Award, Truck, Factory, Users } from "lucide-react";
import aboutImg from "@/assets/about-plant.jpg";
import fleetImg from "@/assets/fleet.jpg";

const stats = [
  { icon: Factory, value: "120 m³/zi", label: "Capacitate de producție" },
  { icon: Truck, value: "8+", label: "Autobetoniere" },
  { icon: Users, value: "500+", label: "Clienți mulțumiți" },
  { icon: Award, value: "100%", label: "Beton certificat" },
];

const DespreNoi = () => (
  <>
    <section className="section-padding bg-card">
      <div className="container">
        <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">Despre Invent Beton</h1>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Invent Beton</strong> este o stație de betoane modernă situată în Ineu, județul Arad. Cu echipamente de ultimă generație și o echipă dedicată, producem beton de înaltă calitate pentru o gamă variată de proiecte de construcții — de la fundații rezidențiale la lucrări industriale complexe.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ne mândrim cu respectarea strictă a standardelor europene EN 206, testare constantă în laborator și livrare la timp la orice șantier din zonă. Fiecare lot de beton este verificat și documentat pentru a garanta performanța și durabilitatea.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Investim continuu în tehnologie, flotă și personal, pentru a oferi clienților noștri servicii complete: de la consultanță în alegerea rețetei de beton, până la pompare și livrare pe șantier.
            </p>
          </div>
          <img src={aboutImg} alt="Stația de betoane Invent Beton" className="rounded-lg shadow-lg w-full object-cover h-80 lg:h-96" loading="lazy" width={1200} height={800} />
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <s.icon className="h-10 w-10 mx-auto mb-3 text-secondary" />
            <div className="text-3xl md:text-4xl font-extrabold">{s.value}</div>
            <div className="text-sm text-primary-foreground/70 mt-1">{s.label}</div>
          </div>
        ))}
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
