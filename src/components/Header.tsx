import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <AlertTriangle size={24} />
          <span className="text-xl font-bold">Community Hazard Reporter</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/report" className="hover:text-blue-200">Report Hazard</Link></li>
            <li><Link to="/view-reports" className="hover:text-blue-200">View Reports</Link></li>
            <li><Link to="/authority-dashboard" className="hover:text-blue-200">Authority Dashboard</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;