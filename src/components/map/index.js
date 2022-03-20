import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from '../location-pin';

const Map = ({ location, zoomLevel }) => {

  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDN8CIWJBioVTRonRKnqEXO6_oMnPph-54' }}
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
