import React, { useState, useEffect } from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface Hazard {
  id: number;
  type: string;
  description: string;
  latitude: number;
  longitude: number;
  status: string;
}

const ViewReports: React.FC = () => {
  const [hazards, setHazards] = useState<Hazard[]>([]);

  useEffect(() => {
    // Simulating fetching hazards from an API
    const fetchHazards = async () => {
      // In a real application, you would fetch this data from your backend
      const mockHazards: Hazard[] = [
        { id: 1, type: 'Pothole', description: 'Large pothole on Main St', latitude: 28.6139, longitude: 77.2090, status: 'Reported' },
        { id: 2, type: 'Broken Streetlight', description: 'Streetlight out on Park Ave', latitude: 19.0760, longitude: 72.8777, status: 'In Progress' },
        { id: 3, type: 'Garbage', description: 'Illegal dumping in alley', latitude: 12.9716, longitude: 77.5946, status: 'Resolved' },
      ];
      setHazards(mockHazards);
    };

    fetchHazards();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">View Reported Hazards</h1>
      <div className="mb-8">
        <Map
          initialViewState={{
            latitude: 20.5937,
            longitude: 78.9629,
            zoom: 4
          }}
          style={{width: '100%', height: 400}}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken="YOUR_MAPBOX_ACCESS_TOKEN_HERE"
        >
          {/* Here you would add Markers for each hazard */}
        </Map>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hazards.map((hazard) => (
          <div key={hazard.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">{hazard.type}</h2>
            <p className="text-gray-600 mb-2">{hazard.description}</p>
            <p className="text-sm text-gray-500">Status: <span className={`font-semibold ${hazard.status === 'Resolved' ? 'text-green-600' : hazard.status === 'In Progress' ? 'text-yellow-600' : 'text-red-600'}`}>{hazard.status}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewReports;