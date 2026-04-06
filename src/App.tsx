import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import DespreNoi from "./pages/DespreNoi";
import TipuriBeton from "./pages/TipuriBeton";
import Servicii from "./pages/Servicii";
import Galerie from "./pages/Galerie";
import Recenzii from "./pages/Recenzii";
import Contact from "./pages/Contact";
import Calculator from "./pages/Calculator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/despre-noi" element={<DespreNoi />} />
            <Route path="/tipuri-beton" element={<TipuriBeton />} />
            <Route path="/servicii" element={<Servicii />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/recenzii" element={<Recenzii />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
