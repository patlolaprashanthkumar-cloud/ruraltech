import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919492036363"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-rural-green text-white p-4 rounded-full shadow-lg hover:bg-rural-green transition-all hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
