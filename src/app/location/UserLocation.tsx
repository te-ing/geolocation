'use client';
import S from './page.module.scss';

import React, { useState } from 'react';

export const UserLocation = () => {
  const [location, setLocation] = useState('');
  const getMyLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation(`위도: ${latitude} 경도: ${longitude}`);
    });
  };

  return (
    <div className={S.location}>
      <button
        onClick={getMyLocation}
        style={{
          cursor: 'pointer',
          border: '1px solid purple',
          borderRadius: 20,
          padding: '10px',
          marginBottom: '20px',
        }}
      >
        Where Am I? 🤔
      </button>
      <div>location: {location}</div>
    </div>
  );
};
