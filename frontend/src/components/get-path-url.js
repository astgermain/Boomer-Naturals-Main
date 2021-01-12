import React from 'react';

const GetPathURL = () => {
  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
    url
  );
};

export default GetPathURL;