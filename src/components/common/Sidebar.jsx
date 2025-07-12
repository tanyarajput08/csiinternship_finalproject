import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside style={{
    width: '100%',
    backgroundColor: 'transparent',
    padding: '2rem 1rem',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }}>
    <nav style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '1.5rem',
      width: '100%'
    }}>
      <Link to="/" style={{ 
        color: 'white', 
        textDecoration: 'none', 
        fontSize: '1.1rem',
        fontWeight: '500',
        padding: '0.5rem 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>Home</Link>
      <Link to="/dashboard" style={{ 
        color: 'white', 
        textDecoration: 'none', 
        fontSize: '1.1rem',
        fontWeight: '500',
        padding: '0.5rem 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>Dashboard</Link>
      <Link to="/create" style={{ 
        color: 'white', 
        textDecoration: 'none', 
        fontSize: '1.1rem',
        fontWeight: '500',
        padding: '0.5rem 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>Create Shipment</Link>
      <Link to="/track" style={{ 
        color: 'white', 
        textDecoration: 'none', 
        fontSize: '1.1rem',
        fontWeight: '500',
        padding: '0.5rem 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>Track Shipment</Link>
      <Link to="/my-shipments" style={{ 
        color: 'white', 
        textDecoration: 'none', 
        fontSize: '1.1rem',
        fontWeight: '500',
        padding: '0.5rem 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>My Shipments</Link>
      <Link to="/profile" style={{ 
        color: 'white', 
        textDecoration: 'none', 
        fontSize: '1.1rem',
        fontWeight: '500',
        padding: '0.5rem 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>Profile</Link>
    </nav>
  </aside>
);

export default Sidebar;

