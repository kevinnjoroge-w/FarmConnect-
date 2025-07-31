import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:8000/api/farmers/';

// Helper function to calculate distance between two GPS coordinates using Haversine formula
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c; // Distance in km
  return d;
}

const FarmerList = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [farmers, setFarmers] = useState([]);
  const [nearbyFarmers, setNearbyFarmers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch farmers from backend
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch farmers');
        return res.json();
      })
      .then((data) => {
        setFarmers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (farmers.length === 0) return;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          // Filter farmers within 50 km radius
          const filteredFarmers = farmers.filter(farmer => {
            if (farmer.latitude && farmer.longitude) {
              const distance = getDistanceFromLatLonInKm(latitude, longitude, farmer.latitude, farmer.longitude);
              return distance <= 50;
            }
            return false;
          });
          setNearbyFarmers(filteredFarmers);
        },
        (error) => {
          console.error('Error getting user location:', error);
          // If location not available, show all farmers
          setNearbyFarmers(farmers);
        }
      );
    } else {
      // Geolocation not supported, show all farmers
      setNearbyFarmers(farmers);
    }
  }, [farmers]);

  if (loading) return <p>Loading farmers...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section id="farmers-nearby" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Farmers Near You</h2>
        {userLocation === null && (
          <p className="text-gray-600 mb-4">Fetching your location to show nearby farmers...</p>
        )}
        {nearbyFarmers.length === 0 && (
          <p className="text-gray-600">No farmers found near your location.</p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nearbyFarmers.map(farmer => (
            <div key={farmer.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{farmer.farm_name || farmer.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{farmer.description}</p>
              {farmer.latitude && farmer.longitude && (
                <p className="text-gray-500 text-xs">Lat: {farmer.latitude.toFixed(4)}, Lon: {farmer.longitude.toFixed(4)}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmerList;
