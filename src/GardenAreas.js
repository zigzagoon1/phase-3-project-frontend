import React from "react";
import GardenArea from "./GardenArea";
import AddPlantForm from "./AddPlantForm";
import { useState } from "react";
import {Button} from 'react-bootstrap'
//all garden areas, for rendering /areas Route
//contains each garden area organised on screen by location
//
function GardenAreas({areas, plants, addNewPlant}) {
    const [addForm, setAddForm] = useState(false);

    plants.sort((a, b) => a.location_in_area - b.location_in_area);
    
    const areaElements = areas.map((area) => {
       return <GardenArea key={area.id} id={area.id} location={area.location} length={area.length} 
       width={area.width} plants={area.plants} number_of_plants={area.number_of_plants}/>
    })
    function handleAddNewPlant(plant) {
        addNewPlant(plant);
    }
        const form = <div className="row text-center">
        <AddPlantForm addNewPlant={handleAddNewPlant}/>
    </div>
        function showForm() {
            setAddForm(true);
        }
    return (
        <div className="container text-center">
            <Button className="btn btn-success my-2" onClick={showForm}>Add Plant To A Garden Area</Button>
            <div className="border border-dark-subtle row justify-content-evenly shadow">
            {!addForm ? areaElements : form}
            </div>
        </div>
    )
}

export default GardenAreas;