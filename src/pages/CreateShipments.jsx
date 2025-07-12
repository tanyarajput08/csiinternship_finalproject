import ShipmentForm from '../components/shipment/ShipmentForm';
import { useShipments } from '../context/ShipmentsContext';
import { useState } from 'react';

const CreateShipment = () => {
  const { addShipment } = useShipments();
  const [showSuccess, setShowSuccess] = useState(false);

  // Generate a unique shipment ID
  const generateShipmentId = () => {
    const random = Math.floor(1000 + Math.random() * 9000);
    return `#DEL${random}`;
  };

  // Handler to add a new shipment using source/destination from form
  const handleCreateShipment = (form) => {
    const shipment = {
      id: generateShipmentId(),
      status: 'Pending Pickup',
      date: new Date().toISOString().slice(0, 10),
      ...form,
      // source and destination are already included from form
    };
    addShipment(shipment);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2500);
  };

  return (
    <div>
      {showSuccess && (
        <div style={{
          background: '#e6ffe6',
          color: '#1a7f37',
          border: '1.5px solid #1a7f37',
          borderRadius: 8,
          padding: '0.75rem 1.5rem',
          marginBottom: '1rem',
          fontWeight: 600,
          fontSize: '1.05rem',
          boxShadow: '0 2px 8px rgba(26,127,55,0.08)'
        }}>
          ✅ Shipment added!
        </div>
      )}
      <ShipmentForm onCreateShipment={handleCreateShipment} />
    </div>
  );
};

export default CreateShipment;
