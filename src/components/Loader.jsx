import React from 'react';
 import './Loader.css'; // Uncomment this if you want to add custom styles

const Loader = () => {
  return (
    <div className="loader-container">
      {/* Use the correct path for public assets */}
      <img src="/assets/loader.gif" alt="Loading..." className="loader-gif" />
    </div>
  );
};

export default Loader;
