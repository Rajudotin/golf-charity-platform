const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">User Management</h2>
          <p>View and edit users, manage subscriptions</p>
          <button className="mt-4 text-blue-600">Manage Users</button>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Draw Management</h2>
          <p>Configure draws, run simulations, publish results</p>
          <button className="mt-4 text-blue-600">Manage Draws</button>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Charity Management</h2>
          <p>Add/edit charities, manage content</p>
          <button className="mt-4 text-blue-600">Manage Charities</button>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Winners & Payouts</h2>
          <p>Verify winners, mark payouts</p>
          <button className="mt-4 text-blue-600">View Winners</button>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Reports</h2>
          <p>Total users, prize pool, charity contributions</p>
          <button className="mt-4 text-blue-600">View Reports</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;