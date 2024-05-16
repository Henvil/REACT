import React, { useState } from 'react';
import useCurrentLocation from './useCurrentLocation';

const CurrentLocation = () => {
  const { location, error, getCurrentLocation } = useCurrentLocation();
  const [showLocation, setShowLocation] = useState(false);

  const handleClick = () => {
    setShowLocation(true);
    getCurrentLocation();
  };

  return (
    <div>
      <button onClick={handleClick}>Geolocalizza</button>
      {error && (
        <p>
          Errore: {error}
          <p>
            Assicurarsi di aver concesso l'autorizzazione tramite il popup del
            browser.
          </p>
        </p>
      )}
      {showLocation && location && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
    </div>
  );
};

export default CurrentLocation;
