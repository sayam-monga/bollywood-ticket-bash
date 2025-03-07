
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PartyPopper, Music, Calendar, MapPin } from 'lucide-react';
import { FadeIn, RevealText, ScrollAnimation } from './ui/motion';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center py-20"
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9)), 
                    url("/assets/bollywood-pattern.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated circles in background */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-bollywood-gold opacity-20 blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ rotate: -10 }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-bollywood-red opacity-20 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ rotate: 15 }}
      />

      <motion.div style={{ y, opacity, scale }} className="z-10 container px-4 mx-auto text-center">
        <ScrollAnimation variant="fadeIn">
          <motion.div 
            className="inline-block mb-4 px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="font-bold text-bollywood-gold">
              <PartyPopper className="inline-block w-5 h-5 mr-2 text-bollywood-gold" />
              The Ultimate Bollywood Experience
            </span>
          </motion.div>
        </ScrollAnimation>

        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="block">
            <RevealText delay={0.3}>Bollywood</RevealText>
          </span>
          <span className="block mt-2 bg-gradient-to-r from-bollywood-red to-bollywood-gold bg-clip-text text-transparent">
            <RevealText delay={0.6}>Ticket Bash</RevealText>
          </span>
        </motion.h1>

        <FadeIn delay={1.2}>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Experience the magic of Bollywood at S-Lounge, Patiala. 
            A night filled with music, dance, and entertainment.
          </p>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <ScrollAnimation variant="slideUp">
            <div className="flex items-center text-white/90 bg-white/10 backdrop-blur-sm 
                            px-4 py-2 rounded-lg border border-white/20">
              <Calendar className="w-5 h-5 mr-2 text-bollywood-gold" />
              <span>June 24, 2023 • 8:00 PM</span>
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="slideUp">
            <div className="flex items-center text-white/90 bg-white/10 backdrop-blur-sm 
                            px-4 py-2 rounded-lg border border-white/20">
              <MapPin className="w-5 h-5 mr-2 text-bollywood-gold" />
              <span>S-Lounge, Patiala</span>
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="slideUp">
            <div className="flex items-center text-white/90 bg-white/10 backdrop-blur-sm 
                            px-4 py-2 rounded-lg border border-white/20">
              <Music className="w-5 h-5 mr-2 text-bollywood-gold" />
              <span>Live DJ & Performances</span>
            </div>
          </ScrollAnimation>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex justify-center"
        >
          <motion.a
            href="#tickets"
            className="bollywood-button text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Your Tickets Now
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ opacity }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div 
            className="w-1 h-2 bg-white/80 rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
