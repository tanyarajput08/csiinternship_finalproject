import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/images/logo-dark.jpeg';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header style={{ 
      padding: '1rem 0', 
      borderBottom: '1px solid var(--border-color)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src={logo} alt="Delivera Logo" style={{ height: 44, maxWidth: 120, objectFit: 'contain', marginRight: 8 }} />
      </Link>
      {user && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ color: 'var(--text-secondary)' }}>
            Welcome, {user.name}
          </span>
          <button 
            onClick={handleLogout}
            style={{ 
              backgroundColor: 'transparent', 
              border: '1px solid var(--error)',
              color: 'var(--error)',
              padding: '0.5rem 1rem'
            }}
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
