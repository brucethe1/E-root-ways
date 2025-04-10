import { Link } from 'react-router-dom';  
import './HomePage.css'; 
import Sidebar from '../components/Sidebar'; 

const HomePage = () => {
  return (
    <div
      style={{
        padding: '20px',
        textAlign: 'center',
        
        background: 'linear-gradient(to right, #3932EE, #231BD4)',  // Gradient background
        height: '100vh',  // Full screen height
        color: '#fff',  // White text for contrast
      }}
    >
      <h1 className="fade-up"><strong>Welcome to Kigali Transport Tracker</strong></h1>
      <p className="fade-up"><h3>Find and track public transport routes in real-time across Kigali, Rwanda.</h3></p>

      <div style={{ marginTop: '30px' }}>
        
        <Link
          to="/routes"
          style={{
            backgroundColor: '#007BFF',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
            fontSize: '18px',
            marginRight: '15px',
          }}
        >
          Explore Routes
        </Link>
        <Link
          to="/favorites"
          style={{
            backgroundColor: '#28a745',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
            fontSize: '18px',
          }}
        >
          View Favorites
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
