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

  if (loading)
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-4xl mx-auto text-center">
        <div className="text-4xl text-gray-400 mb-4 animate-pulse">🏆</div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-600 mb-2">
          Loading Winners...
        </h2>
        <p className="text-lg text-gray-500">Fetching payout records</p>
      </div>
    );
  if (error)
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-4xl mx-auto text-center">
        <div className="text-4xl text-red-400 mb-4">⚠️</div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          {error}
        </h2>
        <button
          onClick={fetchWinners}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all"
        >
          Retry
        </button>
      </div>
    );

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            🏆 Winners & Payouts
          </h1>
          <p className="text-xl text-gray-600">
            Celebrate champions and manage prize payouts
          </p>
        </div>
        <Link
          to="/admin"
          className="text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors"
        >
          ← Back to Dashboard
        </Link>
      </div>

      <div className="bg-white/80 backdrop-blur-sm shadow-2xl border border-gray-200 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-emerald-50 to-blue-50 sticky top-0">
              <tr>
                <th className="px-4 sm:px-6 lg:px-8 py-5 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Lucky Winner
                </th>
                <th className="px-4 sm:px-6 py-5 text-left text-sm font-bold text-gray-900 uppercase tracking-wider hidden lg:table-cell">
                  Matches
                </th>
                <th className="px-6 py-5 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Prize Won
                </th>
                <th className="px-6 py-5 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-5 text-left text-sm font-bold text-gray-900 uppercase tracking-wider hidden md:table-cell">
                  Draw #
                </th>
                <th className="px-6 py-5 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Payout
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {winners.map((winner) => (
                <tr
                  key={winner.id}
                  className="group hover:bg-emerald-50/50 transition-all"
                >
                  <td className="px-6 py-6">
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mr-4 shadow-xl group-hover:scale-105 transition-transform">
                        <span className="text-xl font-black text-white drop-shadow-lg">
                          🏆
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-xl text-gray-900 group-hover:text-emerald-900">
                          {winner.user_name}
                        </div>
                        <div className="text-sm font-mono text-gray-600">
                          User #{winner.user_id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 font-bold text-lg text-emerald-700 hidden lg:table-cell">
                    {winner.match_count} ⭐
                  </td>
                  <td className="px-6 py-6">
                    <div className="text-2xl font-black text-green-600 drop-shadow-lg">
                      {winner.prize}
                    </div>
                  </td>
                  <td>
                    <span
                      className={`px-4 py-2 text-sm font-bold rounded-2xl shadow-lg ${
                        winner.status === "Paid"
                          ? "bg-emerald-100 text-emerald-800 border-4 border-emerald-200 ring-4 ring-emerald-50/50"
                          : "bg-amber-100 text-amber-800 border-4 border-amber-200 ring-4 ring-amber-50/50 animate-pulse"
                      }`}
                    >
                      {winner.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-6 font-semibold text-gray-700 hidden md:table-cell">
                    Draw #{winner.draw_id}
                  </td>
                  <td className="px-6 py-6">
                    {winner.status === "Pending" ? (
                      <button
                        onClick={() => markPaid(winner.id)}
                        className="group/paid relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-xl font-bold text-white rounded-2xl hover:from-emerald-700 hover:to-green-700 shadow-2xl hover:shadow-3xl focus:ring-4 focus:ring-emerald-300 transition-all transform hover:-translate-y-1 w-full sm:w-auto min-w-[200px] disabled:opacity-50"
                      >
                        <span>💰 Mark Paid</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur opacity-20 group-hover/paid:opacity-30 transition-opacity" />
                      </button>
                    ) : (
                      <span className="px-6 py-3 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 font-bold rounded-2xl shadow-md">
                        ✅ Paid ✓
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 px-8 py-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between text-center lg:text-left">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                Total Payouts Processed
              </h3>
              <p className="text-4xl font-black text-emerald-600">
                {winners.filter((w) => w.status === "Paid").length}
              </p>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-xl font-bold text-white rounded-2xl hover:from-blue-700 hover:to-indigo-700 shadow-2xl hover:shadow-3xl transition-all">
              📊 Export Payout Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnersAdmin;
