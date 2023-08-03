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
      .then((plant) => {
        const updatedAreas = areas.map((area) => {
          if (area.id === plant.garden_area_id) {
            return {...area, plants: [...area.plants, plant]}
          }
          else {
            return area;
          }
        })
        setGardenAreas(updatedAreas)
      })

  }

  function handleEditPlant(plant) {
    fetch(`http://localhost:9292/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plant)
    })
    .then(res => res.json())
    .then((p) => {
      console.log(p)
      const updatedAreas = areas.map((area) => {
        if (area.id === p.garden_area_id) {
          const updatedPlants = area.plants.map((plant) => {
            if (plant.id === p.id) {
              return p;
            }
            else {
              return plant;
            }
          })
          area.plants = updatedPlants;
          return area;
        }
        else {
          return area;
        }
      })
      setGardenAreas(updatedAreas);
    })
  }

  function handleDeletePlant(plant) {
    fetch(`http://localhost:9292/plants/${plant.id}`, {
      method: "DELETE"
    })
    .then(() => {
      console.log(plant);
      const updatedAreas = areas.map((area) => {
        if (area.id === plant.garden_area_id) {
          area.plants = area.plants.filter(x => x.id !== plant.id);
          console.log(area.plants);
          return area;
        }
        else {
          return area;
        }
      })
      setGardenAreas(updatedAreas);
  })
  }

  function handleAddArea(area){
    fetch('http://localhost:9292/areas', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(area) 
    })
    .then(r => r.json())
    .then((a) => {
      const updatedAreas = [...areas, a];
      console.log(updatedAreas);
      setGardenAreas(updatedAreas);
    })
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
