import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from '../location-pin';

import './styles.css';

const Map = ({ location, zoomLevel }) => {

  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY_MAPS_GOOGLE }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Map;
