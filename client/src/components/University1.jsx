import React from 'react';
import '../css/Home.css';

const University1 = () => {
  return (
    <div className="card">
      <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" className="card-img" alt="University 1" />
      <div className="card-body">
        <h5 className="card-title">University 1</h5>
        <p className="card-text">Description of University 1</p>
        <button className="card-button">Learn More</button>
      </div>
    </div>
  );
};

export default University1; 