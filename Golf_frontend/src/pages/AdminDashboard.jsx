import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">User Management</h2>
          <p>View and edit users, manage subscriptions</p>
          <Link
            to="/admin/users"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            Manage Users
          </Link>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Draw Management</h2>
          <p>Configure draws, run simulations, publish results</p>
          <Link
            to="/admin/draws"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            Manage Draws
          </Link>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Charity Management</h2>
          <p>Add/edit charities, manage content</p>
          <Link
            to="/admin/charities"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            Manage Charities
          </Link>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Winners & Payouts</h2>
          <p>Verify winners, mark payouts</p>
          <Link
            to="/admin/winners"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            View Winners
          </Link>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Reports</h2>
          <p>Total users, prize pool, charity contributions</p>
          <Link
            to="/admin/reports"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            View Reports
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
