import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function ResizeMap() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
  return null;
}

const Demo = () => {
  const [sourceText, setSourceText] = useState('');
  const [destText, setDestText] = useState('');
  const [sourceCoords, setSourceCoords] = useState(null);
  const [destCoords, setDestCoords] = useState(null);
  const [routeCoords, setRouteCoords] = useState([]);

  const geocode = async (place) => {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${place}`);
    const data = await response.json();
    return data.length ? { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) } : null;
  };

  const getRoute = async (src, dest) => {
    const res = await fetch(`https://router.project-osrm.org/route/v1/driving/${src.lon},${src.lat};${dest.lon},${dest.lat}?overview=full&geometries=geojson`);
    const data = await res.json();
    const coords = data.routes[0].geometry.coordinates.map(([lon, lat]) => [lat, lon]);
    setRouteCoords(coords);
  };

  const handleRoute = async () => {
    const src = await geocode(sourceText);
    const dst = await geocode(destText);
    if (!src || !dst) {
      alert('Invalid source or destination');
      return;
    }
    setSourceCoords(src);
    setDestCoords(dst);
    setRouteCoords([]);
    await getRoute(src, dst);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center">Route from Source to Destination</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
            placeholder="Enter source location"
            className="border p-3 rounded-lg"
          />
          <input
            type="text"
            value={destText}
            onChange={(e) => setDestText(e.target.value)}
            placeholder="Enter destination location"
            className="border p-3 rounded-lg"
          />
          <button
            onClick={handleRoute}
            className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition"
          >
            Get Route & Lat/Lng
          </button>
        </div>

        <div className="text-center space-y-2">
          {sourceCoords && (
            <p className="text-gray-700">
              <strong>Source:</strong> {sourceCoords.lat}, {sourceCoords.lon}
            </p>
          )}
          {destCoords && (
            <p className="text-gray-700">
              <strong>Destination:</strong> {destCoords.lat}, {destCoords.lon}
            </p>
          )}
        </div>

        <div className="w-full h-[400px]">
          <MapContainer
            center={sourceCoords || [20.5937, 78.9629]} // India default
            zoom={5}
            style={{ width: '100%', height: '100%' }}
          >
            <ResizeMap />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {sourceCoords && (
              <Marker position={[sourceCoords.lat, sourceCoords.lon]}>
                <Popup>Source</Popup>
              </Marker>
            )}
            {destCoords && (
              <Marker position={[destCoords.lat, destCoords.lon]}>
                <Popup>Destination</Popup>
              </Marker>
            )}
            {routeCoords.length > 0 && (
              <Polyline positions={routeCoords} color="blue" />
            )}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Demo;
