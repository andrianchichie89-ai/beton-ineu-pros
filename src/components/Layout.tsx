import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import ExitIntentPopup from "./ExitIntentPopup";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-1 pt-16 md:pt-20">{children}</main>
    <Footer />
    <WhatsAppButton />
    <ExitIntentPopup />
  </div>
);

export default Layout;
