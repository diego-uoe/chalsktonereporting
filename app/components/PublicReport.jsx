"use client"; // Required for Next.js client-side only components

import React, { useState } from "react";
import { MapPin, Camera, Send } from "lucide-react";
import LocationMap from "./LocationMap";

export default function PublicReport() {
  const [location, setLocation] = useState(null); // Stores the selected location
  const [showMap, setShowMap] = useState(false); // Toggles map visibility
  const [issueType, setIssueType] = useState(""); // Stores the selected issue type
  const [description, setDescription] = useState(""); // Stores the issue description
  const [photos, setPhotos] = useState([]); // Stores the uploaded photos (if implemented)

  const handleLocationSelect = (lat, lng) => {
    setLocation({ lat, lng });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Construct the data to send or use
    const reportData = {
      issueType,
      description,
      location,
      photos,
    };

    console.log("Submitting Report:", reportData);
    // Add your API call or further logic here
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Report an Issue</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">
            Issue Type
          </label>
          <select
            id="type"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            value={issueType}
            onChange={(e) => setIssueType(e.target.value)} // Update issue type
          >
            <option value="">Select an issue type</option>
            <option value="Pothole">Pothole</option>
            <option value="Street Lighting">Street Lighting</option>
            <option value="Graffiti">Graffiti</option>
            <option value="Anti-Social Behaviour">Anti-Social Behaviour</option>
            <option value="Fly-Tipping">Fly-Tipping</option>
            <option value="Blocked Drain">Blocked Drain</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Please describe the issue in detail..."
            value={description}
            onChange={(e) => setDescription(e.target.value)} // Update description
          />
        </div>
        <div className="space-y-2">
          <span className="block text-sm font-medium text-gray-700">Location</span>
          {!showMap ? (
            <button
              type="button"
              onClick={() => setShowMap(true)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <MapPin className="h-5 w-5 mr-2 text-gray-400" />
              {location ? "Change Location" : "Add Location"}
            </button>
          ) : (
            <div className="space-y-4">
              <LocationMap onLocationSelect={handleLocationSelect} />
              {location && (
                <div className="text-sm text-gray-500">
                  Selected location: {location.lat.toFixed(6)},{" "}
                  {location.lng.toFixed(6)}
                </div>
              )}
              <button
                type="button"
                onClick={() => setShowMap(false)}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Done
              </button>
            </div>
          )}
        </div>
        <div className="space-y-2">
          <span className="block text-sm font-medium text-gray-700">Photos</span>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => alert("Photo upload not implemented yet!")} // Placeholder for photo upload logic
          >
            <Camera className="h-5 w-5 mr-2 text-gray-400" />
            Add Photos
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Send className="h-5 w-5 mr-2" />
            Submit Report
          </button>
        </div>
      </form>
    </div>
  );
}
