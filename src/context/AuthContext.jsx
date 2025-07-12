import { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// Custom provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // holds current user info
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate session from localStorage
    const storedUser = JSON.parse(localStorage.getItem('delivera-user'));
    if (storedUser) setUser(storedUser);
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('delivera-user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('delivera-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Export context and hook
export const useAuth = () => useContext(AuthContext);
