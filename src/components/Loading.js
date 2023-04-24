import React from 'react';
import 'styles/Loading.scss'

function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">Loading...</p>
    </div>
  );
}

export default Loading;
