import React, { useState } from 'react';
import { Camera, Upload } from 'lucide-react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const ReportHazard: React.FC = () => {
  const [hazardType, setHazardType] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState({ latitude: 20.5937, longitude: 78.9629 }); // Default to center of India

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the report to your backend
    console.log({ hazardType, description, location });
    alert('Report submitted successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Report a Hazard</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="hazardType" className="block text-sm font-medium text-gray-700">Hazard Type</label>
          <select
            id="hazardType"
            value={hazardType}
            onChange={(e) => setHazardType(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          >
            <option value="">Select a hazard type</option>
            <option value="pothole">Pothole</option>
            <option value="broken_streetlight">Broken Streetlight</option>
            <option value="garbage">Garbage</option>
            <option value="drainage_issue">Drainage Issue</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder="Provide details about the hazard..."
            required
          ></textarea>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <Map
            initialViewState={{
              latitude: location.latitude,
              longitude: location.longitude,
              zoom: 4
            }}
            style={{width: '100%', height: 300}}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken="YOUR_MAPBOX_ACCESS_TOKEN_HERE"
            onClick={(e) => setLocation({ latitude: e.lngLat.lat, longitude: e.lngLat.lng })}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload Photo</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Camera className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
        
        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Submit Report
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReportHazard;