import React from 'react';
import GoogleMapReact from 'google-map-react';

import './styles.css';

const Map = ({ location, zoomLevel }) => {

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
    position: { lat: location.lat, lng: location.lng },
    map,
    title: 'Hello World!'
    });
    return marker;
  };
  return (

    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY_MAPS_GOOGLE }}
          center={location}
          defaultZoom={zoomLevel}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        >
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Map;
