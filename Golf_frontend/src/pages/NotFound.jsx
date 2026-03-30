import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">The page you are looking for doesn't exist.</p>
      <Link to="/" className="text-green-600 hover:underline">Go Home</Link>
    </div>
  );
};

export default NotFound;