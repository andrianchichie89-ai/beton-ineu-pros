import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Calculator as CalcIcon, Truck, Phone } from "lucide-react";

const betonPrices: Record<string, { label: string; price: number }> = {
  "C8/10": { label: "C8/10 – Beton de egalizare", price: 280 },
  "C12/15": { label: "C12/15 – Fundații ușoare", price: 300 },
  "C16/20": { label: "C16/20 – Fundații, trotuare", price: 320 },
  "C20/25": { label: "C20/25 – Plăci, grinzi, stâlpi", price: 340 },
  "C25/30": { label: "C25/30 – Structuri rezidențiale", price: 370 },
  "C30/37": { label: "C30/37 – Construcții industriale", price: 400 },
  "C35/45": { label: "C35/45 – Solicitări ridicate", price: 440 },
  "C40/50": { label: "C40/50 – Infrastructură", price: 480 },
};

const TRANSPORT_PER_MC = 30;
const PUMP_COST = 800;

const CalculatorPage = () => {
  const [clasa, setClasa] = useState("");
  const [cantitate, setCantitate] = useState("");
  const [pompare, setPompare] = useState("nu");
  const [result, setResult] = useState<{
    betonTotal: number;
    transportTotal: number;
    pompareTotal: number;
    total: number;
  } | null>(null);

  const handleCalculate = () => {
    if (!clasa || !cantitate || Number(cantitate) <= 0) return;
    const qty = Number(cantitate);
    const betonTotal = betonPrices[clasa].price * qty;
    const transportTotal = TRANSPORT_PER_MC * qty;
    const pompareTotal = pompare === "da" ? PUMP_COST : 0;
    setResult({
      betonTotal,
      transportTotal,
      pompareTotal,
      total: betonTotal + transportTotal + pompareTotal,
    });
  };

  const canCalculate = clasa && cantitate && Number(cantitate) > 0;

  return (
    <>
      <section className="section-padding bg-card">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <CalcIcon className="w-4 h-4" />
              Estimare Rapidă
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Calculator Preț Beton
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Obține o estimare orientativă a costului betonului pentru proiectul
              tău. Prețurile sunt informative și pot varia — contactează-ne
              pentru o ofertă exactă.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-background border border-border rounded-xl p-6 md:p-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="clasa" className="font-heading font-bold">
                  Clasa de Beton
                </Label>
                <Select value={clasa} onValueChange={setClasa}>
                  <SelectTrigger id="clasa">
                    <SelectValue placeholder="Selectează clasa de beton" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(betonPrices).map(([key, val]) => (
                      <SelectItem key={key} value={key}>
                        {val.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cantitate" className="font-heading font-bold">
                  Cantitate (m³)
                </Label>
                <Input
                  id="cantitate"
                  type="number"
                  min="1"
                  max="500"
                  step="0.5"
                  placeholder="Ex: 10"
                  value={cantitate}
                  onChange={(e) => setCantitate(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pompare" className="font-heading font-bold">
                  Necesită pompare?
                </Label>
                <Select value={pompare} onValueChange={setPompare}>
                  <SelectTrigger id="pompare">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nu">Nu</SelectItem>
                    <SelectItem value="da">Da (+800 lei)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleCalculate}
                disabled={!canCalculate}
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold py-6 text-base"
                size="lg"
              >
                <CalcIcon className="w-5 h-5 mr-2" />
                Calculează Prețul
              </Button>
            </div>

            {/* Result */}
            <div className="bg-background border border-border rounded-xl p-6 md:p-8 flex flex-col justify-between">
              {result ? (
                <div className="space-y-6">
                  <h2 className="text-xl font-extrabold text-foreground font-heading">
                    Estimare Preț
                  </h2>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">
                        Beton {clasa} × {cantitate} m³
                      </span>
                      <span className="font-bold text-foreground">
                        {result.betonTotal.toLocaleString("ro-RO")} lei
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Truck className="w-4 h-4" /> Transport
                      </span>
                      <span className="font-bold text-foreground">
                        {result.transportTotal.toLocaleString("ro-RO")} lei
                      </span>
                    </div>
                    {result.pompareTotal > 0 && (
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Pompare</span>
                        <span className="font-bold text-foreground">
                          {result.pompareTotal.toLocaleString("ro-RO")} lei
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-heading font-bold text-foreground">
                        Total Estimat
                      </span>
                      <span className="text-2xl font-extrabold text-secondary">
                        {result.total.toLocaleString("ro-RO")} lei
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      * Prețuri orientative, fără TVA. Contactează-ne pentru
                      ofertă personalizată.
                    </p>
                  </div>

                  <Link to="/contact">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-5">
                      <Phone className="w-4 h-4 mr-2" />
                      Solicită Ofertă Exactă
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center h-full py-12 text-muted-foreground">
                  <CalcIcon className="w-16 h-16 mb-4 opacity-20" />
                  <p className="font-heading font-bold text-foreground mb-1">
                    Completează datele
                  </p>
                  <p className="text-sm">
                    Selectează clasa de beton și cantitatea dorită pentru a vedea
                    estimarea de preț.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container">
          <h2 className="text-3xl font-extrabold mb-4">
            Prețurile depind de specificul proiectului?
          </h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
            Echipa noastră îți oferă o ofertă personalizată în funcție de
            cantitate, distanță și cerințe speciale.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-8 py-6"
            >
              Contactează-ne Acum
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default CalculatorPage;
