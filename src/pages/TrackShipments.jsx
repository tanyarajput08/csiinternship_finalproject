import { useState } from 'react';
// import ShipmentTimeline from '../components/shipment/ShipmentTimeline';
import MapComponent from '../components/shipment/MapComponent';
import { useShipments } from '../context/ShipmentsContext';

const TrackShipments = () => {
  const [trackingId, setTrackingId] = useState('');
  const [foundShipment, setFoundShipment] = useState(null);
  const { shipments } = useShipments();

  const handleTrack = () => {
    const shipment = shipments.find(s => s.id === trackingId);
    setFoundShipment(shipment || null);
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
        <div style={{ flex: '0 0 300px' }}>
          <h2 className="michroma-heading" style={{ color: 'var(--primary)', marginBottom: '1.2rem', fontSize: '1.3rem', letterSpacing: '1px', fontWeight: 600 }}>Track Your Shipment</h2>
          <div style={{ backgroundColor: 'var(--surface)', padding: '0.8rem', borderRadius: '8px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <input
                type="text"
                placeholder="Enter Tracking ID (e.g. #DEL1234)"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                style={{ width: '35%', fontSize: '0.85rem', padding: '0.2rem 0.4rem', height: '28px' }}
              />
              <button 
                onClick={handleTrack}
                style={{ 
                  background: '#6C63FF', 
                  color: '#fff', 
                  border: 'none',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  width: 'fit-content'
                }}
              >Track</button>
            </div>
          </div>

          {foundShipment && (
            <div style={{ marginTop: '1.2rem' }}>
              <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '0.7rem', minHeight: 180 }}>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 6 }}>Shipment Details</div>
                <div><b>ID:</b> <span className="michroma-heading">{foundShipment.id}</span></div>
                <div><b>Status:</b> {foundShipment.status}</div>
                <div><b>Date:</b> {foundShipment.date}</div>
                <div><b>From:</b> {foundShipment.source?.name}</div>
                <div><b>To:</b> {foundShipment.destination?.name}</div>
                <div><b>Sender:</b> {foundShipment.senderName} ({foundShipment.senderPhone})</div>
                <div><b>Receiver:</b> {foundShipment.receiverName} ({foundShipment.receiverPhone})</div>
                <div><b>Address:</b> {foundShipment.address}</div>
              </div>
            </div>
          )}

          {foundShipment === null && trackingId && (
            <p style={{ color: 'var(--error)', marginTop: '1rem' }}>
              ❌ No shipment found for this ID.
            </p>
          )}
        </div>

        <div style={{ flex: '1', height: '70vh', minWidth: 400 }}>
          {foundShipment ? (
            <MapComponent shipment={foundShipment} width="100%" height="100%" />
          ) : (
            <div style={{ 
              width: '100%', 
              height: '100%', 
              backgroundColor: '#f5f5f5', 
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#666',
              fontSize: '1.1rem'
            }}>
              Enter a tracking ID to view the shipment on map
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackShipments;
