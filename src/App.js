import React from 'react';
import Home from './Home.js';
import MyGarden from './MyGarden.js';
import Plants from './Plants.js';
import GardenAreas from './GardenAreas.js';
import {Routes, Route } from 'react-router-dom';
import {useState, useEffect} from 'react';

//TODO: ability to add features to garden area (post-course)
//TODO: ability to edit shape of garden (post-course)
function App() {
  const [areas, setGardenAreas] = useState([]);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/areas')
    .then(r => r.json())
    .then((areas) => {
      setGardenAreas(areas);
    })
  })

  useEffect(() => {
    fetch('http://localhost:3000/plants')
    .then(r => r.json())
    .then((plants) => {
      setPlants(plants);
    })
  })
  return (
    <React.Fragment>
      <Home className="container"/>
      <Routes>
        <Route path="/" element={<MyGarden areas={areas} plants={plants}/>} />
        <Route path="/plants" element={<Plants plants={plants}/>} />
        <Route path="/areas" element={<GardenAreas areas={areas}/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
