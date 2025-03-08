
import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black">
      {/* Decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-bollywood-red via-bollywood-gold to-bollywood-purple"></div>
      
      <div 
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,1)), url('/assets/bollywood-pattern-dark.svg')",
          backgroundSize: "cover",
        }}
      >
        {/* Content */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo & About */}
            <div>
              <motion.div 
                className="flex items-center mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Ticket className="h-8 w-8 text-bollywood-gold mr-2" />
                <span className="font-display text-2xl font-bold bg-gradient-to-r from-bollywood-red to-bollywood-gold bg-clip-text text-transparent">
                  Bollywood Bash
                </span>
              </motion.div>
              
              <p className="text-white/70 mb-6">
                Experience the magic of Bollywood at S-Lounge, Patiala. A night of music, dance, and entertainment.
              </p>
              
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-bollywood-gold hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-bollywood-gold hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-bollywood-gold hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-white/70 hover:text-bollywood-gold transition-colors duration-200">Home</Link>
                </li>
                <li>
                  <a href="#tickets" className="text-white/70 hover:text-bollywood-gold transition-colors duration-200">Tickets</a>
                </li>
                <li>
                  <a href="#location" className="text-white/70 hover:text-bollywood-gold transition-colors duration-200">Location</a>
                </li>
                <li>
                  <Link to="/contact" className="text-white/70 hover:text-bollywood-gold transition-colors duration-200">Contact</Link>
                </li>
                <li>
                  <Link to="/terms" className="text-white/70 hover:text-bollywood-gold transition-colors duration-200">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-white/70 hover:text-bollywood-gold transition-colors duration-200">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/refund-policy" className="text-white/70 hover:text-bollywood-gold transition-colors duration-200">Refund Policy</Link>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div id="contact">
              <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-bollywood-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-white/70">+91 98765 43210</p>
                    <p className="text-white/70">+91 95678 12345</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-bollywood-gold mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-white/70">bollywoodbash@example.com</p>
                    <p className="text-white/70">info@slounge.com</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/contact">
                  <motion.button
                    className="bollywood-button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get In Touch
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-white/60">
              © {currentYear} Bollywood Ticket Bash. All rights reserved.
            </p>
            <p className="text-white/40 mt-2 text-sm">
              Designed with ❤️ for Bollywood fans
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
