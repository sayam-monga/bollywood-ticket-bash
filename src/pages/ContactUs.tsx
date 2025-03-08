
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactUs = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-bollywood-red to-bollywood-gold bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Have questions about the Bollywood Bash event? We're here to help you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 p-8 rounded-lg border border-white/10"
          >
            <h2 className="text-2xl font-bold mb-6 text-bollywood-gold">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="Ticket Inquiry" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Type your message here..." 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 min-h-[120px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="bollywood-button w-full"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-bollywood-gold">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-bollywood-gold/20 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-bollywood-gold" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-white/70">+91 98765 43210</p>
                  <p className="text-white/70">+91 95678 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-bollywood-gold/20 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-bollywood-gold" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-white/70">bollywoodbash@example.com</p>
                  <p className="text-white/70">info@slounge.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-bollywood-gold/20 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-bollywood-gold" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Venue</h3>
                  <p className="text-white/70">S-Lounge</p>
                  <p className="text-white/70">123 Entertainment Street, Patiala</p>
                  <p className="text-white/70">Punjab, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Event Hours</h3>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <p className="mb-2"><strong>Date:</strong> June 24, 2023</p>
                <p className="mb-2"><strong>Time:</strong> 7:00 PM - 1:00 AM</p>
                <p><strong>Dress Code:</strong> Party Wear</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactUs;
