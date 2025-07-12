import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import logo from '../../assets/images/logo.jpg';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Create Shipment', to: '/create' },
  { label: 'Track Shipment', to: '/track' },
  { label: 'My Shipments', to: '/my-shipments' },
  { label: 'Profile', to: '/profile' },
];

const Navbar = () => {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <nav style={{
      width: '100%',
      background: '#fff',
      boxShadow: '0 2px 12px rgba(108,99,255,0.06)',
      padding: '0.5rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 10,
      fontFamily: 'Inter, Poppins, Arial, sans-serif',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.5rem',
        minHeight: 64,
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <img src={logo} alt="Delivera Logo" style={{ height: 70, maxWidth: 200, objectFit: 'contain' }} />
        </Link>
        {/* Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, marginLeft: 32 }}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color: location.pathname === link.to ? '#6C63FF' : '#222',
                fontWeight: 500,
                fontSize: '1.05rem',
                textDecoration: 'none',
                padding: '2px 0',
                borderBottom: location.pathname === link.to ? '2.5px solid #6C63FF' : '2.5px solid transparent',
                transition: 'color 0.2s, border-bottom 0.2s',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Auth Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {!user ? (
            <Link to="/login" style={{
              ...navBtnStyle('#fff', '#6C63FF', false),
              border: '2px solid #6C63FF',
            }}>
              Log In
            </Link>
          ) : (
            <Link to="/dashboard" style={navBtnStyle('#fff', '#6C63FF', true)}>
              Dashboard
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

function navBtnStyle(bg, color, outlined, bold) {
  return {
    display: 'inline-block',
    padding: '0.65rem 1.5rem',
    borderRadius: 10,
    fontWeight: bold ? 700 : 500,
    fontSize: '1.05rem',
    background: bg,
    color: color,
    border: outlined ? '2px solid #6C63FF' : 'none',
    boxShadow: outlined ? 'none' : '0 2px 8px rgba(108,99,255,0.10)',
    textDecoration: 'none',
    transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
    marginLeft: 2,
    letterSpacing: 0.2,
  };
}

export default Navbar; 