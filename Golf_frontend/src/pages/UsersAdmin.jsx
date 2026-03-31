import { Link } from "react-router-dom";

const dummyUsers = [
  {
    id: 1,
    name: "Raju Patel",
    email: "raju@gmail.com",
    role: "admin",
    subscription: "Premium - $29/mo",
    status: "Active",
    joined: "2024-01-15",
  },
  {
    id: 2,
    name: "John Smith",
    email: "john@example.com",
    role: "user",
    subscription: "Free",
    status: "Active",
    joined: "2024-02-10",
  },
  {
    id: 3,
    name: "Jane Doe",
    email: "jane@example.com",
    role: "user",
    subscription: "Premium - $29/mo",
    status: "Blocked",
    joined: "2024-03-01",
  },
  {
    id: 4,
    name: "Bob Wilson",
    email: "bob@example.com",
    role: "user",
    subscription: "Trial",
    status: "Active",
    joined: "2024-03-20",
  },
];

const UsersAdmin = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
            User Management
          </h1>
          <p className="text-xl text-gray-600">
            Manage users, subscriptions, roles & permissions
          </p>
        </div>
        <Link
          to="/admin"
          className="text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors"
        >
          ← Back to Dashboard
        </Link>
      </div>

      <div className="bg-white shadow-2xl border border-gray-200 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100 sticky top-0">
              <tr>
                <th className="px-6 py-5 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-5 text-left text-xs font-bold text-gray-900 uppercase tracking-wider hidden sm:table-cell">
                  Email
                </th>
                <th className="px-6 py-5 text-left text-xs font-bold text-gray-900 uppercase tracking-wider hidden md:table-cell">
                  Role
                </th>
                <th className="px-6 py-5 text-left text-xs font-bold text-gray-900 uppercase tracking-wider hidden lg:table-cell">
                  Subscription
                </th>
                <th className="px-6 py-5 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-5 text-left text-xs font-bold text-gray-900 uppercase tracking-wider hidden md:table-cell">
                  Joined
                </th>
                <th className="px-6 py-5 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-gradient-to-b from-white to-gray-50/50">
              {dummyUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-blue-50/50 transition-all group"
                >
                  <td className="px-6 py-6 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-xl font-bold text-white">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-lg text-gray-900 group-hover:text-blue-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500 hidden sm:block">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap text-sm font-mono text-gray-600 hidden sm:table-cell">
                    {user.email}
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap hidden md:table-cell">
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full shadow-sm ${
                        user.role === "admin"
                          ? "bg-red-100 text-red-800 border border-red-200"
                          : "bg-green-100 text-green-800 border border-green-200"
                      }`}
                    >
                      {user.role.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-600 hidden lg:table-cell">
                    {user.subscription}
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 text-sm font-bold rounded-full shadow-sm ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-800 border-2 border-green-200 ring-2 ring-green-100/50"
                          : "bg-red-100 text-red-800 border-2 border-red-200 ring-2 ring-red-100/50"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                    {new Date(user.joined).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button className="px-4 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 text-sm font-semibold rounded-xl transition-all shadow-sm hover:shadow-md w-full sm:w-auto">
                        ✏️ Edit
                      </button>
                      <button
                        className={`px-4 py-2 text-sm font-semibold rounded-xl shadow-sm transition-all w-full sm:w-auto flex items-center justify-center ${
                          user.status === "Blocked"
                            ? "bg-green-100 hover:bg-green-200 text-green-700 hover:shadow-md"
                            : "bg-red-100 hover:bg-red-200 text-red-700 hover:shadow-md"
                        }`}
                      >
                        {user.status === "Blocked" ? "✅ Unblock" : "🚫 Block"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <span>Showing {dummyUsers.length} users</span>
            <button className="px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md">
              + Add New Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersAdmin;
