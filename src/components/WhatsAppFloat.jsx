import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
    return (
        <a
            href="https://wa.me/919755486999?text=Hello%20DR.Prabhat Sir%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all transform hover:scale-110 z-50 group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} />
            <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1.5 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Chat with us
            </span>
        </a>
    );
};

export default WhatsAppFloat;
