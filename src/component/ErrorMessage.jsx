import React from 'react';

const ErrorMessage = ({ error, ...props }) => {
  return <div className="self-start text-red-500">{error}</div>;
};

export default ErrorMessage;