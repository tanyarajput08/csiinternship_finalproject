import { useShipments } from '../context/ShipmentsContext';
import { FaTruckMoving } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const statusColors = {
  Delivered: { bg: '#c6f6d5', text: '#1a7f37' }, // soft green
  'In Transit': { bg: '#ffe6a7', text: '#b26a00' }, // soft orange
  'Pending Pickup': { bg: '#ffd6d6', text: '#b91c1c' }, // soft red
};

const badgeStyle = (status) => ({
  background: statusColors[status]?.bg || '#eee',
  color: statusColors[status]?.text || '#222',
  fontSize: '0.98rem',
  padding: '0.18rem 1.1rem',
  borderRadius: '999px',
  fontWeight: 600,
  display: 'inline-block',
  minWidth: 90,
  textAlign: 'center',
  border: '1px solid #e0e0e0',
});

const MyShipments = () => {
  const { shipments } = useShipments();
  const navigate = useNavigate();
  return (
    <div style={{ padding: '2rem 0.5rem', maxWidth: 900, margin: '0 auto' }}>
      <h2 className="michroma-heading" style={{ marginBottom: '1.5rem', color: '#7c3aed', fontWeight: 700, fontSize: '2rem', letterSpacing: 1 }}>My Shipments</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {shipments.map((ship) => (
          <div
            key={ship.id}
            className="my-shipments-card"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.2rem', color: '#18181b', cursor: 'pointer', transition: 'box-shadow 0.2s, transform 0.2s',
            }}
            onClick={() => navigate(`/track-shipments`, { state: { trackingId: ship.id } })}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem' }}>
              <FaTruckMoving style={{ fontSize: 30, color: '#7c3aed' }} />
              <div>
                <span
                  style={{
                    color: '#7c3aed',
                    fontWeight: 700,
                    fontSize: '1.13rem',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                >
                  {ship.id}
                </span>
                <div style={{ fontSize: '1.05rem', color: '#222', fontWeight: 500 }}>{ship.source?.name} → {ship.destination?.name}</div>
              </div>
            </div>
            <div style={{ fontSize: '1.05rem', color: '#222', minWidth: 90 }}>{ship.date}</div>
            <div style={badgeStyle(ship.status)}>{ship.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyShipments;
