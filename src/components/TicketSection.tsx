
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollAnimation, ScaleIn } from './ui/motion';
import { Ticket, Users, User, Check, X } from 'lucide-react';
import BuyTicketModal from './BuyTicketModal';

type TicketType = 'stag' | 'couple';

interface TicketOption {
  type: TicketType;
  title: string;
  price: number;
  icon: React.ReactNode;
  benefits: string[];
}

const ticketOptions: TicketOption[] = [
  {
    type: 'stag',
    title: 'Stag Entry',
    price: 250,
    icon: <User className="w-10 h-10 text-bollywood-gold" />,
    benefits: [
      'Entry for one person',
      'Welcome drink included',
      'Access to all areas',
      'Dance floor access',
    ],
  },
  {
    type: 'couple',
    title: 'Couple Entry',
    price: 400,
    icon: <Users className="w-10 h-10 text-bollywood-purple" />,
    benefits: [
      'Entry for two people',
      'Two welcome drinks included',
      'Access to all areas',
      'Dance floor access',
      'Priority entry',
    ],
  },
];

const TicketSection = () => {
  const [selectedTicket, setSelectedTicket] = useState<TicketType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTicketSelection = (type: TicketType) => {
    setSelectedTicket(type);
    setIsModalOpen(true);
  };

  return (
    <section 
      id="tickets" 
      className="py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.7)), 
                   url("/assets/bollywood-pattern-light.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background decorative elements */}
      <motion.div 
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-bollywood-gold opacity-20 blur-3xl"
        animate={{ 
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-bollywood-red opacity-20 blur-3xl"
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <ScrollAnimation variant="fadeIn">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-bollywood-gold font-medium">
                <Ticket className="inline-block w-4 h-4 mr-2" />
                Choose Your Experience
              </span>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation variant="slideUp">
            <h2 className="section-heading">
              Book Your Tickets
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mt-4">
              Select the perfect ticket option for your Bollywood night experience.
              Limited tickets available, book now to secure your spot!
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ticketOptions.map((ticket, index) => (
            <ScrollAnimation key={ticket.type} variant="scale">
              <motion.div
                className="relative glass-card overflow-hidden rounded-xl p-6 h-full"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Ticket header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    {ticket.icon}
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-white">{ticket.title}</h3>
                      <p className="text-white/70">Per entry</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-bollywood-gold">₹{ticket.price}</span>
                  </div>
                </div>

                {/* Ticket decorative holes */}
                <div className="ticket-ornament -left-2 top-1/2"></div>
                <div className="ticket-ornament -right-2 top-1/2"></div>

                {/* Horizontal separator with dashed line */}
                <div className="relative my-4">
                  <div className="absolute left-0 right-0 border-t border-dashed border-white/30"></div>
                </div>

                {/* Ticket benefits */}
                <ul className="space-y-3 mb-8">
                  {ticket.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-bollywood-gold flex-shrink-0 mt-0.5 mr-3" />
                      <span className="text-white/80">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Buy button */}
                <div className="mt-auto">
                  <motion.button
                    className="bollywood-button w-full"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleTicketSelection(ticket.type)}
                  >
                    Book Now
                  </motion.button>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedTicket && (
          <BuyTicketModal
            ticket={ticketOptions.find(t => t.type === selectedTicket)!}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default TicketSection;
