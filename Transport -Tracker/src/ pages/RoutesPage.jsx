import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MapView from "../components/MapView";

const dummyRoutes = [
  { id: 1, name: "Route 101 - Downtown Express" },
  { id: 2, name: "Route 202 - City Center" },
  { id: 3, name: "Route 303 - Suburban Link" }
];

const RoutesPage = () => {
  const [filteredRoutes, setFilteredRoutes] = useState(dummyRoutes);

  return (
    <div>
      <h1>Available Transport Routes</h1>
      <SearchBar routes={dummyRoutes} setFilteredRoutes={setFilteredRoutes} />
      
      <ul>
        {filteredRoutes.map(route => (
          <li key={route.id}>{route.name}</li>
        ))}
      </ul>

      <h2>Route Map</h2>
      <MapView />
    </div>
  );
};

export default RoutesPage;
