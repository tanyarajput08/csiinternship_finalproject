const ShipmentTimeline = ({ statusSteps }) => {
  const allSteps = ['Pending Pickup', 'In Transit', 'Out for Delivery', 'Delivered'];

  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      {allSteps.map((step, index) => {
        const isDone = statusSteps.includes(step);

        return (
          <div key={index} style={{
            backgroundColor: isDone ? 'var(--primary)' : 'var(--border-color)',
            color: '#fff',
            padding: '0.5rem 1rem',
            borderRadius: '30px',
            fontWeight: '500',
            fontSize: '0.9rem'
          }}>
            {step}
          </div>
        );
      })}
    </div>
  );
};

export default ShipmentTimeline;
