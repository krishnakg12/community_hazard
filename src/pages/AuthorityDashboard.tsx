import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, CheckCircle, Clock } from 'lucide-react';

interface HazardSummary {
  type: string;
  count: number;
}

interface HazardStatus {
  reported: number;
  inProgress: number;
  resolved: number;
}

const AuthorityDashboard: React.FC = () => {
  const [hazardSummary, setHazardSummary] = useState<HazardSummary[]>([]);
  const [hazardStatus, setHazardStatus] = useState<HazardStatus>({ reported: 0, inProgress: 0, resolved: 0 });

  useEffect(() => {
    // Simulating fetching data from an API
    const fetchDashboardData = async () => {
      // In a real application, you would fetch this data from your backend
      const mockHazardSummary: HazardSummary[] = [
        { type: 'Pothole', count: 15 },
        { type: 'Broken Streetlight', count: 8 },
        { type: 'Garbage', count: 12 },
        { type: 'Drainage Issue', count: 5 },
        { type: 'Other', count: 3 },
      ];
      setHazardSummary(mockHazardSummary);

      const mockHazardStatus: HazardStatus = { reported: 10, inProgress: 18, resolved: 15 };
      setHazardStatus(mockHazardStatus);
    };

    fetchDashboardData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Authority Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow flex items-center">
          <AlertCircle size={48} className="text-red-500 mr-4" />
          <div>
            <p className="text-xl font-semibold">{hazardStatus.reported}</p>
            <p className="text-gray-600">Reported Hazards</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex items-center">
          <Clock size={48} className="text-yellow-500 mr-4" />
          <div>
            <p className="text-xl font-semibold">{hazardStatus.inProgress}</p>
            <p className="text-gray-600">In Progress</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex items-center">
          <CheckCircle size={48} className="text-green-500 mr-4" />
          <div>
            <p className="text-xl font-semibold">{hazardStatus.resolved}</p>
            <p className="text-gray-600">Resolved Hazards</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Hazard Type Summary</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={hazardSummary}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Reports</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reported On</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Sample rows - in a real app, you'd map over actual data */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Pothole</td>
              <td className="px-6 py-4 whitespace-nowrap">Main St, Delhi</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">In Progress</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">2024-03-15</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Broken Streetlight</td>
              <td className="px-6 py-4 whitespace-nowrap">Park Ave, Mumbai</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Reported</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">2024-03-14</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuthorityDashboard;