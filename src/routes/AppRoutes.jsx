import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import CreateShipment from '../pages/CreateShipments';
import TrackShipments from '../pages/TrackShipments';
import MyShipments from '../pages/MyShipments';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';
import MainLayout from '../layouts/MainLayout';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />

    {/* Protected Routes */}
    <Route
      path="/dashboard"
      element={
        <PrivateRoute>
          <MainLayout>
            <Dashboard />
          </MainLayout>
        </PrivateRoute>
      }
    />
    <Route
      path="/create"
      element={
        <PrivateRoute>
          <MainLayout>
            <CreateShipment />
          </MainLayout>
        </PrivateRoute>
      }
    />
    <Route
      path="/track"
      element={
        <PrivateRoute>
          <MainLayout>
            <TrackShipments />
          </MainLayout>
        </PrivateRoute>
      }
    />
    <Route
      path="/my-shipments"
      element={
        <PrivateRoute>
          <MainLayout>
            <MyShipments />
          </MainLayout>
        </PrivateRoute>
      }
    />
    <Route
      path="/profile"
      element={
        <PrivateRoute>
          <MainLayout>
            <Profile />
          </MainLayout>
        </PrivateRoute>
      }
    />

    {/* 404 Fallback */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
