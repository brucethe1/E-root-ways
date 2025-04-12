import axios from 'axios';

// Must have this export
export const fetchLiveBuses = async () => {
  const response = await axios.get('https://api.kigalitransport.gov.rw/v1/buses/live');
  return response.data;
};

// Other exports...
export const fetchRoutes = async (from, to) => { /*...*/ };