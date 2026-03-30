import { useState, useEffect } from 'react';
import api from '../services/api';

const Scores = () => {
  const [scores, setScores] = useState([]);
  const [newScore, setNewScore] = useState('');
  const [newDate, setNewDate] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchScores();
  }, []);

  const fetchScores = async () => {
    try {
      const { data } = await api.get('/scores');
      setScores(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddScore = async (e) => {
    e.preventDefault();
    if (newScore < 1 || newScore > 45) {
      setMessage('Score must be between 1 and 45');
      return;
    }
    try {
      await api.post('/scores', { score: newScore, date: newDate });
      setMessage('Score added');
      setNewScore('');
      setNewDate('');
      fetchScores();
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error adding score');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Manage Your Scores</h1>

      <form onSubmit={handleAddScore} className="bg-white p-6 rounded shadow mb-8 space-y-4">
        <h2 className="text-xl font-semibold">Enter New Score</h2>
        <div>
          <label className="block mb-1">Stableford Score (1-45)</label>
          <input type="number" min="1" max="45" value={newScore} onChange={e => setNewScore(e.target.value)} required className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1">Date</label>
          <input type="date" value={newDate} onChange={e => setNewDate(e.target.value)} required className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Add Score</button>
        {message && <p className="text-sm text-gray-600">{message}</p>}
      </form>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Your Last 5 Scores</h2>
        {scores.length === 0 ? (
          <p>No scores yet. Add your first score above.</p>
        ) : (
          <ul className="divide-y">
            {scores.map((score, idx) => (
              <li key={idx} className="py-2 flex justify-between">
                <span>{score.score}</span>
                <span className="text-gray-500">{new Date(score.date).toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Scores;