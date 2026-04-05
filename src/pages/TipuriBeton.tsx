import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const concreteClasses = [
  { cls: "C8/10", use: "Beton de egalizare, umpluturi", type: "Standard" },
  { cls: "C12/15", use: "Fundații ușoare, ziduri de sprijin", type: "Standard" },
  { cls: "C16/20", use: "Fundații case, trotuare, garduri", type: "Standard" },
  { cls: "C20/25", use: "Plăci, grinzi, stâlpi, scări", type: "Standard" },
  { cls: "C25/30", use: "Structuri rezidențiale, fundații complexe", type: "Standard" },
  { cls: "C30/37", use: "Construcții industriale, poduri, hale", type: "Standard" },
  { cls: "C35/45", use: "Structuri cu solicitări ridicate", type: "Premium" },
  { cls: "C40/50", use: "Proiecte speciale, infrastructură", type: "Premium" },
];

const specialTypes = [
  { name: "Beton cu Fibră", desc: "Rezistență sporită la fisurare, ideal pentru plăci și pardoseli industriale." },
  { name: "Beton Pompabil", desc: "Consistență optimizată pentru pompare la distanță și înălțime mare." },
  { name: "Beton Impermeabil", desc: "Protecție împotriva infiltrațiilor, pentru subsoluri și piscine." },
  { name: "Șapă de Beton", desc: "Soluție ideală pentru nivelare și finisaje interioare." },
  { name: "Mortar", desc: "Pentru zidărie, tencuieli și reparații." },
  { name: "Beton la Comandă", desc: "Rețete personalizate conform cerințelor specifice ale proiectului." },
];

const TipuriBeton = () => (
  <>
    <section className="section-padding bg-card">
      <div className="container">
        <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Tipuri de Beton</h1>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Producem toate clasele de beton conform standardului european EN 206. Fiecare lot este testat în laborator pentru a garanta conformitatea.
        </p>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-border mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-left px-4 py-3 font-heading font-bold">Clasa Beton</th>
                <th className="text-left px-4 py-3 font-heading font-bold">Utilizare Tipică</th>
                <th className="text-left px-4 py-3 font-heading font-bold">Categorie</th>
                <th className="text-left px-4 py-3 font-heading font-bold">Preț</th>
              </tr>
            </thead>
            <tbody>
              {concreteClasses.map((c, i) => (
                <tr key={c.cls} className={i % 2 === 0 ? "bg-card" : "bg-muted/50"}>
                  <td className="px-4 py-3 font-bold text-foreground">{c.cls}</td>
                  <td className="px-4 py-3 text-muted-foreground">{c.use}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${c.type === "Premium" ? "bg-secondary/20 text-secondary" : "bg-primary/10 text-primary"}`}>
                      {c.type}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <Link to="/contact" className="text-secondary font-semibold hover:underline text-xs">
                      Cere Preț →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Special types */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">Beton Special & Produse Conexe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialTypes.map((s) => (
            <div key={s.name} className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-heading font-bold text-foreground mb-2">{s.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <Link to="/contact" className="text-secondary text-sm font-semibold hover:underline">
                Solicită Ofertă →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-primary text-primary-foreground text-center">
      <div className="container">
        <h2 className="text-3xl font-extrabold mb-4">Nu știi ce clasă de beton ai nevoie?</h2>
        <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">Echipa noastră te ajută să alegi rețeta potrivită pentru proiectul tău. Contactează-ne gratuit!</p>
        <Link to="/contact">
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-8 py-6">
            Consultanță Gratuită
          </Button>
        </Link>
      </div>
    </section>
  </>
);

export default TipuriBeton;
