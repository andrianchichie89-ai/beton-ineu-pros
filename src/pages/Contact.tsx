import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "", phone: "", email: "", location: "", concreteClass: "", quantity: "", deliveryDate: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Cerere trimisă!", description: "Vă vom contacta în cel mai scurt timp." });
    setForm({ name: "", phone: "", email: "", location: "", concreteClass: "", quantity: "", deliveryDate: "", message: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <section className="section-padding bg-card">
      <div className="container">
        <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">Contact & Cerere Ofertă</h1>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Completează formularul de mai jos sau contactează-ne direct. Răspundem rapid la orice solicitare.
        </p>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Nume complet *</label>
                <Input value={form.name} onChange={update("name")} required placeholder="Ion Popescu" />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Telefon *</label>
                <Input value={form.phone} onChange={update("phone")} required type="tel" placeholder="07xx xxx xxx" />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">Email</label>
              <Input value={form.email} onChange={update("email")} type="email" placeholder="email@exemplu.ro" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Clasă beton dorită</label>
                <select
                  value={form.concreteClass}
                  onChange={update("concreteClass")}
                  className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground"
                >
                  <option value="">Selectează...</option>
                  {["C8/10","C12/15","C16/20","C20/25","C25/30","C30/37","C35/45","C40/50","Beton special","Nu știu"].map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Cantitate (m³)</label>
                <Input value={form.quantity} onChange={update("quantity")} placeholder="ex: 15" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Locație șantier</label>
                <Input value={form.location} onChange={update("location")} placeholder="Oraș / adresă" />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Dată livrare dorită</label>
                <Input value={form.deliveryDate} onChange={update("deliveryDate")} type="date" />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-1 block">Mesaj / Detalii suplimentare</label>
              <Textarea value={form.message} onChange={update("message")} placeholder="Descrieți cerințele proiectului..." rows={4} />
            </div>
            <Button type="submit" size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-10 py-6 w-full sm:w-auto">
              Trimite Cererea de Ofertă
            </Button>
          </form>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="font-heading font-bold text-foreground mb-4">Date de Contact</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <a href="tel:+40700000000" className="flex items-center gap-3 hover:text-secondary transition-colors">
                  <Phone className="h-5 w-5 text-secondary shrink-0" /> 0700 000 000
                </a>
                <a href="mailto:contact@inventbeton.ro" className="flex items-center gap-3 hover:text-secondary transition-colors">
                  <Mail className="h-5 w-5 text-secondary shrink-0" /> contact@inventbeton.ro
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" /> Ineu, jud. Arad, România
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p>Luni – Vineri: 06:00 – 18:00</p>
                    <p>Sâmbătă: 07:00 – 14:00</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/40700000000?text=Bună%20ziua,%20doresc%20o%20ofertă%20de%20beton."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-[#fff] rounded-lg p-4 font-bold transition-colors"
            >
              <MessageCircle className="h-5 w-5" /> Scrie-ne pe WhatsApp
            </a>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-border h-64">
              <iframe
                title="Locația Invent Beton"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21853.17!2d21.83!3d46.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455c8a0a0a0a0a%3A0x0!2sIneu%2C%20Arad!5e0!3m2!1sro!2sro!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
