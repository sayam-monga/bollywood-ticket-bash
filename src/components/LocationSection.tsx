
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Phone, Mail } from 'lucide-react';
import { ScrollAnimation } from './ui/motion';

const LocationSection = () => {
  return (
    <section id="location" className="py-20 relative overflow-hidden bg-black">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-10"
        style={{
          backgroundImage: "url('/assets/bollywood-pattern-dark.svg')",
          backgroundSize: "cover",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <ScrollAnimation variant="fadeIn">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-bollywood-gold font-medium">
                <MapPin className="inline-block w-4 h-4 mr-2" />
                Party Venue
              </span>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation variant="slideUp">
            <h2 className="section-heading">
              Find Us Here
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mt-4">
              Join us at S-Lounge, one of Patiala's premium party venues, for an unforgettable Bollywood experience.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ScrollAnimation variant="slideUp">
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="relative aspect-video">
                {/* This would be a Google Maps iframe in a real implementation */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.437881366757!2d76.3893!3d30.3398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDIwJzIzLjMiTiA3NsKwMjMnMjEuNSJF!5e0!3m2!1sen!2sin!4v1622754085312!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    className="rounded-t-xl"
                  ></iframe>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <MapPin className="w-5 h-5 text-bollywood-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white">S-Lounge</h3>
                    <p className="text-white/70">Model Town, Patiala, Punjab, India</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 mb-4">
                  <Navigation className="w-5 h-5 text-bollywood-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white">Directions</h3>
                    <p className="text-white/70">5 mins drive from Patiala Bus Stand</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-bollywood-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white">Event Time</h3>
                    <p className="text-white/70">June 24, 2023 • 8:00 PM onwards</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="slideUp">
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-bollywood-gold/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-bollywood-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Phone</h4>
                    <p className="text-white/70">+91 98765 43210</p>
                    <p className="text-white/70">+91 95678 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-bollywood-gold/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-bollywood-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-white/70">bollywoodbash@example.com</p>
                    <p className="text-white/70">info@slounge.com</p>
                  </div>
                </div>
                
                <div className="pt-6 mt-6 border-t border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">Have Questions?</h4>
                  <motion.a
                    href="#contact"
                    className="bollywood-button w-full text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Us
                  </motion.a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
