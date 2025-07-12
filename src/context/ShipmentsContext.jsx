import { createContext, useContext, useState } from 'react';

const ShipmentsContext = createContext();

export const useShipments = () => useContext(ShipmentsContext);

export const ShipmentsProvider = ({ children }) => {
  const [shipments, setShipments] = useState([
    // Example initial data
    {
      id: '#DEL1234',
      status: 'In Transit',
      date: '2025-07-10',
      source: { name: 'Delhi', coords: [28.6139, 77.2090] },
      destination: { name: 'Gurgaon', coords: [28.4089, 77.3178] },
    },
    {
      id: '#DEL1229',
      status: 'Delivered',
      date: '2025-07-09',
      source: { name: 'Delhi', coords: [28.6139, 77.2090] },
      destination: { name: 'Noida', coords: [28.5355, 77.3910] },
    },
    {
      id: '#DEL1223',
      status: 'Pending Pickup',
      date: '2025-07-08',
      source: { name: 'Delhi', coords: [28.6139, 77.2090] },
      destination: { name: 'Faridabad', coords: [28.4089, 77.3178] },
    },
  ]);

  const addShipment = (shipment) => {
    setShipments((prev) => [shipment, ...prev]);
  };

  const getShipmentById = (id) => shipments.find((s) => s.id === id);

  return (
    <ShipmentsContext.Provider value={{ shipments, addShipment, getShipmentById }}>
      {children}
    </ShipmentsContext.Provider>
  );
}; 