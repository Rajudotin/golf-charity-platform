import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";

const Dashboard = () => {
  const { user } = useAuth();
  const [scores, setScores] = useState([]);
  const [subscription, setSubscription] = useState({
    status: "active",
    renewsAt: "2026-05-01",
  });

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const { data } = await api.get("/scores");
        setScores(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchScores();
    // TODO: fetch subscription details, charity, participation, winnings
  }, []);

  return (
    <div className="space-y-6 sm:space-y-8 px-4 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
        Welcome, {user?.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Subscription Card */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Subscription
          </h2>
          <p>
            Status:{" "}
            <span
              className={`font-bold ${subscription.status === "active" ? "text-green-600" : "text-red-600"}`}
            >
              {subscription.status}
            </span>
          </p>
          {subscription.renewsAt && (
            <p>
              Next renewal:{" "}
              {new Date(subscription.renewsAt).toLocaleDateString()}
            </p>
          )}
          <button className="mt-4 w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition">
            Manage Subscription
          </button>
        </div>

        {/* Selected Charity */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow hover:shadow-lg transition-all">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            Your Charity
          </h2>
          <p>
            Supporting: <strong>Save the Children</strong>
          </p>
          <p>Donation: 10% of subscription</p>
          <button className="mt-4 w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition">
            Change Charity
          </button>
        </div>

        {/* Score Entry */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow hover:shadow-lg transition-all">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            Recent Scores
          </h2>
          {scores.length === 0 ? (
            <p>No scores entered yet.</p>
          ) : (
            <ul className="space-y-1">
              {scores.map((score, idx) => (
                <li key={idx}>
                  {score.score} on {new Date(score.date).toLocaleDateString()}
                </li>
              ))}
            </ul>
          )}
          <button className="mt-4 w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition">
            Add New Score
          </button>
        </div>

        {/* Participation & Winnings */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow hover:shadow-lg transition-all">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            Participation
          </h2>
          <p>Draws entered: 3</p>
          <p>Upcoming draws: April 30</p>
          <h3 className="font-semibold mt-4">Winnings</h3>
          <p>Total won: $0.00</p>
          <p>Last payout: -</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
