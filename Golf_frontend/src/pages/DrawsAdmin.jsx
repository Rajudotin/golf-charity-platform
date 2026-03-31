import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const DrawsAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  const handleRunDraw = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await api.post("/draw/run"); // Fixed endpoint: /api/draw/run
      setResults(response.data);
      alert(
        `🎉 Draw complete!\nNumbers: ${response.data.draw.numbers.join(", ")}\nWinners: ${response.data.winners.length}`,
      );
    } catch (err) {
      setError(err.response?.data?.msg || "Draw failed");
      console.error("Draw error:", err.response?.status, err.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Draw Management</h1>
        <Link to="/admin" className="text-blue-600 hover:underline">
          ← Back
        </Link>
      </div>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>
      )}

      {results && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          <h3 className="font-bold">🎉 Latest Draw Results</h3>
          <p>
            <strong>Numbers:</strong> {results.draw.numbers.join(", ")}
          </p>
          <p>
            <strong>Winners:</strong>{" "}
            {results.winners.length > 0
              ? results.winners
                  .map((w) => `User #${w.user_id} (${w.match_count} matches)`)
                  .join(", ")
              : "No winners"}
          </p>
        </div>
      )}

      <div className="bg-white shadow rounded-lg p-8 text-center">
        <h3 className="text-lg font-semibold mb-4">Ready to Run Next Draw?</h3>
        <p className="text-gray-600 mb-6">
          Generate random numbers, match scores, save to draws & winners tables
        </p>
        <button
          onClick={handleRunDraw}
          disabled={loading}
          className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 disabled:opacity-50 shadow-lg transition-all"
        >
          {loading ? "🏃 Running..." : "🚀 RUN DRAW NOW"}
        </button>
        <p className="text-sm text-gray-500 mt-4">
          Admin only - /api/draw/run → Backend/DB
        </p>
      </div>
    </div>
  );
};

export default DrawsAdmin;
