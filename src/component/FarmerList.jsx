import React, { useEffect, useState } from 'react';

const mockFarmers = [
  { id: 1, name: 'John\'s Farm', latitude: 40.7128, longitude: -74.0060, description: 'Fresh vegetables and fruits from NYC.' },
  { id: 2, name: 'Green Valley Farm', latitude: 40.730610, longitude: -73.935242, description: 'Organic dairy and eggs.' },
  { id: 3, name: 'Sunny Acres', latitude: 40.650002, longitude: -73.949997, description: 'Local herbs and spices.' },
  // Add more mock farmers with lat/lon as needed
];

// Helper function to calculate distance between two GPS coordinates using Haversine formula
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c; // Distance in km
  return d;
}

const FarmerList = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyFarmers, setNearbyFarmers] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          // Filter farmers within 50 km radius
          const filteredFarmers = mockFarmers.filter(farmer => {
            const distance = getDistanceFromLatLonInKm(latitude, longitude, farmer.latitude, farmer.longitude);
            return distance <= 50;
          });
          setNearbyFarmers(filteredFarmers);
        },
        (error) => {
          console.error('Error getting user location:', error);
          // If location not available, show all farmers
          setNearbyFarmers(mockFarmers);
        }
      );
    } else {
      // Geolocation not supported, show all farmers
      setNearbyFarmers(mockFarmers);
    }
  }, []);

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
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{farmer.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{farmer.description}</p>
              <p className="text-gray-500 text-xs">Lat: {farmer.latitude.toFixed(4)}, Lon: {farmer.longitude.toFixed(4)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmerList;
