import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8 sm:space-y-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
          Play Golf, Give Back, Win Prizes
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Your subscription supports charities and gives you a chance to win
          monthly draws based on your scores.
        </p>
        {!user && (
          <Link
            to="/register"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
          >
            Start Your Journey
          </Link>
        )}
      </section>

      {/* How It Works */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
          <div className="text-4xl mb-4 mx-auto w-16 h-16 flex items-center justify-center">
            ⛳
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-3">1. Subscribe</h3>
          <p>
            Choose monthly or yearly plan. Minimum 10% goes to charity of your
            choice.
          </p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-bold mb-2">2. Enter Scores</h3>
          <p>
            Log your latest Stableford scores (1‑45) – only the last 5 are kept.
          </p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="text-xl font-bold mb-2">3. Win Monthly</h3>
          <p>
            Monthly draws based on numbers. Jackpot rolls over until a 5‑number
            match occurs.
          </p>
        </div>
      </section>

      {/* Charity Impact */}
      <section className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Making a Difference Together
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-6">
          Every subscription contributes to our partner charities. You can
          increase your donation percentage and even make independent donations.
          Our platform ensures transparency and impact.
        </p>
        <Link
          to="/charities"
          className="text-green-600 font-semibold hover:underline"
        >
          Explore Charities →
        </Link>
      </section>

      {/* Recent Winners / Stats (placeholder) */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-2">Recent Winners</h2>
        <p className="text-gray-500">
          Coming soon – view verified winners after first draw.
        </p>
      </section>
    </div>
  );
};

export default Home;
