# E-root-ways
# Transport Tracker - Public Transport Schedule & Routes Finder

## Description
**Transport Tracker** is a real-time public transport scheduling and route-finding application designed to help users track buses, routes, and schedules within Kigali, Rwanda. The app provides features like real-time route updates, transport status, favorite routes, and location-based search.

The app allows users to:
- View transport routes.
- Check bus schedules and statuses.
- Track transport vehicles on an interactive map.
- Save favorite routes for easy access.

## Technologies Used
This project was built using the following technologies:
- **Frontend**: React, React Router, Tailwind CSS, Leaflet.js (for map integration), Zustand (for state management)
- **Backend**: (Mention if there is a backend or external APIs used)
- **Map Integration**: OpenStreetMap (via Leaflet.js)
- **State Management**: Zustand for state handling
- **Additional Tools**: Axios for API calls, Git for version control

## Features
- **Real-Time Route Finder**: Allows users to search for transport routes and see real-time data.
- **Map Integration**: Displays transport routes and locations on an interactive map.
- **Favorites**: Users can save their favorite routes for quick access.
- **Search**: Users can search for specific routes or bus schedules.

## Installation

### Prerequisites
To run this project locally, you'll need:
- **Node.js** and **npm** (Node Package Manager) installed on your machine.

### Steps
1. Clone this repository:
    ```bash
    git clone https://github.com/yourusername/transport-tracker.git
    cd transport-tracker
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm start
    ```

4. Open your browser and go to `http://localhost:3000` to view the app.

## How to Use

### Home Page
- On the **Home** page, you can view available routes, transport statuses, and access the search feature.

### Map View
- The **Map** component shows real-time transport vehicles on an interactive map. Zoom in to see more details.

### Favorite Routes
- You can add routes to your **Favorites** to easily track them.

### Search Functionality
- Use the **Search Bar** to quickly find specific routes and bus schedules.

## Challenges Faced
- **Challenge 1**: Integrating real-time map tracking with Leaflet.js.
  - **Solution**: Implemented marker updates on the map every few seconds to simulate real-time bus tracking.

- **Challenge 2**: Fetching real-time transport data from the API and handling state updates.
  - **Solution**: Used React hooks and Zustand for state management to efficiently manage data fetching and updates.

## Future Improvements
- **Add User Authentication**: Allow users to sign up, log in, and save their favorites across sessions.
- **Add More Cities**: Expand the transport tracker to other cities beyond Kigali.
- **Improved UI**: Work on enhancing the visual design and responsiveness of the app.
- **Offline Mode**: Implement caching for offline use of certain features, like viewing favorite routes.

## Contributing
If you'd like to contribute to this project, feel free to open an issue or submit a pull request. Make sure to follow the coding conventions and write tests for new features.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Links
- [GitHub Repository](https://github.com/E-root-ways/transport-tracker)

