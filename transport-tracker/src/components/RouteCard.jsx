// src/components/RouteCard.jsx
import { useState } from 'react';

const RouteCard = ({ route, isSelected, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`route-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className="route-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h3>{route.name}</h3>
        <span className="route-meta">
          {route.distance} • {route.fare} • {route.duration} min
        </span>
        <span className="toggle-icon">
          {isExpanded ? '▲' : '▼'}
        </span>
      </div>
      
      {isExpanded && (
        <div className="route-details">
          <div className="stops-list">
            <h4>Stops:</h4>
            <ul>
              {route.stops.map((stop, index) => (
                <li key={index}>
                  <span className="stop-number">{index + 1}</span>
                  <span className="stop-name">{stop.name}</span>
                  {stop.time && (
                    <span className="stop-time">{stop.time} min</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="bus-types">
            <h4>Available Buses:</h4>
            <div className="bus-tags">
              {route.busTypes.map((type, index) => (
                <span key={index} className="bus-tag">{type}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RouteCard;