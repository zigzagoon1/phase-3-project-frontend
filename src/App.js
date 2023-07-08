import React from 'react';
import Home from './Home.js';
import MyGarden from './MyGarden.js';
import Plants from './Plants.js';
import GardenAreas from './GardenAreas.js';
import {Routes, Route } from 'react-router-dom';
import {useState, useEffect} from 'react';
import AddPlantForm from './AddPlantForm.js';

//TODO: ability to add features to garden area (post-course)
//TODO: ability to edit shape of garden (post-course)
function App() {
  const [areas, setGardenAreas] = useState([]);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/areas')
    .then(r => r.json())
    .then((areas) => {
      console.log(areas);
      setGardenAreas(areas);
    })
  }, [])
//Switch below useEffect to providing plant details with area details 
  useEffect(() => {
    fetch('http://localhost:9292/plants')
    .then(r => r.json())
    .then((plants) => {
      setPlants(plants);
    })
  }, [])
  return (
    <React.Fragment>
      <Home/>
      <Routes>
        <Route path="/" element={<MyGarden areas={areas} plants={plants}/>} />
        <Route path="/plants" element={<Plants plants={plants}/>} />
        <Route path="/areas" element={<GardenAreas areas={areas} plants={plants}/>} />
        <Route path="/add_plant" element={<AddPlantForm areas={areas}/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
