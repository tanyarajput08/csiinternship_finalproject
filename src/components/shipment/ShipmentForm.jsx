import { useState } from 'react';
import { FaUser, FaPhone, FaBox, FaCalendar, FaWeightHanging, FaRegStickyNote, FaMapMarkerAlt } from 'react-icons/fa';

const cities = [
  { name: 'Delhi', coords: [28.6139, 77.2090] },
  { name: 'Gurgaon', coords: [28.4089, 77.3178] },
  { name: 'Noida', coords: [28.5355, 77.3910] },
  { name: 'Faridabad', coords: [28.4089, 77.3178] },
  { name: 'Mumbai', coords: [19.0760, 72.8777] },
  { name: 'Bangalore', coords: [12.9716, 77.5946] },
  { name: 'Pune', coords: [18.5204, 73.8567] },
  { name: 'Hyderabad', coords: [17.3850, 78.4867] },
  { name: 'Kolkata', coords: [22.5726, 88.3639] },
  { name: 'Chennai', coords: [13.0827, 80.2707] },
];

const ShipmentForm = ({ onCreateShipment }) => {
  const [form, setForm] = useState({
    sourceCity: cities[0].name,
    destinationCity: cities[1].name,
    senderName: '',
    senderPhone: '',
    receiverName: '',
    receiverPhone: '',
    packageSize: '',
    packageType: '',
    packageWeight: '',
    address: '',
    pickupDate: '',
    paymentType: 'Prepaid',
    shippingSpeed: 'Standard',
    deliveryInstructions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Find city objects for source and destination
    const source = cities.find(c => c.name === form.sourceCity);
    const destination = cities.find(c => c.name === form.destinationCity);
    if (typeof onCreateShipment === 'function') {
      onCreateShipment({
        ...form,
        source,
        destination,
      });
      setForm({
        sourceCity: cities[0].name,
        destinationCity: cities[1].name,
        senderName: '', senderPhone: '', receiverName: '', receiverPhone: '', packageSize: '', packageType: '', packageWeight: '', address: '', pickupDate: '', paymentType: 'Prepaid', shippingSpeed: 'Standard', deliveryInstructions: ''
      });
    }
  };

  const fieldStyle = {
    border: '1.2px solid #222',
    borderRadius: '5px',
    padding: '0.5rem 2rem 0.5rem 2rem',
    fontSize: '0.97rem',
    outline: 'none',
    background: '#fff',
    color: '#222',
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative',
    minHeight: 32,
  };

  const iconStyle = {
    position: 'absolute',
    left: '0.7rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#888',
    fontSize: '1rem',
    pointerEvents: 'none',
  };

  const fieldWrapper = { position: 'relative', width: '100%' };

  // Two-column grid for all rows except full-width fields
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.7rem 1.2rem',
    marginBottom: '0.5rem',
    width: '100%'
  };
  const fullWidth = { gridColumn: '1 / span 2' };

  return (
    <form onSubmit={handleSubmit} style={{
      backgroundColor: 'var(--surface)',
      padding: '1.2rem 2vw',
      borderRadius: '12px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      width: '100%',
      maxWidth: 'none',
      margin: '1.5rem 0',
      fontSize: '0.97rem',
      minWidth: 0
    }}>
      <h2 style={{ marginBottom: '1rem', color: '#18181b', fontSize: '1.25rem' }}>Create a New Shipment</h2>
      <div style={gridStyle}>
        {/* Row 0: Source City | Destination City */}
        <div style={fieldWrapper}>
          <FaMapMarkerAlt style={iconStyle} />
          <select name="sourceCity" value={form.sourceCity} onChange={handleChange} required style={fieldStyle}>
            {cities.map(city => (
              <option key={city.name} value={city.name}>{city.name}</option>
            ))}
          </select>
        </div>
        <div style={fieldWrapper}>
          <FaMapMarkerAlt style={iconStyle} />
          <select name="destinationCity" value={form.destinationCity} onChange={handleChange} required style={fieldStyle}>
            {cities.map(city => (
              <option key={city.name} value={city.name}>{city.name}</option>
            ))}
          </select>
        </div>
        {/* Row 1: Sender Name | Sender Phone */}
        <div style={fieldWrapper}>
          <FaUser style={iconStyle} />
          <input type="text" name="senderName" value={form.senderName} onChange={handleChange} placeholder="Sender's Name" required style={fieldStyle} />
        </div>
        <div style={fieldWrapper}>
          <FaPhone style={iconStyle} />
          <input type="tel" name="senderPhone" value={form.senderPhone} onChange={handleChange} placeholder="Sender's Phone" required style={fieldStyle} />
        </div>
        {/* Row 2: Receiver Name | Receiver Phone */}
        <div style={fieldWrapper}>
          <FaUser style={iconStyle} />
          <input type="text" name="receiverName" value={form.receiverName} onChange={handleChange} placeholder="Receiver's Name" required style={fieldStyle} />
        </div>
        <div style={fieldWrapper}>
          <FaPhone style={iconStyle} />
          <input type="tel" name="receiverPhone" value={form.receiverPhone} onChange={handleChange} placeholder="Receiver's Phone" required style={fieldStyle} />
        </div>
        {/* Row 3: Pickup Date | Package Type */}
        <div style={fieldWrapper}>
          <FaCalendar style={iconStyle} />
          <input type="date" name="pickupDate" value={form.pickupDate} onChange={handleChange} required style={fieldStyle} />
        </div>
        <div style={fieldWrapper}>
          <FaBox style={iconStyle} />
          <select name="packageType" value={form.packageType} onChange={handleChange} required style={fieldStyle}>
            <option value="">Select Package Type</option>
            <option value="Box">Box</option>
            <option value="Envelope">Envelope</option>
            <option value="Fragile">Fragile</option>
            <option value="Liquid">Liquid</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {/* Row 4: Package Size | Package Weight */}
        <div style={fieldWrapper}>
          <FaBox style={iconStyle} />
          <select name="packageSize" value={form.packageSize} onChange={handleChange} required style={fieldStyle}>
            <option value="">Select Package Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div style={fieldWrapper}>
          <FaWeightHanging style={iconStyle} />
          <select name="packageWeight" value={form.packageWeight} onChange={handleChange} required style={fieldStyle}>
            <option value="">Select Package Weight</option>
            <option value="500g">500g</option>
            <option value="1kg">1kg</option>
            <option value="2kg">2kg</option>
            <option value="5kg">5kg</option>
            <option value="10kg">10kg</option>
          </select>
        </div>
        {/* Row 5: Payment (full width) */}
        <div style={{ ...fullWidth, display: 'flex', alignItems: 'center', gap: '0.5rem', minHeight: 32 }}>
          <span style={{ fontWeight: 500, color: '#222', minWidth: 70 }}>Payment:</span>
          <label style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <input type="radio" name="paymentType" value="Prepaid" checked={form.paymentType === 'Prepaid'} onChange={handleChange} /> Prepaid
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <input type="radio" name="paymentType" value="COD" checked={form.paymentType === 'COD'} onChange={handleChange} /> COD
          </label>
        </div>
        {/* Row 6: Speed (full width) */}
        <div style={{ ...fullWidth, display: 'flex', alignItems: 'center', gap: '0.5rem', minHeight: 32 }}>
          <span style={{ fontWeight: 500, color: '#222', minWidth: 70 }}>Speed:</span>
          <label style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <input type="radio" name="shippingSpeed" value="Standard" checked={form.shippingSpeed === 'Standard'} onChange={handleChange} /> Standard
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <input type="radio" name="shippingSpeed" value="Express" checked={form.shippingSpeed === 'Express'} onChange={handleChange} /> Express
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <input type="radio" name="shippingSpeed" value="Same Day" checked={form.shippingSpeed === 'Same Day'} onChange={handleChange} /> Same Day
          </label>
        </div>
        {/* Row 7: Address (full width) */}
        <div style={{ ...fieldWrapper, ...fullWidth }}>
          <FaRegStickyNote style={iconStyle} />
          <textarea name="address" value={form.address} onChange={handleChange} placeholder="Delivery Address" rows="2" required style={{ ...fieldStyle, minHeight: 38 }} />
        </div>
        {/* Row 8: Delivery Instructions (full width) */}
        <div style={{ ...fieldWrapper, ...fullWidth }}>
          <FaRegStickyNote style={iconStyle} />
          <textarea name="deliveryInstructions" value={form.deliveryInstructions} onChange={handleChange} placeholder="Delivery Instructions (optional)" rows="1" style={{ ...fieldStyle, minHeight: 32 }} />
        </div>
      </div>
      <button 
        type="submit"
        style={{ 
          background: '#18181b', 
          color: '#fff', 
          border: 'none',
          borderRadius: '8px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.2s',
          padding: '0.3rem 0.9rem',
          fontSize: '0.93rem',
          width: 'auto',
          alignSelf: 'flex-end',
          marginTop: '0.5rem'
        }}
      >Create Shipment</button>
    </form>
  );
};

export default ShipmentForm;
