import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUserPlus, FaSignInAlt, FaBoxOpen, FaMapMarkedAlt, FaMobileAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSlider from '../components/common/HeroSlider';

const features = [
  {
    icon: <FaUserPlus size={36} color="#6c47ff" />,
    title: 'User Registration',
    desc: 'Create your account to access personalized shipment tracking and management.',
  },
  {
    icon: <FaSignInAlt size={36} color="#6c47ff" />,
    title: 'Login',
    desc: 'Secure login for returning users to manage and track shipments easily.',
  },
  {
    icon: <FaBoxOpen size={36} color="#6c47ff" />,
    title: 'Initiate Shipments',
    desc: 'Send packages by providing sender, receiver, package size, and address.',
  },
  {
    icon: <FaMapMarkedAlt size={36} color="#6c47ff" />,
    title: 'Track Shipments',
    desc: 'Monitor your shipment status in real-time with our tracking system.',
  },
  {
    icon: <FaMobileAlt size={36} color="#6c47ff" />,
    title: 'User-friendly Interface',
    desc: 'Enjoy a smooth, responsive experience across all devices.',
  },
];

const Home = () => {
  const { user } = useAuth();

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <>
      {/* Animated Blobs Background */}
      <div className="blob-bg">
        <div className="blob blob-blue" />
        <div className="blob blob-pink" />
        <div className="blob blob-yellow" />
        <div className="blob blob-purple" />
        <div className="blob blob-orange" />
        <div className="blob blob-primary" />
        <div className="blob blob-red" />
        <div className="blob blob-pinkish" />
        <div className="blob blob-cyan" />
        <div className="blob blob-magenta" />
      </div>

      {/* Hero Slider */}
      <HeroSlider />

      {/* Hero Section (with Login button below heading) */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '4rem', position: 'relative', zIndex: 1 }}>
        <div data-aos="fade-up">
          <h1 className="section-title black" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Shipment Delivery Made Easy 🚚
          </h1>
          <p className="section-desc" style={{ fontSize: '1.25rem' }}>
            Manage, track, and deliver your shipments with a modern, secure, and user-friendly platform.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2.5rem' }}>
            {!user && (
              <Link to="/login">
                <button style={{ fontSize: '1.1rem', padding: '0.9rem 2.2rem', background: 'var(--surface)', color: 'var(--primary)', border: '1px solid var(--primary)' }}>Login</button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ paddingTop: 0, position: 'relative', zIndex: 1 }}>
        <h2 className="section-title black" data-aos="fade-up">Features</h2>
        <p className="section-desc" data-aos="fade-up">
          Everything you need to manage and track your shipments efficiently.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '2.5rem' }}>
          {features.map((feature, idx) => (
            <div
              className="card"
              key={feature.title}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              style={{ flex: '1 1 260px', maxWidth: 320, minWidth: 220, textAlign: 'center' }}
            >
              <div style={{ marginBottom: '1rem' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--primary)' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About/How It Works Section */}
      <section className="section" style={{ paddingTop: 0, position: 'relative', zIndex: 1 }}>
        <h2 className="section-title black" data-aos="fade-up">How It Works</h2>
        <p className="section-desc" data-aos="fade-up">
          Register, create a shipment, and track your delivery—all in a few clicks!
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '2.5rem' }}>
          <div className="card" data-aos="fade-right" style={{ minWidth: 220, maxWidth: 320, flex: '1 1 260px', textAlign: 'center' }}>
            <FaUserPlus size={32} color="#6c47ff" style={{ marginBottom: 8 }} />
            <h4 style={{ color: 'var(--primary)', margin: '0.5rem 0' }}>1. Register</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Sign up for a free account to get started.</p>
          </div>
          <div className="card" data-aos="fade-up" style={{ minWidth: 220, maxWidth: 320, flex: '1 1 260px', textAlign: 'center' }}>
            <FaBoxOpen size={32} color="#6c47ff" style={{ marginBottom: 8 }} />
            <h4 style={{ color: 'var(--primary)', margin: '0.5rem 0' }}>2. Create Shipment</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Fill in shipment details and initiate delivery.</p>
          </div>
          <div className="card" data-aos="fade-left" style={{ minWidth: 220, maxWidth: 320, flex: '1 1 260px', textAlign: 'center' }}>
            <FaMapMarkedAlt size={32} color="#6c47ff" style={{ marginBottom: 8 }} />
            <h4 style={{ color: 'var(--primary)', margin: '0.5rem 0' }}>3. Track</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Monitor your shipment status in real-time.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ width: '100%', padding: '2rem 0 1rem 0', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1rem', borderTop: '1px solid var(--border-color)', marginTop: '3rem', background: 'rgba(247,248,250,0.7)', position: 'relative', zIndex: 2 }}>
        <span>Delivera &copy; {new Date().getFullYear()} &mdash; Shipment Delivery App</span>
      </footer>
    </>
  );
};

export default Home;
