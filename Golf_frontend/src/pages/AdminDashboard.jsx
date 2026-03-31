import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group border border-gray-100">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 group-hover:text-blue-600">
            User Management
          </h2>
          <p className="text-gray-600 mb-6">
            View and edit users, manage subscriptions
          </p>
          <Link
            to="/admin/users"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all shadow-md"
          >
            Manage Users →
          </Link>
        </div>
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 group-hover:text-green-600">
            Draw Management
          </h2>
          <p className="text-gray-600 mb-6">
            Configure draws, run simulations, publish results
          </p>
          <Link
            to="/admin/draws"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-all shadow-md"
          >
            Manage Draws →
          </Link>
        </div>
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 group-hover:text-purple-600">
            Charity Management
          </h2>
          <p className="text-gray-600 mb-6">
            Add/edit charities, manage content
          </p>
          <Link
            to="/admin/charities"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-xl hover:bg-purple-700 transition-all shadow-md"
          >
            Manage Charities →
          </Link>
        </div>
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 group-hover:text-orange-600">
            Winners & Payouts
          </h2>
          <p className="text-gray-600 mb-6">Verify winners, mark payouts</p>
          <Link
            to="/admin/winners"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-xl hover:bg-orange-700 transition-all shadow-md"
          >
            View Winners →
          </Link>
        </div>
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 group-hover:text-indigo-600">
            Reports
          </h2>
          <p className="text-gray-600 mb-6">
            Total users, prize pool, charity contributions
          </p>
          <Link
            to="/admin/reports"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-all shadow-md"
          >
            View Reports →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
