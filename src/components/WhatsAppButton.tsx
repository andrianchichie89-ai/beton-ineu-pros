import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/40700000000?text=Bună%20ziua,%20doresc%20o%20ofertă%20de%20beton."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-[#fff] rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110"
    aria-label="WhatsApp"
  >
    <MessageCircle className="h-6 w-6" />
  </a>
);

export default WhatsAppButton;
