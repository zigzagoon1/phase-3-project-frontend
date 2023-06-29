import React from 'react';
import Home from './Home.js';
import MyGarden from './MyGarden.js';
import Plants from './Plants.js';
import GardenAreas from './GardenAreas.js';
import {Routes, Route } from 'react-router-dom';

//TODO: ability to add features to garden area (post-course)
//TODO: ability to edit shape of garden (post-course)
function App() {
  return (
    <React.Fragment>
      <Home className="container"/>
      <Routes>
        <Route path="/" element={<MyGarden />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/areas" element={<GardenAreas />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
