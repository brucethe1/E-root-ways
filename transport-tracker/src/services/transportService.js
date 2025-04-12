// src/services/transportService.js
export const calculateRoute = async (from, to) => {
    // Mock implementation - replace with real API calls
    return [
      {
        id: 1,
        name: "Route 1 (City Center - Kimironko)",
        distance: "8.5 km",
        fare: "500 RWF",
        duration: 25,
        color: "#3b82f6",
        path: [
          [-1.9536, 30.0605], // City Center
          [-1.9526, 30.1049], // Remera
          [-1.9365, 30.1301]  // Kimironko
        ],
        stops: [
          { name: "City Center", time: 0 },
          { name: "Remera", time: 12 },
          { name: "Kimironko Market", time: 25 }
        ],
        busTypes: ["Express", "Regular"]
      },
      {
        id: 2,
        name: "Route 2 (City Center - Nyabugogo)",
        distance: "6.2 km",
        fare: "400 RWF",
        duration: 20,
        color: "#10b981",
        path: [
          [-1.9536, 30.0605], // City Center
          [-1.9686, 30.1244], // Kicukiro
          [-1.9441, 30.0619]  // Nyabugogo
        ],
        stops: [
          { name: "City Center", time: 0 },
          { name: "Kicukiro Center", time: 10 },
          { name: "Nyabugogo Terminal", time: 20 }
        ],
        busTypes: ["Express"]
      }
    ];
  };
  
  export const getFareEstimate = async (routeId) => {
    // Mock implementation
    return {
      standard: 500,
      express: 700,
      discount: 300
    };
  };