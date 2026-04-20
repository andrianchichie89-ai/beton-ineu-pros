import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Printer, Phone, Scissors, BadgePercent, Sparkles, Check, Calendar } from "lucide-react";

const tiers = [
  { range: "5 – 19 mc", discount: "5%", note: "Ideal pentru fundații case, garaje, anexe" },
  { range: "20 – 49 mc", discount: "7%", note: "Pentru hale mici, planșee și platforme" },
  { range: "50+ mc", discount: "10%", note: "Reducere maximă pentru proiecte mari" },
];

const benefits = [
  "Aplicabil la orice clasă de beton",
  "Cumulabil cu transportul gratuit (peste 30 mc)",
  "Valabil pentru o singură comandă",
  "Prezintă cuponul printat la birou sau șofer",
];

const generateCode = () => {
  const now = new Date();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const y = String(now.getFullYear()).slice(2);
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `BETON-${m}${y}-${rand}`;
};

const getEndOfMonth = () => {
  const d = new Date();
  return new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59);
};

const Oferta = () => {
  const code = useMemo(generateCode, []);
  const endDate = useMemo(getEndOfMonth, []);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = endDate.getTime() - Date.now();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [endDate]);

  const handlePrint = () => window.print();
  const validUntil = endDate.toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      {/* Print styles — only the coupon prints */}
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          #coupon-printable, #coupon-printable * { visibility: visible !important; }
          #coupon-printable {
            position: absolute !important;
            top: 0; left: 0; right: 0;
            width: 100% !important;
            padding: 24px !important;
            box-shadow: none !important;
          }
          .no-print { display: none !important; }
        }
      `}</style>

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary to-secondary/80 text-primary-foreground no-print">
        <div className="container text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-secondary/30 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Ofertă Specială Limitată</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Reducere până la <span className="text-secondary-foreground bg-secondary/40 px-3 rounded-lg">10%</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-8">
            Printează cuponul de mai jos și prezintă-l la comandă. Reducerea se aplică automat în funcție de cantitate.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/80">
            <Calendar className="h-4 w-4" />
            Valabil până pe <strong className="text-primary-foreground">{validUntil}</strong>
          </div>
        </div>
      </section>

      {/* Coupon + Countdown */}
      <section className="section-padding bg-muted">
        <div className="container max-w-4xl">
          {/* Countdown */}
          <div className="no-print mb-10">
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Oferta expiră în
            </p>
            <div className="flex justify-center gap-3 md:gap-5">
              {[
                { v: timeLeft.days, l: "Zile" },
                { v: timeLeft.hours, l: "Ore" },
                { v: timeLeft.minutes, l: "Min" },
                { v: timeLeft.seconds, l: "Sec" },
              ].map((t) => (
                <div key={t.l} className="bg-card border border-border rounded-xl px-4 md:px-6 py-3 md:py-4 min-w-[70px] md:min-w-[90px] shadow-sm text-center">
                  <div className="text-3xl md:text-5xl font-extrabold text-primary tabular-nums leading-none">
                    {String(t.v).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground mt-1 font-semibold">
                    {t.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coupon Card */}
          <div
            id="coupon-printable"
            className="relative bg-card rounded-2xl shadow-2xl overflow-hidden border-2 border-secondary/30"
          >
            {/* Decorative top stripe */}
            <div className="h-2 bg-gradient-to-r from-secondary via-primary to-secondary" />

            <div className="grid md:grid-cols-[1fr_auto_1.4fr]">
              {/* Left — discount value */}
              <div className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground p-8 md:p-10 flex flex-col justify-center items-center text-center">
                <BadgePercent className="h-12 w-12 mb-3 text-secondary-foreground/90" />
                <p className="text-xs uppercase tracking-[0.2em] font-semibold opacity-80 mb-2">Reducere până la</p>
                <div className="text-7xl md:text-8xl font-extrabold leading-none">10<span className="text-4xl md:text-5xl align-top">%</span></div>
                <p className="mt-3 text-sm opacity-90">la comanda ta de beton</p>
              </div>

              {/* Perforated divider */}
              <div className="hidden md:flex flex-col items-center justify-center px-1 bg-card relative">
                <div className="absolute inset-y-4 w-px border-l-2 border-dashed border-border" />
                <Scissors className="relative bg-card text-muted-foreground h-5 w-5 my-2 -rotate-90" />
              </div>
              <div className="md:hidden flex items-center justify-center py-2 bg-card">
                <div className="flex-1 border-t-2 border-dashed border-border mx-4" />
                <Scissors className="text-muted-foreground h-5 w-5" />
                <div className="flex-1 border-t-2 border-dashed border-border mx-4" />
              </div>

              {/* Right — details */}
              <div className="p-8 md:p-10">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-heading text-xl font-extrabold text-primary leading-tight">
                    INVENT <span className="text-secondary">BETON</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Cupon</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-2 mb-4">
                  Reducere pe niveluri
                </h2>

                <div className="space-y-2 mb-5">
                  {tiers.map((t) => (
                    <div key={t.range} className="flex items-center justify-between gap-3 bg-muted/60 rounded-lg px-3 py-2">
                      <div>
                        <div className="text-sm font-bold text-foreground">{t.range}</div>
                        <div className="text-xs text-muted-foreground">{t.note}</div>
                      </div>
                      <div className="text-2xl font-extrabold text-secondary">{t.discount}</div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-dashed border-border pt-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Cod cupon</p>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <code className="text-lg md:text-xl font-mono font-bold text-primary bg-muted px-3 py-1.5 rounded-md tracking-wider">
                      {code}
                    </code>
                    <span className="text-xs text-muted-foreground">
                      Valabil până: <strong className="text-foreground">{validUntil}</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer strip */}
            <div className="bg-muted/60 border-t border-border px-6 md:px-10 py-3 text-[11px] md:text-xs text-muted-foreground text-center">
              Prezintă acest cupon printat la sediul nostru sau șoferului la livrare. Nu se cumulează cu alte promoții active.
            </div>
          </div>

          {/* Actions */}
          <div className="no-print flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Button
              onClick={handlePrint}
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-8 py-6 shadow-lg"
            >
              <Printer className="mr-1" /> Printează Cuponul
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 w-full sm:w-auto">
                Solicită Ofertă Acum
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-card no-print">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-foreground">
            Cum funcționează cuponul
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-foreground/80">{b}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-primary text-primary-foreground rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">Ai întrebări despre ofertă?</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Sună-ne și îți calculăm exact reducerea pentru proiectul tău.
            </p>
            <a href="tel:+40700000000">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-8 py-6">
                <Phone className="mr-1" /> 0700 000 000
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Oferta;