import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BadgePercent, X, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "invent-beton-exit-popup-shown";

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    let triggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (triggered) return;
      if (e.clientY <= 0) {
        triggered = true;
        setOpen(true);
        localStorage.setItem(STORAGE_KEY, "1");
      }
    };

    let mobileTimer: number | undefined;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      mobileTimer = window.setTimeout(() => {
        if (!triggered) {
          triggered = true;
          setOpen(true);
          localStorage.setItem(STORAGE_KEY, "1");
        }
      }, 30000);
    }

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (mobileTimer) window.clearTimeout(mobileTimer);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/70 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="exit-popup-title"
        >
          <motion.div
            initial={{ scale: 0.85, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 280 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-card shadow-2xl border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label="Închide"
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 hover:bg-background text-foreground/70 hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative bg-gradient-to-br from-secondary via-secondary to-primary text-secondary-foreground px-8 pt-10 pb-12 text-center overflow-hidden">
              <motion.div
                initial={{ rotate: -10, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", damping: 12 }}
                className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 mb-4"
              >
                <BadgePercent className="h-8 w-8" />
              </motion.div>
              <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-90 mb-2 flex items-center justify-center gap-2">
                <Sparkles className="h-3 w-3" /> Stai puțin! <Sparkles className="h-3 w-3" />
              </p>
              <h2 id="exit-popup-title" className="text-3xl md:text-4xl font-extrabold leading-tight mb-2">
                Ai uitat cuponul tău!
              </h2>
              <p className="text-sm md:text-base opacity-95 max-w-sm mx-auto">
                Beneficiază de până la <span className="font-extrabold underline decoration-2 underline-offset-2">10% reducere</span> la următoarea comandă de beton.
              </p>

              <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="h-3 w-3 rounded-full bg-card" />
                ))}
              </div>
            </div>

            <div className="px-8 pt-8 pb-7 text-center">
              <ul className="text-sm text-muted-foreground space-y-2 mb-6 text-left max-w-xs mx-auto">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-0.5">✓</span>
                  <span>Reducere pe niveluri (5% / 7% / 10%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-0.5">✓</span>
                  <span>Cod unic generat instant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-0.5">✓</span>
                  <span>Printează și prezintă la comandă</span>
                </li>
              </ul>

              <Link to="/oferta" onClick={close} className="block">
                <Button
                  size="lg"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-base py-6 shadow-lg group"
                >
                  Revendică Cuponul
                  <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <button
                onClick={close}
                className="mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Nu, mulțumesc
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;