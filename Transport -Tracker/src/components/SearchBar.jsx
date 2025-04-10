import { useState } from "react";

const SearchBar = ({ routes, setFilteredRoutes }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setQuery(searchTerm);

    // Filter transport routes based on search term
    const filtered = routes.filter(route =>
      route.name.toLowerCase().includes(searchTerm)
    );
    setFilteredRoutes(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a route..."
        value={query}
        onChange={handleSearch}
        style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
      />
    </div>
  );
};

export default SearchBar;
