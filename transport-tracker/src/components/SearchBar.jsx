// src/components/SearchBar.jsx
import { useState } from 'react';

const SearchBar = ({ onSearch, stops }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (from && to) {
      onSearch(from, to);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <div className="search-group">
          <label>From:</label>
          <select 
            value={from} 
            onChange={(e) => setFrom(e.target.value)}
            required
          >
            <option value="">Select your location</option>
            {Object.keys(stops).map(stop => (
              <option key={`from-${stop}`} value={stop}>{stop}</option>
            ))}
          </select>
        </div>

        <div className="search-group">
          <label>To:</label>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          >
            <option value="">Select destination</option>
            {Object.keys(stops).map(stop => (
              <option key={`to-${stop}`} value={stop}>{stop}</option>
            ))}
          </select>
        </div>

        <button type="submit">Find Route</button>
      </form>
    </div>
  );
};

export default SearchBar;