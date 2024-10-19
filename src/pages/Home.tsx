import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, AlertCircle, ClipboardList } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Community Hazard Reporter</h1>
      <p className="text-xl mb-8">Help make your community safer by reporting hazards to local authorities.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <MapPin size={48} className="mx-auto mb-4 text-blue-500" />
          <h2 className="text-2xl font-semibold mb-2">Report Hazards</h2>
          <p>Easily report community hazards like potholes, broken streetlights, and more.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <AlertCircle size={48} className="mx-auto mb-4 text-red-500" />
          <h2 className="text-2xl font-semibold mb-2">Real-time Updates</h2>
          <p>Get real-time updates on reported hazards and their resolution status.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ClipboardList size={48} className="mx-auto mb-4 text-green-500" />
          <h2 className="text-2xl font-semibold mb-2">Track Progress</h2>
          <p>Monitor the progress of reported issues and see how your community is improving.</p>
        </div>
      </div>
      
      <Link to="/report" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
        Report a Hazard Now
      </Link>
    </div>
  );
};

export default Home;