
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import QRVerifier from '@/components/QRVerifier';
import Footer from '@/components/Footer';

const VerifyTicket = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-20"
      >
        <div className="text-center mb-12">
          <motion.h1 
            className="text-3xl md:text-4xl font-medium mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Verify Ticket
          </motion.h1>
          <motion.p
            className="text-white/80 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            Scan the QR code from the ticket email to verify its authenticity
          </motion.p>
        </div>
        
        <QRVerifier />
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default VerifyTicket;
