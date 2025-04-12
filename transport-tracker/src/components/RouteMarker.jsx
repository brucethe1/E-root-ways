function RouteMarker({ stop }) {
    // You would need real coordinates for each stop
    const stopLocations = {
      'D851': [-1.9500, 30.0550],
      // Add all other stops with their real coordinates
    };
    
    const position = stopLocations[stop] || [-1.9536, 30.0605];
  
    return (
      <Marker position={position}>
        <Popup>{stop}</Popup>
      </Marker>
    );
  }