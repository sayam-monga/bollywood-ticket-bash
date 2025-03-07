
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, Calendar, Users, Ticket, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface TicketOption {
  type: 'stag' | 'couple';
  title: string;
  price: number;
  icon: React.ReactNode;
  benefits: string[];
}

interface BuyTicketModalProps {
  ticket: TicketOption;
  onClose: () => void;
}

const BuyTicketModal: React.FC<BuyTicketModalProps> = ({ ticket, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: 1,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);

  const totalAmount = ticket.price * formData.quantity;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    // Only allow quantity between 1 and 10
    if (value >= 1 && value <= 10) {
      setFormData(prev => ({ ...prev, quantity: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsProcessing(true);
      
      // Simulate PhonePe integration
      setTimeout(() => {
        setIsProcessing(false);
        toast.success('Payment successful! Tickets will be sent to your email.', {
          duration: 5000,
          position: 'top-center',
        });
        onClose();
      }, 2000);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-xl max-w-xl w-full overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 border-b border-white/10">
          <div className="flex items-center">
            <Ticket className="w-6 h-6 text-bollywood-gold mr-3" />
            <h3 className="text-xl font-bold text-white">Complete Your Booking</h3>
          </div>
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Ticket summary */}
        <div className="p-6 bg-white/5">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold text-white">{ticket.title}</h4>
              <div className="flex items-center text-white/70 mt-1">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="text-sm">June 24, 2023 • 8:00 PM</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-bollywood-gold">₹{ticket.price}</div>
              <div className="text-white/70 text-sm">per ticket</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-white/80 mb-1 text-sm">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full bg-white/10 border ${errors.name ? 'border-red-500' : 'border-white/20'} rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-bollywood-gold/50 transition-all`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <div className="mt-1 text-red-500 text-sm flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {errors.name}
                </div>
              )}
            </div>
            
            <div>
              <label className="block text-white/80 mb-1 text-sm">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-bollywood-gold/50 transition-all`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <div className="mt-1 text-red-500 text-sm flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {errors.email}
                </div>
              )}
            </div>
            
            <div>
              <label className="block text-white/80 mb-1 text-sm">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full bg-white/10 border ${errors.phone ? 'border-red-500' : 'border-white/20'} rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-bollywood-gold/50 transition-all`}
                placeholder="Enter your 10-digit number"
                maxLength={10}
              />
              {errors.phone && (
                <div className="mt-1 text-red-500 text-sm flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {errors.phone}
                </div>
              )}
            </div>
            
            <div>
              <label className="block text-white/80 mb-1 text-sm">Number of Tickets</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleQuantityChange}
                min={1}
                max={10}
                className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-bollywood-gold/50 transition-all"
              />
              <div className="mt-1 text-white/60 text-sm">Maximum 10 tickets per transaction</div>
            </div>
          </div>
          
          {/* Payment summary */}
          <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
            <div className="flex justify-between text-white/80 mb-2">
              <span>{ticket.title} × {formData.quantity}</span>
              <span>₹{ticket.price * formData.quantity}</span>
            </div>
            <div className="border-t border-white/10 my-2 pt-2 flex justify-between font-bold text-white">
              <span>Total Amount</span>
              <span className="text-bollywood-gold">₹{totalAmount}</span>
            </div>
          </div>

          {/* Submit button */}
          <motion.button
            type="submit"
            disabled={isProcessing}
            className="mt-6 bollywood-button w-full flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isProcessing ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing Payment...
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5 mr-2" />
                Pay with PhonePe ₹{totalAmount}
              </>
            )}
          </motion.button>
          
          <div className="mt-4 text-center text-white/60 text-sm">
            By completing this booking, you agree to our terms and conditions.
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default BuyTicketModal;
