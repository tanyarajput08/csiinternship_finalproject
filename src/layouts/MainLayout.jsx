import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import logo from '../assets/images/logo.jpg';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const MainLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      backgroundColor: 'var(--background)', 
      color: 'var(--text-primary)',
      margin: 0,
      padding: 0,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }}>
      <div style={{
        width: '220px',
        minHeight: '100vh',
        backgroundColor: 'black',
        borderRight: '2px solid #e0e0e0',
        position: 'relative',
        zIndex: 1,
        margin: 0,
        padding: 0,
      }}>
        <Sidebar />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header with logo and navigation */}
        <header style={{
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
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <img src={logo} alt="Delivera Logo" style={{ height: 70, maxWidth: 200, objectFit: 'contain' }} />
            </div>
            {/* Nav Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
              <a href="/" style={{
                color: '#222',
                fontWeight: 500,
                fontSize: '1.05rem',
                textDecoration: 'none',
                padding: '2px 0',
                borderBottom: '2.5px solid transparent',
                transition: 'color 0.2s, border-bottom 0.2s',
              }}>Home</a>
              <a href="/create" style={{
                color: '#222',
                fontWeight: 500,
                fontSize: '1.05rem',
                textDecoration: 'none',
                padding: '2px 0',
                borderBottom: '2.5px solid transparent',
                transition: 'color 0.2s, border-bottom 0.2s',
              }}>Create Shipment</a>
              <a href="/track" style={{
                color: '#222',
                fontWeight: 500,
                fontSize: '1.05rem',
                textDecoration: 'none',
                padding: '2px 0',
                borderBottom: '2.5px solid transparent',
                transition: 'color 0.2s, border-bottom 0.2s',
              }}>Track Shipment</a>
              <a href="/my-shipments" style={{
                color: '#222',
                fontWeight: 500,
                fontSize: '1.05rem',
                textDecoration: 'none',
                padding: '2px 0',
                borderBottom: '2.5px solid transparent',
                transition: 'color 0.2s, border-bottom 0.2s',
              }}>My Shipments</a>
              <a href="/profile" style={{
                color: '#222',
                fontWeight: 500,
                fontSize: '1.05rem',
                textDecoration: 'none',
                padding: '2px 0',
                borderBottom: '2.5px solid transparent',
                transition: 'color 0.2s, border-bottom 0.2s',
              }}>Profile</a>
            </div>
            {/* Profile Icon and Dropdown on the right */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }} ref={dropdownRef}>
              <FaUserCircle 
                size={32} 
                color="#222" 
                style={{ cursor: 'pointer' }} 
                onClick={() => setDropdownOpen((open) => !open)}
              />
              {dropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: 40,
                  right: 0,
                  background: '#e5e7eb',
                  boxShadow: '0 2px 12px rgba(108,99,255,0.10)',
                  borderRadius: 12,
                  minWidth: 220,
                  padding: '0.5rem 0',
                  zIndex: 100,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0
                }}>
                  {/* Current Plan (purple) */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.75rem 1.5rem', color: '#6C63FF', fontWeight: 500, fontSize: '1rem', cursor: 'pointer' }}>
                    <span style={{ display: 'inline-block', width: 20, textAlign: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#6C63FF"><rect width="18" height="18" rx="3"/></svg>
                    </span>
                    Current Plan
                  </div>
                  {/* Refer & Earn */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.75rem 1.5rem', color: '#555', fontWeight: 500, fontSize: '1rem', cursor: 'pointer' }}>
                    <span style={{ display: 'inline-block', width: 20, textAlign: 'center' }}>🎁</span>
                    Refer & Earn
                  </div>
                  {/* Rate Us */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.75rem 1.5rem', color: '#555', fontWeight: 500, fontSize: '1rem', cursor: 'pointer' }}>
                    <span style={{ display: 'inline-block', width: 20, textAlign: 'center' }}>👍</span>
                    Rate Us
                  </div>
                  {/* Terms & Conditions */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.75rem 1.5rem', color: '#555', fontWeight: 500, fontSize: '1rem', cursor: 'pointer' }}>
                    <span style={{ display: 'inline-block', width: 20, textAlign: 'center' }}>📄</span>
                    Terms & Conditions
                  </div>
                  {/* Keyboard Shortcuts */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.75rem 1.5rem', color: '#555', fontWeight: 500, fontSize: '1rem', cursor: 'pointer' }}>
                    <span style={{ display: 'inline-block', width: 20, textAlign: 'center' }}>⌨️</span>
                    Keyboard Shortcuts
                  </div>
                  {/* Logout */}
                  <button 
                    onClick={handleLogout}
                    style={{
                      background: 'none',
                      color: '#ff5c5c',
                      border: 'none',
                      textAlign: 'left',
                      padding: '0.75rem 1.5rem',
                      fontWeight: 500,
                      fontSize: '1rem',
                      cursor: 'pointer',
                      borderRadius: 0,
                      transition: 'background 0.2s',
                    }}
                  >
                    <span style={{ display: 'inline-block', width: 20, textAlign: 'center' }}>⏻</span>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>
        <main style={{ flex: 1, padding: '0.5rem 0.5rem 0 0.5rem' }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
