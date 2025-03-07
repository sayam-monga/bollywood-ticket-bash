
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Search, Check, X, AlertCircle } from 'lucide-react';
import { verifyTicket } from '@/utils/ticketUtils';

interface TicketData {
  id: string;
  name: string;
  email: string;
  phone: string;
  ticketType: 'stag' | 'couple';
  quantity: number;
  purchaseDate: string;
  validationCode: string;
}

const QRVerifier: React.FC = () => {
  const [scanResult, setScanResult] = useState<{
    isValid: boolean;
    message: string;
    ticketData?: TicketData;
  } | null>(null);
  
  const [isScanning, setIsScanning] = useState(false);
  const [validationCode, setValidationCode] = useState('');
  
  // In a real implementation, this would use a QR scanner library
  // For this demo, we'll simulate scanning with a button
  const handleScan = () => {
    setIsScanning(true);
    
    // Simulate QR scanning delay
    setTimeout(() => {
      // Demo ticket data (in a real app, this would come from scanning the QR code)
      const demoTicketData: TicketData = {
        id: 'TKT-LCWRMAE-K39PY',
        name: 'Demo User',
        email: 'demo@example.com',
        phone: '9876543210',
        ticketType: 'stag',
        quantity: 1,
        purchaseDate: new Date().toISOString(),
        validationCode: '123456',
      };
      
      const verification = verifyTicket(demoTicketData);
      setScanResult({
        ...verification,
        ticketData: demoTicketData
      });
      setIsScanning(false);
    }, 2000);
  };
  
  const verifyValidationCode = () => {
    if (!scanResult?.ticketData) return;
    
    const isCodeValid = validationCode === scanResult.ticketData.validationCode;
    
    setScanResult({
      isValid: isCodeValid,
      message: isCodeValid ? 'Ticket validation code verified!' : 'Invalid validation code',
      ticketData: scanResult.ticketData
    });
  };
  
  const resetVerification = () => {
    setScanResult(null);
    setValidationCode('');
  };
  
  return (
    <motion.div 
      className="glass-card p-6 max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center justify-center mb-6">
        <QrCode className="w-6 h-6 text-white mr-2" />
        <h2 className="text-xl font-medium text-white">Ticket Verification</h2>
      </div>
      
      {!scanResult ? (
        <div className="text-center">
          <p className="text-white/80 mb-6">Scan a ticket QR code to verify</p>
          
          <motion.button
            className="verify-button w-full py-3 flex items-center justify-center"
            onClick={handleScan}
            disabled={isScanning}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isScanning ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Scanning...
              </>
            ) : (
              <>
                <Search className="w-5 h-5 mr-2" />
                Scan QR Code
              </>
            )}
          </motion.button>
        </div>
      ) : (
        <div>
          <div className={`p-4 rounded-lg mb-4 flex items-center ${scanResult.isValid ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
            {scanResult.isValid ? (
              <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            ) : (
              <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" />
            )}
            <span className="text-white">{scanResult.message}</span>
          </div>
          
          {scanResult.ticketData && (
            <div className="bg-white/5 rounded-lg p-4 mb-4">
              <h3 className="text-white font-medium mb-2">Ticket Information</h3>
              <div className="space-y-2 text-white/80">
                <p>Name: {scanResult.ticketData.name}</p>
                <p>Ticket ID: {scanResult.ticketData.id}</p>
                <p>Type: {scanResult.ticketData.ticketType === 'stag' ? 'Single Entry' : 'Couple Entry'}</p>
                <p>Quantity: {scanResult.ticketData.quantity}</p>
              </div>
            </div>
          )}
          
          {scanResult.isValid && (
            <div className="mb-4">
              <label className="block text-white/80 mb-1 text-sm">Enter Validation Code</label>
              <div className="flex items-center">
                <input
                  type="text"
                  value={validationCode}
                  onChange={(e) => setValidationCode(e.target.value)}
                  placeholder="6-digit code"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                  maxLength={6}
                />
                <motion.button
                  className="ml-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                  onClick={verifyValidationCode}
                  whileTap={{ scale: 0.95 }}
                >
                  Verify
                </motion.button>
              </div>
            </div>
          )}
          
          <motion.button
            className="verify-button-secondary w-full py-3 flex items-center justify-center"
            onClick={resetVerification}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Search className="w-5 h-5 mr-2" />
            Scan Another
          </motion.button>
        </div>
      )}
    </motion.div>
  );
};

export default QRVerifier;
