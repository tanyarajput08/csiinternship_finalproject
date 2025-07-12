import { FaBoxOpen, FaTruckMoving, FaCheckCircle, FaClock } from 'react-icons/fa';

const ShipmentCard = ({ shipment }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered':
        return <FaCheckCircle color="lightgreen" />;
      case 'In Transit':
        return <FaTruckMoving color="orange" />;
      case 'Pending Pickup':
        return <FaClock color="gray" />;
      default:
        return <FaBoxOpen />;
    }
  };

  return (
    <div style={{
      backgroundColor: 'var(--surface)',
      borderRadius: '8px',
      padding: '1.5rem',
      width: '300px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    }}>
      <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>{shipment.id}</h3>
      <p><strong>From:</strong> {shipment.sender}</p>
      <p><strong>To:</strong> {shipment.receiver}</p>
      <p><strong>Route:</strong> {shipment.address}</p>
      <p><strong>Date:</strong> {shipment.date}</p>
      <p><strong>Status:</strong> {getStatusIcon(shipment.status)} {shipment.status}</p>
    </div>
  );
};

export default ShipmentCard;
