import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import StarRating from './StarRating';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StarRating */}
    {/*   maxRating={'five'} */}
    {/*   messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']} */}
    {/*   defaultRating={3} */}
    {/* /> */}
    <App />
  </React.StrictMode>
);

