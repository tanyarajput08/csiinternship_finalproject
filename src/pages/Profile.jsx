import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  // Placeholder data for demo
  const plan = {
    type: 'Lite Plan',
    status: 'Active',
    duration: 'NA',
    renewal: 'NA',
    renewalNote: 'NA days overdue',
  };
  const support = {
    email: 'support@shiprocket.com',
    region: 'India',
  };

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '1.5rem 0.5rem', fontSize: '1.13rem' }}>
      <h2 className="michroma-heading" style={{ color: 'var(--primary)', marginBottom: '1.2rem', fontSize: '1.6rem', fontWeight: 700 }}>Profile</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', alignItems: 'start' }}>
        {/* Left: Account Details */}
        <div className="stat-card" style={{ padding: '1.1rem 1.3rem', width: '100%', minWidth: 0, fontSize: '1.08rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <div className="michroma-heading" style={{ fontWeight: 600, fontSize: 18 }}>Account Details</div>
            <button style={{ background: 'none', color: 'var(--primary)', border: 'none', fontWeight: 500, cursor: 'pointer', fontSize: 15, display: 'flex', alignItems: 'center', gap: 6, padding: 0 }}>Edit Details</button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem 1.7rem', fontSize: '1.05rem' }}>
            <div>
              <div style={{ color: '#888', fontSize: 13 }}>Full Name</div>
              <div style={{ fontWeight: 500 }}>{user.name || '-'}</div>
            </div>
            <div>
              <div style={{ color: '#888', fontSize: 13 }}>Contact No.</div>
              <div style={{ fontWeight: 500 }}>+91-XXXXXXXXXX</div>
            </div>
            <div>
              <div style={{ color: '#888', fontSize: 13 }}>Email</div>
              <div style={{ fontWeight: 500 }}>{user.email} <span style={{ color: 'var(--primary)', fontSize: 13, fontWeight: 400, marginLeft: 6, cursor: 'pointer' }}>Verify</span></div>
            </div>
            <div>
              <div style={{ color: '#888', fontSize: 13 }}>Company Name</div>
              <div style={{ fontWeight: 500 }}>{user.name || '-'}</div>
            </div>
            <div>
              <div style={{ color: '#888', fontSize: 13 }}>Company Id</div>
              <div style={{ fontWeight: 500 }}>6956011</div>
            </div>
          </div>
        </div>

        {/* Right: Plan and Support Details stacked */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', minWidth: 0 }}>
          <div className="stat-card" style={{ padding: '1.1rem 1.3rem', width: '100%', fontSize: '1.08rem' }}>
            <div className="michroma-heading" style={{ fontWeight: 600, fontSize: 18, marginBottom: 10 }}>Plan Details</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem 1.7rem', fontSize: '1.05rem' }}>
              <div>
                <div style={{ color: '#888', fontSize: 13 }}>Plan Type</div>
                <div style={{ fontWeight: 500 }}>{plan.type} <span style={{ color: 'var(--primary)', fontSize: 13, fontWeight: 400, marginLeft: 8, cursor: 'pointer' }}>Change Plan</span></div>
              </div>
              <div>
                <div style={{ color: '#888', fontSize: 13 }}>Subscription Status</div>
                <div style={{ fontWeight: 500, color: '#1a7f37', background: '#e6ffe6', borderRadius: 6, padding: '2px 10px', display: 'inline-block', fontSize: 14 }}>{plan.status}</div>
              </div>
              <div>
                <div style={{ color: '#888', fontSize: 13 }}>Subscription Duration</div>
                <div style={{ fontWeight: 500 }}>{plan.duration}</div>
              </div>
              <div>
                <div style={{ color: '#888', fontSize: 13 }}>Renewal Date</div>
                <div style={{ fontWeight: 500 }}>{plan.renewal} <span style={{ color: '#ff9900', background: '#fff6e6', borderRadius: 6, padding: '2px 8px', fontSize: 13, marginLeft: 8 }}>{plan.renewalNote}</span></div>
              </div>
            </div>
          </div>
          <div className="stat-card" style={{ padding: '1.1rem 1.3rem', width: '100%', fontSize: '1.08rem' }}>
            <div className="michroma-heading" style={{ fontWeight: 600, fontSize: 18, marginBottom: 10 }}>Support Details</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem 1.7rem', fontSize: '1.05rem' }}>
              <div>
                <div style={{ color: '#888', fontSize: 13 }}>Support Email</div>
                <div style={{ fontWeight: 500 }}>{support.email}</div>
              </div>
              <div>
                <div style={{ color: '#888', fontSize: 13 }}>Region</div>
                <div style={{ fontWeight: 500 }}>{support.region}</div>
              </div>
            </div>
          </div>
          {/* Logout Button right-aligned */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
            <button onClick={handleLogout} style={{ backgroundColor: 'red', color: '#fff', border: 'none', borderRadius: 8, padding: '0.4rem 1rem', fontWeight: 600, fontSize: 12, cursor: 'pointer' }}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
