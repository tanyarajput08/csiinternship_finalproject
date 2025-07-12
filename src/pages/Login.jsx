import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/images/logo.jpg';

const socialBtns = [
  { label: 'Google', icon: 'G', color: '#fff', border: '#e0e0e0' },
  { label: 'Shopify', icon: 'S', color: '#fff', border: '#e0e0e0' },
  { label: 'Phone No', icon: 'P', color: '#fff', border: '#e0e0e0' },
];

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = '#f6f8fc';
    return () => { document.body.style.background = prev; };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!form.email || !form.password) {
      setError('Please fill in all fields');
      return;
    }
    try {
      const userData = {
        id: 1,
        name: form.email.split('@')[0],
        email: form.email,
        role: 'user'
      };
      login(userData);
      navigate('/dashboard');
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 64px)',
        width: '100vw',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        margin: 0,
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: 22,
          boxShadow: '0 8px 32px rgba(108,99,255,0.10)',
          maxWidth: 520,
          width: '100%',
          maxHeight: 1120,
          height: 'auto',
          overflow: 'auto',
          margin: 0,
          padding: '1.3rem 1rem 1.2rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '2px solid #222',
        }}
      >
        <img src={logo} alt="Logo" style={{ height: 40, marginBottom: 12, marginTop: 2 }} />
        <h2 style={{
          textAlign: 'center',
          fontWeight: 700,
          fontSize: '1.08rem',
          marginBottom: 18,
          color: '#18181b',
          letterSpacing: 0.2
        }}>
          Login To Delivera Using
        </h2>
        <div style={{
          display: 'flex',
          gap: 8,
          width: '100%',
          marginBottom: 12,
          justifyContent: 'center'
        }}>
          <button style={{ flex: 1, background: '#fff', border: '1.5px solid #e0e0e0', borderRadius: 8, padding: '0.5rem 0', fontWeight: 600, fontSize: '0.95rem', color: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
            <span style={{ fontSize: 16, marginRight: 4 }}>G</span> Google
          </button>
          <button style={{ flex: 1, background: '#fff', border: '1.5px solid #e0e0e0', borderRadius: 8, padding: '0.5rem 0', fontWeight: 600, fontSize: '0.95rem', color: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
            <span style={{ fontSize: 16, marginRight: 4 }}>S</span> Shopify
          </button>
          <button style={{ flex: 1, background: '#fff', border: '1.5px solid #e0e0e0', borderRadius: 8, padding: '0.5rem 0', fontWeight: 600, fontSize: '0.95rem', color: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
            <span style={{ fontSize: 16, marginRight: 4 }}>P</span> Phone No
          </button>
        </div>
        <div style={{
          width: '100%',
          textAlign: 'center',
          color: '#bdbdbd',
          fontWeight: 500,
          fontSize: 13,
          margin: '6px 0 12px 0',
          letterSpacing: 0.2
        }}>
          <span style={{
            display: 'inline-block',
            width: '40%',
            borderBottom: '1px solid #e0e0e0',
            verticalAlign: 'middle',
            marginRight: 6
          }}></span>
          or
          <span style={{
            display: 'inline-block',
            width: '40%',
            borderBottom: '1px solid #e0e0e0',
            verticalAlign: 'middle',
            marginLeft: 6
          }}></span>
        </div>
        <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          <div>
            <label htmlFor="email" style={{ fontWeight: 500, color: '#222', fontSize: 13, marginBottom: 2, display: 'block' }}>Email ID</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email ID"
              value={form.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.6rem 0.7rem', borderRadius: 8, border: '1.5px solid #e0e0e0', fontSize: 14, marginTop: 1, background: '#fafbfc' }}
            />
          </div>
          <div>
            <label htmlFor="password" style={{ fontWeight: 500, color: '#222', fontSize: 13, marginBottom: 2, display: 'block' }}>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.6rem 0.7rem', borderRadius: 8, border: '1.5px solid #e0e0e0', fontSize: 14, marginTop: 1, background: '#fafbfc' }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: -6 }}>
            <Link to="#" style={{ color: '#6C63FF', fontSize: 12, textDecoration: 'none', fontWeight: 500 }}>Forgot Password?</Link>
          </div>
          {error && <p style={{ color: '#ff5c5c', textAlign: 'center', marginBottom: '0.3rem', fontWeight: 500, fontSize: 13 }}>{error}</p>}
          <button type="submit" style={{
            background: '#6C63FF',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '0.7rem 0',
            fontWeight: 700,
            fontSize: '1rem',
            marginTop: 1,
            boxShadow: '0 2px 8px rgba(108,99,255,0.10)',
            cursor: 'pointer',
            letterSpacing: 0.5
          }}>
            Login
          </button>
          <div style={{ textAlign: 'center', marginTop: 6, color: '#bdbdbd', fontSize: 13 }}>
            New to Delivera?{' '}
            <Link to="/register" style={{ color: '#6C63FF', fontWeight: 600, textDecoration: 'none' }}>Sign Up Now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
