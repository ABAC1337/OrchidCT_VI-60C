import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import PublicLayout from './components/layout/PublicLayout'
import DashboardLayout from './components/layout/DashboardLayout'
import AdminLayout from './components/layout/AdminLayout'
import Landing from './pages/public/Landing'
import RoomAvailability from './pages/public/RoomAvailability'
import Login from './pages/public/Login'
import Register from './pages/public/Register'
import ForgotPassword from './pages/public/ForgotPassword'
import TenantOverview from './pages/tenant/Overview'
import TenantActiveRent from './pages/tenant/ActiveRent'
import TenantProfile from './pages/tenant/Profile'
import TenantMutations from './pages/tenant/Mutations'
import TenantRenewal from './pages/tenant/Renewal'
import AdminDashboard from './pages/admin/Dashboard'
import AdminUsers from './pages/admin/Users'
import AdminMutations from './pages/admin/Mutations'
import AdminMonitoring from './pages/admin/Monitoring'

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/rooms" element={<RoomAvailability />} />
      </Route>

      {/* Auth Routes (no layout) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Tenant Dashboard Routes */}
      <Route path="/dashboard" element={<ProtectedRoute allowedRole="tenant"><DashboardLayout /></ProtectedRoute>}>
        <Route index element={<TenantOverview />} />
        <Route path="active-rent" element={<TenantActiveRent />} />
        <Route path="profile" element={<TenantProfile />} />
        <Route path="mutations" element={<TenantMutations />} />
        <Route path="renew/:roomId" element={<TenantRenewal />} />
      </Route>

      {/* Admin Dashboard Routes */}
      <Route path="/admin" element={<ProtectedRoute allowedRole="admin"><AdminLayout /></ProtectedRoute>}>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="mutations" element={<AdminMutations />} />
        <Route path="monitoring" element={<AdminMonitoring />} />
      </Route>
    </Routes>
  )
}

export default App
