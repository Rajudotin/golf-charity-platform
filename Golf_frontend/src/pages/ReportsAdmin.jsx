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
    <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Reports & Analytics
        </h1>
        <Link
          to="/admin"
          className="text-blue-600 hover:text-blue-700 text-lg font-semibold transition-colors"
        >
          ← Back to Dashboard
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
        <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 transform group-hover:scale-105 transition-transform duration-500" />
          <div className="flex items-center relative z-10">
            <div className="p-4 sm:p-5 bg-blue-100/80 group-hover:bg-blue-200 rounded-2xl mr-4 sm:mr-6 shadow-lg group-hover:shadow-xl transition-all">
              <svg
                className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600"
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
              <p className="text-sm sm:text-base font-semibold text-gray-700 mb-1">
                Total Users
              </p>
              <p className="text-4xl sm:text-5xl font-black text-gray-900 drop-shadow-lg">
                {stats.totalUsers.toLocaleString()}
              </p>
              <p className="text-sm text-blue-600 font-semibold mt-1">
                +12% this month
              </p>
            </div>
          </div>
        </div>

        <div className="group relative bg-gradient-to-br from-emerald-50 to-green-50 p-6 sm:p-8 rounded-2xl shadow-xl border border-emerald-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-green-500/5 transform group-hover:scale-105 transition-transform duration-500" />
          <div className="flex items-center relative z-10">
            <div className="p-4 sm:p-5 bg-emerald-100/80 group-hover:bg-emerald-200 rounded-2xl mr-4 sm:mr-6 shadow-lg group-hover:shadow-xl transition-all">
              <svg
                className="w-8 sm:w-10 h-8 sm:h-10 text-emerald-600"
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
              <p className="text-sm sm:text-base font-semibold text-gray-700 mb-1">
                Prize Pool
              </p>
              <p className="text-4xl sm:text-5xl font-black text-emerald-700 drop-shadow-lg">
                {stats.prizePool}
              </p>
              <p className="text-sm text-emerald-600 font-semibold mt-1">
                +18% growth
              </p>
            </div>
          </div>
        </div>

        <div className="group relative bg-gradient-to-br from-purple-50 to-violet-50 p-6 sm:p-8 rounded-2xl shadow-xl border border-purple-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-violet-500/5 transform group-hover:scale-105 transition-transform duration-500" />
          <div className="flex items-center relative z-10">
            <div className="p-4 sm:p-5 bg-purple-100/80 group-hover:bg-purple-200 rounded-2xl mr-4 sm:mr-6 shadow-lg group-hover:shadow-xl transition-all">
              <svg
                className="w-8 sm:w-10 h-8 sm:h-10 text-purple-600"
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
              <p className="text-sm sm:text-base font-semibold text-gray-700 mb-1">
                Charities Raised
              </p>
              <p className="text-4xl sm:text-5xl font-black text-purple-700 drop-shadow-lg">
                {stats.charitiesRaised}
              </p>
              <p className="text-sm text-purple-600 font-semibold mt-1">
                10% of revenue
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-base sm:text-lg font-bold mb-4 flex items-center">
            <svg
              className="w-4 sm:w-5 h-4 sm:h-5 mr-2 text-gray-500"
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
