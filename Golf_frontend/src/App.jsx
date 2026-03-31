import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import UsersAdmin from "./pages/UsersAdmin";
import DrawsAdmin from "./pages/DrawsAdmin";
import WinnersAdmin from "./pages/WinnersAdmin";
import CharitiesAdmin from "./pages/CharitiesAdmin";
import ReportsAdmin from "./pages/ReportsAdmin";
import Scores from "./pages/Scores";
import Charities from "./pages/Charities";
import NotFound from "./pages/NotFound";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user } = useAuth();

  // ⏳ Still loading from localStorage
  if (user === undefined) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  // ❌ Not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }
  if (adminOnly && user.role !== "admin") return <Navigate to="/dashboard" />;
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="scores"
            element={
              <ProtectedRoute>
                <Scores />
              </ProtectedRoute>
            }
          />
          <Route
            path="charities"
            element={
              <ProtectedRoute>
                <Charities />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin"
            element={
              <ProtectedRoute adminOnly>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin/users"
            element={
              <ProtectedRoute adminOnly>
                <UsersAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin/draws"
            element={
              <ProtectedRoute adminOnly>
                <DrawsAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin/charities"
            element={
              <ProtectedRoute adminOnly>
                <CharitiesAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin/winners"
            element={
              <ProtectedRoute adminOnly>
                <WinnersAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin/reports"
            element={
              <ProtectedRoute adminOnly>
                <ReportsAdmin />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
