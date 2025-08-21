
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

interface WhatsAppButtonProps {
    phoneNumber: string;
    message: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 bg-green-500 text-white rounded-full p-4 shadow-lg"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }
                }}
            >
                <MessageSquare size={32} />
            </motion.div>
        </motion.a>
    );
};

export default WhatsAppButton;
