import React, { useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { CRS } from "leaflet";
import './App.css';
import EventComponent from "./components/EventComponent";
import MapElements from "./components/Markers/MapElements"

function App() {

  //Change this to match the highest number tile you generated
  const ZOOM_LEVELS = 5;
  //Change this to the zoom level you wish to start on
  const STARTING_ZOOM = 2;
  //Change this to the focal point of your map
  const CENTER_POINT = [-100, 125];
  const [currentZoom, setZoomLevel] = useState(STARTING_ZOOM);
  const updateZoom = (newZoomLevel) => setZoomLevel(newZoomLevel);

  const [coords, setCoords] = useState([0, 0]);
  const updateCoords = (coords) => setCoords(coords);

  return (
    <div className="main">
      <MapContainer
        className="main"
        center={CENTER_POINT}
        zoom={currentZoom}
        scrollWheelZoom={true}
        style={{ height: window.innerHeight, width: window.innerWidth }}
        crs={CRS.Simple}
        maxZoom={ZOOM_LEVELS}
        attributionControl={false}
      >
        <MapElements zoom={currentZoom} coords={coords} />
       <EventComponent updateZoom={updateZoom} updateCoords={updateCoords} />
      </MapContainer>
    </div>
  )
}

export default App;
