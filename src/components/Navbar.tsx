
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X, Ticket } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

interface NavItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Tickets', href: '#tickets' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderNavLink = (item: NavItem, index: number, isMobileView: boolean = false) => {
    const LinkComponent = item.isExternal !== true && !item.href.startsWith('#') 
      ? (props: any) => <Link to={item.href} {...props} />
      : (props: any) => <a href={item.href} {...props} />;

    return (
      <motion.li 
        key={item.name}
        initial={{ opacity: 0, x: isMobileView ? -20 : 0, y: isMobileView ? 0 : -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ 
          delay: isMobileView ? 0.1 * index : 0.1 * index + 0.3, 
          duration: isMobileView ? 0.3 : 0.5 
        }}
      >
        <LinkComponent 
          className={`text-white hover:text-bollywood-gold transition-colors duration-300 ${isMobileView ? 'block py-2 text-lg' : 'font-medium'}`}
          onClick={isMobileView ? () => setIsMobileMenuOpen(false) : undefined}
        >
          {item.name}
        </LinkComponent>
      </motion.li>
    );
  };

  return (
    <motion.nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-black/80 backdrop-blur-md py-2 shadow-lg'
          : 'bg-transparent py-4'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link to="/" className="flex items-center">
            <Ticket className="h-8 w-8 text-bollywood-gold mr-2" />
            <span className="font-display text-2xl font-bold bg-gradient-to-r from-bollywood-red to-bollywood-gold bg-clip-text text-transparent">
              Bollywood Bash
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <ul className="flex gap-8 items-center">
            {navItems.map((item, index) => renderNavLink(item, index))}
            <motion.li
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <a 
                href="#tickets" 
                className="bollywood-button"
              >
                Book Now
              </a>
            </motion.li>
          </ul>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <motion.button
            className="text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {isMobileMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </motion.button>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-black bg-opacity-90 backdrop-blur-md shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="flex flex-col gap-4">
                {navItems.map((item, index) => renderNavLink(item, index, true))}
                
                {/* Additional pages in mobile menu */}
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <Link 
                    to="/terms" 
                    className="text-white/70 hover:text-bollywood-gold transition-colors block py-2 text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Terms & Conditions
                  </Link>
                </motion.li>
                
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  <Link 
                    to="/privacy-policy" 
                    className="text-white/70 hover:text-bollywood-gold transition-colors block py-2 text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Privacy Policy
                  </Link>
                </motion.li>
                
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                >
                  <Link 
                    to="/refund-policy" 
                    className="text-white/70 hover:text-bollywood-gold transition-colors block py-2 text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Refund Policy
                  </Link>
                </motion.li>
                
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                  className="mt-4"
                >
                  <a 
                    href="#tickets" 
                    className="bollywood-button block text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book Now
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
