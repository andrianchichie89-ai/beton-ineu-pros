import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const reviews = [
  { name: "Marian Popescu", role: "Proprietar casă, Ineu", stars: 5, text: "Am comandat beton C25/30 pentru fundația casei. Livrare la timp, calitate excelentă, echipă serioasă. Recomand cu încredere!" },
  { name: "SC Construct Pro SRL", role: "Firmă de construcții", stars: 5, text: "Colaborăm de mai mulți ani cu Invent Beton. Seriozitate, prețuri corecte și beton de calitate constantă. Partenerul nostru de încredere." },
  { name: "Adrian Toma", role: "Inginer constructor", stars: 5, text: "Pompa de beton a fost la dispoziție fix când am avut nevoie. Echipa profesionistă, tot procesul a mers impecabil. Calitate top!" },
  { name: "Ion Dragomir", role: "Proprietar casă, Sebiș", stars: 5, text: "Am ridicat un gard și o terasă. Betonul a fost livrat la fix, fără întârzieri. Prețul a fost corect, iar echipa foarte amabilă." },
  { name: "SC Edil Vest SRL", role: "Developer imobiliar", stars: 5, text: "Pentru blocul nostru de apartamente am ales Invent Beton și nu am regretat. Consistența betonului și documentația sunt ireproșabile." },
  { name: "Maria Crișan", role: "Proprietar casă, Ineu", stars: 4, text: "Totul a decurs bine, livrare rapidă și beton de calitate. Singura sugestie: un program extins sâmbăta. În rest, impecabil!" },
  { name: "Gheorghe Lazăr", role: "Antreprenor general", stars: 5, text: "Lucrez cu mai multe stații din zonă, dar Invent Beton este cea mai constantă ca și calitate. Recomand ferm!" },
  { name: "SC Bau Haus SRL", role: "Firmă de construcții", stars: 5, text: "Promptitudine, calitate, flexibilitate. Exact ce ai nevoie pe un șantier. Am fost foarte mulțumiți de colaborare." },
];

const Recenzii = () => (
  <section className="section-padding bg-card">
    <div className="container">
      <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Recenzii & Recomandări</h1>
      <p className="text-muted-foreground max-w-2xl mb-12">
        Încrederea clienților noștri este cea mai valoroasă recunoaștere. Iată ce spun cei care au ales Invent Beton.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {reviews.map((r) => (
          <div key={r.name} className="bg-background border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < r.stars ? "fill-secondary text-secondary" : "text-border"}`} />
              ))}
            </div>
            <p className="text-sm text-foreground/80 mb-4 italic leading-relaxed">"{r.text}"</p>
            <div>
              <p className="font-heading font-bold text-sm text-foreground">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-xl font-extrabold text-foreground mb-2">Ai lucrat cu noi?</h2>
        <p className="text-muted-foreground text-sm mb-4">Lasă-ne o recenzie pe Google sau Facebook și ajută alți constructori să ne cunoască.</p>
        <div className="flex gap-4 justify-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
            Recenzie Google
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
            Recenzie Facebook
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Recenzii;
