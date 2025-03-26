import React from 'react';
import { useParams } from 'react-router-dom';

const City = () => {
  const { cityName } = useParams(); // Get the cityName parameter from the URL

  return (
    <div>
      {cityName ? (
        <h1>Welcome to {cityName}</h1> // Display the city name if it exists
      ) : (
        <h1>City Overview</h1> // Default content for /city
      )}
    </div>
  );
};

export default City;