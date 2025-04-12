import React from 'react';

// Change from named export to default export
const RouteList = ({ routes }) => {
  return (
    <div className="route-list">
      {routes.length === 0 ? (
        <p>No routes found. Try different locations.</p>
      ) : (
        routes.map(route => (
          <div key={route.id} className="route-card">
            <h3>Route {route.number}</h3>
            <p>From: {route.origin}</p>
            <p>To: {route.destination}</p>
            <p>Duration: {route.duration} mins</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RouteList;  // Add this line