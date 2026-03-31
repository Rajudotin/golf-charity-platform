import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      navigate("/login"); // Auto to dashboard after register + login
    } catch (err) {
      setError(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="max-w-sm sm:max-w-md mx-auto p-4 sm:p-0">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
        Join Golf Charity
      </h2>
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        />
        <input
          type="password"
          placeholder="Password (min 8 chars)"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          minLength="8"
          required
          className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        />
        <button
          type="submit"
          className="w-full py-3 sm:py-2 rounded-lg hover:bg-green-700 font-semibold shadow-lg transition-all text-white bg-green-600 hover:shadow-xl hover:-translate-y-0.5"
        >
          Create Account
        </button>
      </form>
      <p className="mt-6 text-center">
        Already have account?{" "}
        <Link
          to="/login"
          className="text-green-600 hover:underline font-semibold"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
