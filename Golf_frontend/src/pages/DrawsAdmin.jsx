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
      const response = await api.post("/draw/run");
      setResults(response.data);
      alert(
        `🎉 Draw complete!\nNumbers: ${response.data.draw.numbers.join(", ")}\nWinners: ${response.data.winners.length}`,
      );
    } catch (err) {
      setError(err.response?.data?.msg || "Draw failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Draw Management
          </h1>
          <p className="text-xl text-gray-600">
            Run lottery draws, view results, manage winners
          </p>
        </div>
        <Link
          to="/admin"
          className="text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors whitespace-nowrap"
        >
          ← Back to Dashboard
        </Link>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 p-6 sm:p-8 rounded-2xl mb-8 shadow-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <svg
                className="h-8 w-8 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-lg sm:text-xl text-red-800 font-semibold">
                {error}
              </p>
              <p className="mt-1 text-red-600">
                Please check backend connection and try again.
              </p>
            </div>
          </div>
        </div>
      )}

      {results && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-6 sm:p-8 rounded-2xl mb-8 shadow-xl">
          <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
            <span className="mr-3 p-2 bg-green-200 rounded-full">🎉</span>
            Latest Draw Results
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-sm font-semibold text-green-800 uppercase tracking-wide mb-2">
                Winning Numbers
              </p>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-mono font-bold text-green-900 grid grid-cols-6 gap-2 mb-4">
                  {results.draw.numbers.map((num, i) => (
                    <span
                      key={i}
                      className="bg-green-100 text-green-800 px-4 py-3 rounded-lg shadow font-mono"
                    >
                      {num}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-green-800 uppercase tracking-wide mb-2">
                Winners Found
              </p>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-4xl font-bold text-green-900">
                  {results.winners.length}
                </p>
                {results.winners.length > 0 && (
                  <p className="text-sm text-green-700 mt-2">
                    {results.winners
                      .map(
                        (w, i) =>
                          `User #${w.user_id} (${w.match_count} matches)`,
                      )
                      .join(", ")}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 shadow-2xl border border-indigo-200 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Run Next Draw?
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Generate cryptographically secure random numbers, match against
            player scores, automatically update draws & winners tables in
            database
          </p>
        </div>

        <button
          onClick={handleRunDraw}
          disabled={loading}
          className="group relative inline-flex items-center px-10 py-6 bg-gradient-to-r from-green-600 to-emerald-600 text-xl font-bold text-white rounded-2xl hover:from-green-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 shadow-2xl hover:shadow-3xl focus:ring-4 focus:ring-green-300 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto min-w-[280px] disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-4 h-7 w-7 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              🏃 Running Draw...
            </>
          ) : (
            <>
              🚀 <span className="ml-2 tracking-wide">RUN DRAW NOW</span>
            </>
          )}
        </button>

        <p className="text-sm text-gray-500 mt-8 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-xl border inline-block">
          🔒 Admin only • POST /api/draw/run → Backend processes & saves to DB
        </p>
      </div>
    </div>
  );
};

export default DrawsAdmin;
