import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useShipments } from '../context/ShipmentsContext';

const Dashboard = () => {
  // Dummy stats
  const stats = {
    total: 24,
    active: 5,
    delivered: 17,
  };

  // Get shipments from context
  const { shipments } = useShipments();
  const recentShipments = shipments.slice(0, 10);

  // Function to generate a new unique shipment ID
  const generateShipmentId = () => {
    const random = Math.floor(1000 + Math.random() * 9000);
    return `#DEL${random}`;
  };

  // Handler to add a new shipment
  const handleCreateShipment = (shipment) => {
    const newShipment = {
      id: generateShipmentId(),
      status: 'Pending Pickup',
      date: new Date().toISOString().slice(0, 10),
      ...shipment,
    };
    // Assuming you want to add the new shipment to the existing shipments
    // You might want to update the shipments context instead of local state
  };

  return (
    <div>
      <h2 className="michroma-heading" style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>
        Welcome to Your Dashboard 👋
      </h2>

      {/* Stats Section */}
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem' }}>
        <div className="stat-card">
          <h3 style={{ margin: 0, color: '#444', fontWeight: 600 }}>Total Shipments</h3>
          <p style={statText}>{stats.total}</p>
        </div>
        <div className="stat-card">
          <h3 style={{ margin: 0, color: '#444', fontWeight: 600 }}>Active Shipments</h3>
          <p style={statText}>{stats.active}</p>
        </div>
        <div className="stat-card">
          <h3 style={{ margin: 0, color: '#444', fontWeight: 600 }}>Delivered</h3>
          <p style={statText}>{stats.delivered}</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{ ...cardStyle, padding: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Recent Shipments</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {recentShipments.map((ship, index) => (
            <li key={index} style={listItemStyle}>
              <span className="michroma-heading" style={{ fontWeight: 'bold', color: 'var(--primary)' }}>{ship.id}</span>
              <span style={{ color: 'var(--text-secondary)' }}>{ship.status}</span>
              <span style={{ color: 'var(--text-secondary)' }}>{ship.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Links */}
      {/* Removed Create Shipment and Track Shipment buttons as per user request */}
    </div>
  );
};

const cardStyle = {
  backgroundColor: 'var(--surface)',
  borderRadius: '8px',
  padding: '1rem 1.5rem',
  flex: 1,
  minWidth: '200px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
};

const statText = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginTop: '0.5rem',
};

const listItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0.5rem 0',
  borderBottom: '1px solid var(--border-color)',
};

export default Dashboard;
