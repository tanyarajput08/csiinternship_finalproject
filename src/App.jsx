import { BrowserRouter, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ShipmentsProvider } from './context/ShipmentsContext';
import './styles/global.css';
import Navbar from './components/common/Navbar';
import AppRoutes from './routes/AppRoutes';

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || 
                    location.pathname === '/dashboard' || 
                    location.pathname === '/create' || 
                    location.pathname === '/track' || 
                    location.pathname === '/my-shipments' || 
                    location.pathname === '/profile';
  return (
    <div className="app">
      {!hideNavbar && <Navbar />}
      <AppRoutes />
    </div>
  );
}

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <ShipmentsProvider>
        <AppContent />
      </ShipmentsProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
