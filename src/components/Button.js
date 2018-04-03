import React from 'react';

const Button = ({ label, handleClick }) => {
  return (
    <input
      className="button btn-lg btn-light"
      onClick={handleClick}
      type="button"
      value={label}
    />
  );
};

export default Button;
