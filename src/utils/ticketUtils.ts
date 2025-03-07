
import QRCode from 'qrcode';

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

// Generate a unique ticket ID
export const generateTicketId = (): string => {
  return `TKT-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
};

// Generate validation code (6 digits)
export const generateValidationCode = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Generate QR code from ticket data
export const generateQRCode = async (ticketData: TicketData): Promise<string> => {
  try {
    // Convert ticket data to a JSON string
    const ticketJson = JSON.stringify(ticketData);
    // Generate QR code as data URL
    const qrCodeDataUrl = await QRCode.toDataURL(ticketJson);
    return qrCodeDataUrl;
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw new Error('Failed to generate QR code');
  }
};

// Verify ticket data from QR code
export const verifyTicket = (ticketData: TicketData): { isValid: boolean; message: string } => {
  // This is a simple verification. In a real application, you would check against a database.
  if (!ticketData || !ticketData.id || !ticketData.validationCode) {
    return { isValid: false, message: 'Invalid ticket data' };
  }
  
  // Check if ticket is expired (example: tickets valid for 1 day after purchase)
  const purchaseDate = new Date(ticketData.purchaseDate);
  const currentDate = new Date();
  const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
  
  // For this example, considering tickets are valid for the event date (June 24, 2023)
  const eventDate = new Date('2023-06-24');
  
  if (currentDate > eventDate) {
    return { isValid: false, message: 'Ticket expired. Event has already passed.' };
  }
  
  return { isValid: true, message: 'Ticket is valid' };
};

export const sendTicketEmail = async (email: string, name: string, qrCodeDataUrl: string, ticketData: TicketData): Promise<boolean> => {
  // In a real implementation, this would connect to an email service API
  // For demonstration, we'll simulate a successful email send
  
  console.log(`Email sent to ${email} with ticket QR code`);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return true;
};
