
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            How we collect, use, and protect your personal information.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/5 rounded-lg border border-white/10 p-8 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-8 bg-bollywood-gold/10 p-6 rounded-lg border border-bollywood-gold/30">
            <Shield className="w-8 h-8 text-bollywood-gold mr-4" />
            <p className="text-lg font-semibold text-white">
              We value your privacy and are committed to protecting your personal information.
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-3 text-bollywood-gold">Introduction</h2>
              <p className="text-white/80">
                This Privacy Policy explains how we collect, use, and protect your personal information when you purchase tickets for or attend the Bollywood Bash event. By using our website and services, you consent to the practices described in this policy.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-3 text-bollywood-gold">Information We Collect</h2>
              <p className="text-white/80">We may collect the following types of personal information:</p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-white/80">
                <li>Name, email address, and phone number for ticket purchases and communications</li>
                <li>Payment information when you purchase tickets (processed securely by Razorpay)</li>
                <li>Attendance history and preferences</li>
                <li>Communications you send to us</li>
                <li>Photos and videos taken during the event</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-3 text-bollywood-gold">How We Use Your Information</h2>
              <p className="text-white/80">We use your personal information for the following purposes:</p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-white/80">
                <li>To process ticket purchases and send confirmation emails</li>
                <li>To verify tickets at the entrance of the event</li>
                <li>To communicate important information about the event</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To improve our services and plan future events</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-3 text-bollywood-gold">Data Security</h2>
              <p className="text-white/80">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Payment processing is handled securely by Razorpay, and we do not store your full payment details on our servers.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-3 text-bollywood-gold">Data Sharing</h2>
              <p className="text-white/80">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-white/80">
                <li>Service providers who assist us in operating our website and conducting our business (e.g., payment processors, email service providers)</li>
                <li>Law enforcement or government authorities when required by law</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-3 text-bollywood-gold">Cookies and Tracking</h2>
              <p className="text-white/80">
                Our website may use cookies and similar tracking technologies to enhance your experience and collect information about how you use our website. You can control cookies through your browser settings.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-3 text-bollywood-gold">Your Rights</h2>
              <p className="text-white/80">
                You have the right to:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-white/80">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-3 text-bollywood-gold">Children's Privacy</h2>
              <p className="text-white/80">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-3 text-bollywood-gold">Changes to This Policy</h2>
              <p className="text-white/80">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website. We encourage you to review this Privacy Policy periodically.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-3 text-bollywood-gold">Contact Us</h2>
              <p className="text-white/80">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-white/80 mt-2">
                Email: bollywoodbash@example.com<br />
                Phone: +91 98765 43210
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
