import React from 'react';

const ErrorFallback = (error) => {
  return (
    <div>
      <p>Ups, algo salió mal.</p>
      <pre>{error.message}</pre>      
    </div>
  );
};

export default ErrorFallback;