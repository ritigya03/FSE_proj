// Demo.jsx
import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";

const containerStyle = {
  width: '100%',
  height: '400px',
};

const defaultCenter = {
  lat: 37.7749, // San Francisco
  lng: -122.4194,
};

const Demo = () => {
  const [sourceLatLong, setSourceLatLong] = useState("");
  const [destLatLong, setDestLatLong] = useState("");
  const [directions, setDirections] = useState(null);
  const [sourceMarker, setSourceMarker] = useState(null);
  const [destMarker, setDestMarker] = useState(null);

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  const geocodeAddress = (address, type) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        const latLng = results[0].geometry.location;
        if (type === "source") {
          setSourceLatLong(`${latLng.lat()}, ${latLng.lng()}`);
          setSourceMarker({ position: latLng, title: "Source" });
        } else if (type === "destination") {
          setDestLatLong(`${latLng.lat()}, ${latLng.lng()}`);
          setDestMarker({ position: latLng, title: "Destination" });
        }
      } else {
        alert("Geocode failed: " + status);
      }
    });
  };

  const calculateRoute = () => {
    const sourceAddress = document.getElementById("source").value;
    const destAddress = document.getElementById("destination").value;

    geocodeAddress(sourceAddress, "source");
    geocodeAddress(destAddress, "destination");

    const directionsService = new window.google.maps.DirectionsService();

    const request = {
      origin: sourceAddress,
      destination: destAddress,
      travelMode: window.google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        setDirections(result);
      } else {
        alert("Directions request failed due to " + status);
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-semibold text-center text-gray-800">Drone Navigation: Source to Destination</h1>

        <div className="space-y-4">
          <div>
            <label htmlFor="source" className="block text-lg text-gray-700">Source Address:</label>
            <input
              type="text"
              id="source"
              placeholder="Enter source location"
              className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => handleInputChange(e, setSourceLatLong)}
            />
          </div>

          <div>
            <label htmlFor="destination" className="block text-lg text-gray-700">Destination Address:</label>
            <input
              type="text"
              id="destination"
              placeholder="Enter destination location"
              className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => handleInputChange(e, setDestLatLong)}
            />
          </div>

          <button
            onClick={calculateRoute}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
          >
            Get Route & Lat/Long
          </button>
        </div>

        <div id="latlong-display" className="space-y-2 text-center">
          <p className="text-lg text-gray-700">Source Lat/Long: <span className="font-medium">{sourceLatLong}</span></p>
          <p className="text-lg text-gray-700">Destination Lat/Long: <span className="font-medium">{destLatLong}</span></p>
        </div>
        
        <div className="w-full">
          <LoadScript googleMapsApiKey="AIzaSyBBPubBrFYplv41YMxW0cJwWAC8WO6_o34">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={defaultCenter}
              zoom={12}
            >
              {sourceMarker && <Marker position={sourceMarker.position} title={sourceMarker.title} />}
              {destMarker && <Marker position={destMarker.position} title={destMarker.title} />}
              {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default Demo;
