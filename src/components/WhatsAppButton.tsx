import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://chat.whatsapp.com/E0IEJulwpgP6K5nvnGSBTj?mode=gi_t"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
    aria-label="Contact us on WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-background fill-background" />
  </a>
);

export default WhatsAppButton;
