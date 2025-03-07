
import React, { useEffect } from 'react';
import { motion, useScroll, useAnimation } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TicketSection from '@/components/TicketSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';

const Index = () => {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Minimal progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-white z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      <Navbar />
      
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.6 }}
      >
        <Hero />
        <TicketSection />
        <LocationSection />
        <Footer />
      </motion.main>
    </div>
  );
};

export default Index;
