import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../services/api";

const ReportsAdmin = () => {
  const [stats, setStats] = useState({
    totalUsers: 124,
    totalDraws: 15,
    prizePool: "$12,450",
    charitiesRaised: "$8,250",
    totalSubscriptions: 89,
    avgScore: 87.2,
    thisWeekWinners: 3,
  });

  useEffect(() => {
    // TODO: api.get('/admin/stats')
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Reports & Analytics
        </h1>
        <Link to="/admin" className="text-blue-600 hover:underline text-lg">
          ← Back to Dashboard
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-full mr-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-3xl font-bold text-gray-900">
                {stats.totalUsers}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-full mr-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Prize Pool</p>
              <p className="text-3xl font-bold text-green-600">
                {stats.prizePool}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-full mr-4">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2-4V7m0 4v-3M10 14h.01M15 14h.01M8 14h.01M12 14h.01M8 17h.01M12 17h.01M15 17h.01"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">
                Charities Raised
              </p>
              <p className="text-3xl font-bold text-purple-600">
                {stats.charitiesRaised}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Recent Draws
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Draw #15</span>
              <span className="font-semibold">$1,250 prize</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Draw #14</span>
              <span className="font-semibold">$980 prize</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            Top Stats
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Subscriptions</span>
              <span className="font-semibold">{stats.totalSubscriptions}</span>
            </div>
            <div className="flex justify-between">
              <span>Avg Score</span>
              <span className="font-semibold">{stats.avgScore}</span>
            </div>
            <div className="flex justify-between">
              <span>Winners This Week</span>
              <span className="font-semibold text-green-600">
                {stats.thisWeekWinners}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border">
        <h3 className="text-lg font-bold mb-4">📊 Next: Analytics Charts</h3>
        <p className="text-gray-600">
          Ready for Chart.js → Draw trends, user growth, prize history
        </p>
      </div>
    </div>
  );
};

export default ReportsAdmin;
