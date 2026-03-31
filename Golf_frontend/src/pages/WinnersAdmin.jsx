import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const WinnersAdmin = () => {
  const [winners, setWinners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchWinners();
  }, []);

  const fetchWinners = async () => {
    try {
      // TODO: api.get('/winners') when backend added
      const dummyWinners = [
        {
          id: 1,
          user_id: 2,
          user_name: "John Smith",
          match_count: 5,
          prize: "$250",
          status: "Pending",
          draw_id: 1,
        },
        {
          id: 2,
          user_id: 3,
          user_name: "Jane Doe",
          match_count: 4,
          prize: "$100",
          status: "Paid",
          draw_id: 1,
        },
        {
          id: 3,
          user_id: 4,
          user_name: "Bob Wilson",
          match_count: 3,
          prize: "$50",
          status: "Pending",
          draw_id: 2,
        },
      ];
      setWinners(dummyWinners);
    } catch (err) {
      setError("Failed to load winners");
    } finally {
      setLoading(false);
    }
  };

  const markPaid = async (winnerId) => {
    try {
      // TODO: api.patch(`/winners/${winnerId}`, { status: 'Paid' })
      alert("Marked as Paid (DB update TODO)");
      fetchWinners();
    } catch (err) {
      alert("Error marking paid");
    }
  };

  if (loading) return <div className="p-6">Loading winners...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Winners & Payouts</h1>
        <Link to="/admin" className="text-blue-600 hover:underline">
          ← Back
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Winner
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Matches
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Prize
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Draw
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {winners.map((winner) => (
              <tr key={winner.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  User #{winner.user_id} ({winner.user_name})
                </td>
                <td className="px-6 py-4 font-semibold">
                  {winner.match_count}
                </td>
                <td className="px-6 py-4 font-bold text-green-600">
                  {winner.prize}
                </td>
                <td>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      winner.status === "Paid"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {winner.status}
                  </span>
                </td>
                <td className="px-6 py-4">Draw #{winner.draw_id}</td>
                <td className="px-6 py-4">
                  {winner.status === "Pending" && (
                    <button
                      onClick={() => markPaid(winner.id)}
                      className="bg-green-600 text-white px-4 py-1 rounded text-sm hover:bg-green-700"
                    >
                      Mark Paid
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        TODO: Connect to /api/winners GET/PUT
      </p>
    </div>
  );
};

export default WinnersAdmin;
