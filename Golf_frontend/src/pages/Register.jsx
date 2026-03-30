import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    plan: 'monthly',
    charityId: '',
    donationPercent: 10,
  });
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  // Dummy charities list – later fetch from API
  const charities = [
    { id: '1', name: 'Save the Children' },
    { id: '2', name: 'Red Cross' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form); // adjust to match your backend expectations
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Subscribe & Start Giving</h2>
      {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} required className="w-full p-2 border rounded" />

        <select value={form.plan} onChange={e => setForm({...form, plan: e.target.value})} className="w-full p-2 border rounded">
          <option value="monthly">Monthly ($9.99/mo)</option>
          <option value="yearly">Yearly ($99.99/yr - save 16%)</option>
        </select>

        <select value={form.charityId} onChange={e => setForm({...form, charityId: e.target.value})} required className="w-full p-2 border rounded">
          <option value="">Select a charity</option>
          {charities.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>

        <div>
          <label className="block mb-1">Donation Percentage (minimum 10%)</label>
          <input type="number" min="10" max="100" value={form.donationPercent} onChange={e => setForm({...form, donationPercent: e.target.value})} required className="w-full p-2 border rounded" />
        </div>

        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Subscribe</button>
      </form>
    </div>
  );
};

export default Register;