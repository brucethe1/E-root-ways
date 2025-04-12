import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchRoutes } from '../api/transport'; // Correct import
import RouteList from '../components/RouteList';

const SearchResults = () => {
  const [routes, setRoutes] = useState([]);
  const location = useLocation();
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const from = params.get('from');
    const to = params.get('to');
    
    const loadRoutes = async () => {
      const data = await fetchRoutes(from, to);
      setRoutes(data.routes || []);
    };
    
    loadRoutes();
  }, [location]);

  return <RouteList routes={routes} />;
};

export default SearchResults;