
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Eye, EyeOff, RefreshCw, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

interface Ticket {
  type: 'STAG' | 'COUPLE';
  quantity: number;
  price: number;
}

interface Booking {
  _id: string;
  tickets: Ticket[];
  totalAmount: number;
  name: string;
  email: string;
  phone: string;
  userId: string;
  paymentId: string;
  bookingId: string;
  status: 'PENDING' | 'CONFIRMED' | 'USED';
  createdAt: string;
}

const AdminDashboard = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'bookings' | 'users'>('bookings');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { toast } = useToast();

  const authenticate = () => {
    if (password === 'blablabla') {
      setAuthenticated(true);
      localStorage.setItem('adminAuthenticated', 'true');
      fetchData();
    } else {
      toast({
        title: "Authentication failed",
        description: "The password you entered is incorrect.",
        variant: "destructive"
      });
    }
  };

  const logout = () => {
    setAuthenticated(false);
    localStorage.removeItem('adminAuthenticated');
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const [bookingsResponse, usersResponse] = await Promise.all([
        fetch('https://true-ticket-api.onrender.com/api/info'),
        fetch('https://true-ticket-api.onrender.com/api/userInfo')
      ]);

      if (!bookingsResponse.ok || !usersResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const bookingsData = await bookingsResponse.json();
      const usersData = await usersResponse.json();

      setBookings(bookingsData.data || []);
      setUsers(usersData.data || []);
      
      toast({
        title: "Data refreshed",
        description: "The latest booking and user data has been loaded."
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: "Error fetching data",
        description: "Could not fetch the latest data. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
    setAuthenticated(isAuthenticated);
    
    if (isAuthenticated) {
      fetchData();
    }
  }, []);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto p-8 rounded-lg border border-white/10 bg-white/5"
          >
            <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-bollywood-red to-bollywood-gold bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="mb-6 text-white/70">Please enter the admin password to access the dashboard.</p>
            
            <div className="space-y-4">
              <div className="relative">
                <Input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                  onKeyPress={(e) => e.key === 'Enter' && authenticate()}
                />
                <button 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <Button className="w-full" onClick={authenticate}>
                Access Dashboard
              </Button>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <h1 className="text-3xl font-bold mb-4 md:mb-0 bg-gradient-to-r from-bollywood-red to-bollywood-gold bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={fetchData}
              disabled={loading}
            >
              <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh Data
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={logout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </motion.div>

        <div className="mb-6">
          <div className="flex space-x-2 border-b border-white/10">
            <button
              className={`py-2 px-4 font-medium ${activeTab === 'bookings' ? 'border-b-2 border-bollywood-red text-white' : 'text-white/60 hover:text-white'}`}
              onClick={() => setActiveTab('bookings')}
            >
              Bookings
            </button>
            <button
              className={`py-2 px-4 font-medium ${activeTab === 'users' ? 'border-b-2 border-bollywood-red text-white' : 'text-white/60 hover:text-white'}`}
              onClick={() => setActiveTab('users')}
            >
              Users
            </button>
          </div>
        </div>

        {activeTab === 'bookings' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 rounded-lg border border-white/10 overflow-x-auto"
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Booking ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Ticket Type</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.length > 0 ? (
                  bookings.map((booking) => (
                    <TableRow key={booking._id}>
                      <TableCell className="font-medium">{booking.bookingId}</TableCell>
                      <TableCell>{booking.name}</TableCell>
                      <TableCell>{booking.email}</TableCell>
                      <TableCell>{booking.phone}</TableCell>
                      <TableCell>
                        {booking.tickets.map((ticket, idx) => (
                          <div key={idx}>{ticket.type}</div>
                        ))}
                      </TableCell>
                      <TableCell>
                        {booking.tickets.map((ticket, idx) => (
                          <div key={idx}>{ticket.quantity}</div>
                        ))}
                      </TableCell>
                      <TableCell>₹{booking.totalAmount}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          booking.status === 'CONFIRMED' ? 'bg-green-500/20 text-green-400' :
                          booking.status === 'USED' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {booking.status}
                        </span>
                      </TableCell>
                      <TableCell>{new Date(booking.createdAt).toLocaleDateString()}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center py-6 text-white/70">
                      {loading ? 'Loading data...' : 'No bookings found'}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </motion.div>
        )}

        {activeTab === 'users' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 rounded-lg border border-white/10 overflow-x-auto"
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <TableRow key={user._id}>
                      <TableCell className="font-medium">{user._id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.phone}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-6 text-white/70">
                      {loading ? 'Loading data...' : 'No users found'}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
