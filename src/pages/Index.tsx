import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Truck, Clock, Award, ShieldCheck, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const advantages = [
  { icon: Award, title: "Calitate Certificată", desc: "Beton testat în laborator, conform standardelor europene EN 206." },
  { icon: Truck, title: "Livrare Rapidă", desc: "Flotă proprie de autobetoniere. Livrăm în Ineu și împrejurimi în cel mai scurt timp." },
  { icon: Clock, title: "Disponibilitate", desc: "Luni – Sâmbătă, de la primele ore ale dimineții până seara." },
  { icon: ShieldCheck, title: "Experiență Solidă", desc: "Ani de experiență în producția și livrarea de beton pentru proiecte de toate dimensiunile." },
];

const reviews = [
  { name: "Marian P.", text: "Am comandat beton C25/30 pentru fundația casei. Livrare la timp, calitate excelentă. Recomand cu încredere!", stars: 5 },
  { name: "SC Construct SRL", text: "Colaborăm de mai mulți ani cu Invent Beton. Seriozitate, prețuri corecte și beton de calitate constantă.", stars: 5 },
  { name: "Adrian T.", text: "Pompa de beton a fost la dispoziție fix când am avut nevoie. Echipa profesionistă, tot procesul a mers impecabil.", stars: 5 },
];

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="Stația de betoane Invent Beton - vedere aeriană" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative z-10 container text-center text-primary-foreground">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Beton de Calitate<br />pentru Construcții Solide
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-primary-foreground/80 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Stație de betoane modernă în Ineu, jud. Arad. Producție, livrare și pompare beton — rapid, sigur și la standarde europene.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Link to="/contact">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8 py-6 font-bold shadow-lg">
              Solicită Ofertă Acum
            </Button>
          </Link>
          <Link to="/tipuri-beton">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6 font-semibold">
              Vezi Tipuri de Beton
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Advantages */}
    <section className="section-padding bg-card">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-foreground">De Ce Să Alegi Invent Beton?</h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">Suntem partenerul de încredere pentru constructorii din vestul României.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((a) => (
            <div key={a.title} className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <a.icon className="h-10 w-10 text-secondary mb-4" />
              <h3 className="font-heading text-lg font-bold mb-2 text-foreground">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Reviews preview */}
    <section className="section-padding bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-foreground">Ce Spun Clienții Noștri</h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">Încrederea clienților este cea mai bună dovadă a calității.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card rounded-lg p-6 border border-border shadow-sm">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 mb-4 italic">"{r.text}"</p>
              <p className="font-heading font-bold text-sm text-foreground">{r.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/recenzii">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
              Vezi Toate Recenziile
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ai Nevoie de Beton?</h2>
        <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">Contactează-ne acum pentru o ofertă personalizată. Livrăm rapid în Ineu și zonele limitrofe.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-8 py-6">
              Solicită Ofertă
            </Button>
          </Link>
          <a href="tel:+40700000000">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-6">
              Sună Acum: 0700 000 000
            </Button>
          </a>
        </div>
      </div>
    </section>
  </>
);

export default Index;
