import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Layout = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-green-700">
            GolfCharity
          </Link>
          <div className="space-x-4">
            {user ? (
              <>
                <Link to="/dashboard" className="hover:text-green-600">Dashboard</Link>
                <Link to="/scores" className="hover:text-green-600">Scores</Link>
                <Link to="/charities" className="hover:text-green-600">Charities</Link>
                {user.role === 'admin' && (
                  <Link to="/admin" className="hover:text-green-600">Admin</Link>
                )}
                <button onClick={logout} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-green-600">Login</Link>
                <Link to="/register" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Subscribe</Link>
              </>
            )}
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Golf Charity Platform — Giving back through golf</p>
      </footer>
    </div>
  );
};

export default Layout;