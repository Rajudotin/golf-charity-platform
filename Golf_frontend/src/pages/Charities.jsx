import { useEffect, useState } from 'react';
import api from '../services/api';

const Charities = () => {
  const [charities, setCharities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCharities = async () => {
      try {
        // Replace with your actual endpoint when ready
        const { data } = await api.get('/charities');
        setCharities(data);
      } catch (err) {
        setError('Failed to load charities. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCharities();
  }, []);

  if (loading) return <div className="text-center py-8">Loading charities...</div>;
  if (error) return <div className="text-center text-red-600 py-8">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Our Charity Partners</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {charities.map((charity) => (
          <div key={charity.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {charity.image && (
              <img src={charity.image} alt={charity.name} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{charity.name}</h2>
              <p className="text-gray-600 mb-4">{charity.description}</p>
              {charity.upcomingEvent && (
                <div className="text-sm text-green-600">
                  Upcoming: {charity.upcomingEvent}
                </div>
              )}
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Support This Charity
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Charities;