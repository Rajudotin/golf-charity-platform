import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Layout = () => {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-green-700">
            GolfCharity
          </Link>
          <div className="flex items-center space-x-4 md:space-x-0">
            <div className="hidden lg:flex space-x-4">
              {user ? (
                <>
                  <Link to="/dashboard" className="hover:text-green-600">
                    Dashboard
                  </Link>
                  <Link to="/scores" className="hover:text-green-600">
                    Scores
                  </Link>
                  <Link to="/charities" className="hover:text-green-600">
                    Charities
                  </Link>
                  {user.role === "admin" && (
                    <Link to="/admin" className="hover:text-green-600">
                      Admin
                    </Link>
                  )}
                  <button
                    onClick={logout}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="hover:text-green-600">
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Subscribe
                  </Link>
                </>
              )}
            </div>
            <button
              className="lg:hidden p-1 -mr-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-md absolute top-16 left-0 right-0 z-20">
            <div className="px-4 py-6 space-y-4">
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="block py-2 px-3 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/scores"
                    className="block py-2 px-3 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Scores
                  </Link>
                  <Link
                    to="/charities"
                    className="block py-2 px-3 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Charities
                  </Link>
                  {user.role === "admin" && (
                    <Link
                      to="/admin"
                      className="block py-2 px-3 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Admin
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left py-2 px-3 text-lg font-medium text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block py-2 px-3 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full bg-green-600 text-white py-2 px-3 text-lg font-medium text-center rounded-lg hover:bg-green-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Subscribe
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>
          &copy; {new Date().getFullYear()} Golf Charity Platform — Giving back
          through golf
        </p>
      </footer>
    </div>
  );
};

export default Layout;
