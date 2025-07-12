import { useState, useEffect, useRef } from 'react';
import { FaBoxOpen, FaSearchLocation, FaUsers, FaSatellite, FaClock, FaMobileAlt, FaBolt, FaGlobeAsia, FaClipboardList, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import eeImg from '../../assets/images/ee.jpg';
import c3Img from '../../assets/images/c4.jpg';
import c2Img from '../../assets/images/c2.jpg';

const slides = [
  {
    header: 'Deliveria – Simplifying Delivery, One Click at a Time.',
    subtext: 'From booking to tracking, we make delivery effortless for individuals and businesses.',
    features: [
      { icon: <FaBoxOpen color="#6C63FF" size={22} />, text: 'Easy Shipment Booking' },
      { icon: <FaSearchLocation color="#6C63FF" size={22} />, text: 'Real-Time Tracking' },
      { icon: <FaUsers color="#6C63FF" size={22} />, text: 'Login & Manage All Orders' },
    ],
    cta: { text: 'Get Started Free', link: '/register' },
    image: eeImg,
  },
  {
    header: 'Track It. Trust It. Deliver It.',
    subtext: 'Stay updated on every move your parcel makes, from pickup to drop.',
    features: [
      { icon: <FaSatellite color="#6C63FF" size={22} />, text: 'Live Shipment Tracking' },
      { icon: <FaClock color="#6C63FF" size={22} />, text: 'Estimated Delivery Time' },
      { icon: <FaMobileAlt color="#6C63FF" size={22} />, text: 'Instant Notifications' },
    ],
    cta: { text: 'Track My Shipment', link: '/track' },
    image: c3Img,
  },
  {
    header: 'Fast. Reliable. Yours.',
    subtext: 'Deliver with speed and confidence. Your delivery partner for every distance.',
    features: [
      { icon: <FaBolt color="#6C63FF" size={22} />, text: 'Quick Delivery Options' },
      { icon: <FaGlobeAsia color="#6C63FF" size={22} />, text: 'Deliver Anywhere in India' },
      { icon: <FaClipboardList color="#6C63FF" size={22} />, text: 'Order History & Status' },
    ],
    cta: { text: 'Login & Ship Now', link: '/login' },
    image: c2Img,
  },
];

const CARD_WIDTH = 1240;
const CARD_HEIGHT = 580;

const IMAGE_SIZE = 480;

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef();

  // Auto-slide every 2 seconds
  useEffect(() => {
    if (!hovered) {
      intervalRef.current = setInterval(() => {
        setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
      }, 2000);
    }
    return () => clearInterval(intervalRef.current);
  }, [hovered]);

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: CARD_HEIGHT + 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        background: 'transparent',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          maxWidth: 1280,
          margin: '0 auto',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3.5rem',
          padding: '2.5rem 1rem',
        }}
      >
        {/* Card Content with Image inside */}
        <div
          style={{
            background: '#fff',
            borderRadius: 22,
            boxShadow: '0 8px 32px rgba(108,99,255,0.10)',
            minWidth: CARD_WIDTH,
            maxWidth: CARD_WIDTH,
            minHeight: CARD_HEIGHT,
            maxHeight: CARD_HEIGHT,
            flex: '0 0 auto',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            overflow: 'hidden',
            wordBreak: 'break-word',
            padding: '0',
          }}
        >
          {/* Left: Text Content */}
          <div
            style={{
              flex: 1,
              padding: '2.7rem 2.2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              height: '100%',
              minWidth: 0,
            }}
          >
            <h1
              style={{
                fontFamily: 'Inter, Poppins, Arial, sans-serif',
                fontWeight: 700,
                fontSize: '2.5rem',
                margin: 0,
                marginBottom: '1.2rem',
                color: '#18181b',
                lineHeight: 1.15,
                maxWidth: '100%',
                overflowWrap: 'break-word',
              }}
            >
              {slides[current].header}
            </h1>
            <p
              style={{
                color: '#5a5a5a',
                fontSize: '1.18rem',
                marginBottom: '1.7rem',
                fontWeight: 500,
                maxWidth: '100%',
                overflowWrap: 'break-word',
              }}
            >
              {slides[current].subtext}
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                marginBottom: '2.2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.9rem',
                width: '100%',
              }}
            >
              {slides[current].features.map((f, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.7rem',
                    fontSize: '1.13rem',
                    fontWeight: 500,
                    width: '100%',
                    overflowWrap: 'break-word',
                  }}
                >
                  {f.icon} <span>{f.text}</span>
                </li>
              ))}
            </ul>
            <a
              href={slides[current].cta.link}
              style={{
                display: 'inline-block',
                background: '#6C63FF',
                color: '#fff',
                padding: '0.95rem 2.1rem',
                borderRadius: 10,
                fontWeight: 600,
                fontSize: '1.13rem',
                boxShadow: '0 2px 8px rgba(108,99,255,0.10)',
                textDecoration: 'none',
                letterSpacing: 0.5,
                marginTop: 8,
                transition: 'opacity 0.2s, transform 0.2s',
                border: 'none',
                minWidth: 0,
                minHeight: 0,
                whiteSpace: 'nowrap',
                maxWidth: '100%',
              }}
            >
              {slides[current].cta.text}
            </a>
            {/* Dots/Lines directly below the button */}
            <div style={{
              display: 'flex',
              gap: 10,
              marginTop: 16,
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '100%',
            }}>
              {slides.map((_, idx) => (
                <span
                  key={idx}
                  onClick={() => goTo(idx)}
                  style={{
                    width: 36,
                    height: 6,
                    borderRadius: 4,
                    background: idx === current ? '#6C63FF' : '#fff',
                    border: '2px solid #18181b',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                    display: 'inline-block',
                  }}
                />
              ))}
            </div>
          </div>
          {/* Right: Image Placeholder or Actual Image */}
          <div
            style={{
              flex: '0 0 auto',
              width: IMAGE_SIZE,
              height: IMAGE_SIZE,
              marginRight: '2.7rem',
              marginLeft: '1.2rem',
              borderRadius: 22,
              background: 'rgba(108,99,255,0.07)',
              boxShadow: '0 2px 16px rgba(108,99,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 22,
              color: '#bbb',
              overflow: 'hidden',
            }}
          >
            {slides[current].image ? (
              <img
                src={slides[current].image}
                alt="Deliveria visual"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 22 }}
              />
            ) : (
              'Add Image Here'
            )}
          </div>
        </div>
      </div>
      {/* Navigation Arrows */}
      <button onClick={prev} aria-label="Previous" style={navBtnStyle('left')}><FaChevronLeft size={22} color="white" /></button>
      <button onClick={next} aria-label="Next" style={navBtnStyle('right')}><FaChevronRight size={22} color="white" /></button>
    </div>
  );
};

function navBtnStyle(side) {
  return {
    position: 'absolute',
    top: '50%',
    [side]: 24,
    transform: 'translateY(-50%)',
    background: 'black',
    border: 'none',
    borderRadius: '50%',
    boxShadow: '0 2px 8px rgba(0,0,0,0.20)',
    width: 44,
    height: 44,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 3,
    transition: 'box-shadow 0.2s',
  };
}

export default HeroSlider; 