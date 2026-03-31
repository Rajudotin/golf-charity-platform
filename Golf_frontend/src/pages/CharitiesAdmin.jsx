import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const CharitiesAdmin = () => {
  const [charities, setCharities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [editingCharity, setEditingCharity] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    goal: "",
  });

  useEffect(() => {
    fetchCharities();
  }, []);

  const fetchCharities = async () => {
    try {
      const response = await api.get("/charities");
      setCharities(response.data);
    } catch (err) {
      setCharities([
        {
          id: 1,
          name: "Golf for Good",
          description: "Supporting junior golf programs",
          goal: 5000,
        },
        {
          id: 2,
          name: "Fairway Foundation",
          description: "Youth scholarships and equipment",
          goal: 10000,
        },
      ]);
      setError("Using demo data (backend GET /charities 404)");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingCharity) {
        // PUT to backend (stubbed)
        alert("Updated charity (backend PUT /charities/:id coming soon)");
      } else {
        // POST to backend (stubbed)
        alert("Added charity (backend POST /charities coming soon)");
      }
      fetchCharities();
      closeModal();
    } catch (err) {
      alert("Save failed");
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Delete charity?")) {
      alert("Deleted charity (backend DELETE /charities/:id coming soon)");
      // Filter out for demo
      setCharities(charities.filter((c) => c.id !== id));
    }
  };

  const openModal = (charity = null) => {
    setEditingCharity(charity);
    setFormData({
      name: charity?.name || "",
      description: charity?.description || "",
      goal: charity?.goal?.toString() || "",
    });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setEditingCharity(null);
    setFormData({ name: "", description: "", goal: "" });
  };

  if (loading)
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto text-center">
        <div className="text-xl sm:text-2xl font-semibold text-gray-600 py-12">
          Loading charities...
        </div>
      </div>
    );

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Charity Management
        </h1>
        <Link
          to="/admin"
          className="text-blue-600 hover:text-blue-700 text-lg font-medium transition-colors"
        >
          ← Back to Dashboard
        </Link>
      </div>

      {error && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 sm:p-6 rounded-lg mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-800">{error}</p>
            </div>
          </div>
        </div>
      )}

      <div className="mb-8">
        <button
          onClick={() => openModal()}
          className="inline-flex items-center px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-xl hover:bg-green-700 focus:ring-4 focus:ring-green-200 shadow-lg transition-all w-full sm:w-auto"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          + Add Charity
        </button>
      </div>

      <div className="bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
              <tr>
                <th className="px-4 sm:px-6 lg:px-8 py-4 text-left text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 sm:px-6 lg:px-8 py-4 text-left text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider hidden md:table-cell">
                  Description
                </th>
                <th className="px-6 py-4 text-left text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider hidden lg:table-cell">
                  Goal
                </th>
                <th className="px-6 py-4 text-left text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {charities.map((charity) => (
                <tr
                  key={charity.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 sm:px-6 lg:px-8 py-6 font-semibold text-gray-900 sm:text-lg">
                    {charity.name}
                  </td>
                  <td className="px-4 sm:px-6 lg:px-8 py-6 text-gray-600 hidden md:table-cell">
                    {charity.description}
                  </td>
                  <td className="px-6 py-6 text-gray-900 font-semibold hidden lg:table-cell">
                    ${Number(charity.goal || 0).toLocaleString()}
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button
                        onClick={() => openModal(charity)}
                        className="px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-lg hover:bg-indigo-200 transition-colors w-full sm:w-auto flex items-center justify-center"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(charity.id)}
                        className="px-4 py-2 bg-red-100 text-red-700 text-sm font-medium rounded-lg hover:bg-red-200 transition-colors w-full sm:w-auto flex items-center justify-center"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl max-w-lg sm:max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 mx-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
              {editingCharity ? "Edit Charity" : "Add New Charity"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Charity Name
                </label>
                <input
                  type="text"
                  placeholder="Enter charity name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all text-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  placeholder="Describe the charity mission"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full p-4 border border-gray-200 rounded-xl h-32 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all text-lg resize-vertical"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Fundraising Goal ($)
                </label>
                <input
                  type="number"
                  placeholder="10000"
                  value={formData.goal}
                  onChange={(e) =>
                    setFormData({ ...formData, goal: e.target.value })
                  }
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all text-lg"
                  required
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl focus:ring-4 focus:ring-green-200 transition-all"
                >
                  {editingCharity ? "💾 Update Charity" : "✨ Create Charity"}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-4 px-8 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg focus:ring-4 focus:ring-gray-200 transition-all"
                >
                  ❌ Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharitiesAdmin;
