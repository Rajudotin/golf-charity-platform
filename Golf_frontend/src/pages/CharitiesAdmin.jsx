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
      console.error("Charities load error:", err);
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
        console.log("Update:", editingCharity.id, formData);
        alert("Updated charity (backend PUT /charities/:id coming soon)");
      } else {
        // POST to backend (stubbed)
        console.log("Create:", formData);
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
      console.log("Delete:", id);
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
    return <div className="p-6 text-center">Loading charities...</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Charity Management</h1>
        <Link to="/admin" className="text-blue-600 hover:underline">
          ← Back
        </Link>
      </div>

      {error && (
        <div className="bg-yellow-100 text-yellow-800 p-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="mb-6">
        <button
          onClick={() => openModal()}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 shadow"
        >
          + Add Charity
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Goal
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {charities.map((charity) => (
              <tr key={charity.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{charity.name}</td>
                <td className="px-6 py-4">{charity.description}</td>
                <td className="px-6 py-4 font-medium">${charity.goal}</td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    onClick={() => openModal(charity)}
                    className="text-indigo-600 hover:text-indigo-900 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(charity.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg max-w-md w-full max-h-screen overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              {editingCharity ? "Edit Charity" : "Add Charity"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Charity Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg h-24 focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="number"
                placeholder="Fundraising Goal"
                value={formData.goal}
                onChange={(e) =>
                  setFormData({ ...formData, goal: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <div className="flex space-x-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 font-medium"
                >
                  {editingCharity ? "Update" : "Create"}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 font-medium"
                >
                  Cancel
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
