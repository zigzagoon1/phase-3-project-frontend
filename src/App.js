import React from 'react';
import Header from './Header.js';
import Home from './Home.js';
import GardenAreas from './GardenAreas.js';
import {Routes, Route } from 'react-router-dom';
import {useState, useEffect} from 'react';

//TODO: ability to add features to garden area (post-course)
//TODO: ability to edit shape of garden (post-course)
function App() {
  const [areas, setGardenAreas] = useState([]);

  useEffect(() => {
    fetchAreas();
  }, [])

  function fetchAreas() {
    fetch('http://localhost:9292/areas')
    .then(r => r.json())
    .then((areas) => {
      setGardenAreas(areas);
    })
  }

  function handleAddPlant(newPlant) {
      fetch('http://localhost:9292/plants', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlant)
      })
      .then(res => res.json())
      .then(() => {
        fetchAreas();
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
    .then(() => {
      fetchAreas()
    })
  }

  function handleDeletePlant(plant) {
    fetch(`http://localhost:9292/plants/${plant.id}`, {
      method: "DELETE"
    })
    .then(() => {
    fetchAreas();
  })
  }

  function handleAddArea(area){

  }

  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/" element={<Home areas={areas} addNewPlant={handleAddPlant} addNewArea={handleAddArea}/>} />
        <Route path="/areas" element={<GardenAreas areas={areas} addNewPlant={handleAddPlant} 
        editPlant={handleEditPlant} deletePlant={handleDeletePlant}/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
