const Footer = () => (
  <footer style={{ marginTop: '2rem', borderTop: '1px solid var(--border-color)', padding: '1rem 0', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
    © {new Date().getFullYear()} Delivera. All rights reserved.
  </footer>
);

export default Footer;
