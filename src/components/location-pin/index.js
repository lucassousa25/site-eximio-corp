import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';

const LocationPin = ({ text }) => {
  return (
    <div>
      <Icon icon={locationIcon} />
      <p>{text}</p>
    </div>
  )
}

export default LocationPin;