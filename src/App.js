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
    fetch('http://localhost:9292/areas')
    .then(r => r.json())
    .then((areas) => {
      setGardenAreas(areas);
    })
  }, [])

  function handleAddPlant(newPlant) {
      fetch('http://localhost:9292/plants', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlant)
      })
      .then(res => res.json())
      .then((newPlant) => 
        {
        const newPlants = [...plants, newPlant];
        setPlants(newPlants);
        })
  }

  function handleEditPlant(plant) {
    console.log(plant);
    fetch(`http://localhost:9292/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plant)
    })
    .then(res => res.json())
    .then((plant) => {
      console.log(plant)
    })
  }

  function handleDeletePlant(plant) {
    fetch(`http://localhost:9292/plants/${plant.id}`, {
      method: "DELETE"
    })
    .then(() => {
      const filteredPlants = plants.filter(x => x.id !== plant.id);
      setPlants(filteredPlants);
  })


  }

  return (
    <React.Fragment>
      <Home/>
      <Routes>
        <Route path="/" element={<MyGarden areas={areas} plants={plants}/>} />
        <Route path="/areas" element={<GardenAreas areas={areas} addNewPlant={handleAddPlant} 
        editPlant={handleEditPlant} deletePlant={handleDeletePlant}/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
