import React from "react";
import GardenArea from "./GardenArea";
import PlantForm from "./PlantForm";
import { useState } from "react";
import {Button} from 'react-bootstrap'
//all garden areas, for rendering /areas Route
//contains each garden area organised on screen by location
//
function GardenAreas({areas, plants, addNewPlant}) {
    const [showForm, setShowForm] = useState(false);

    plants.sort((a, b) => a.location_in_area - b.location_in_area);
    
    const areaElements = areas.map((area) => {
       return <GardenArea key={area.id} id={area.id} location={area.location} length={area.length} 
       width={area.width} plants={area.plants} number_of_plants={area.number_of_plants}/>
    })
    function handleAddNewPlant(plant) {
        addNewPlant(plant);
        setShowForm(false)
    }

    const form = <div className="row text-center">
    <PlantForm addNewPlant={handleAddNewPlant} />
    </div>

    function onFormButtonClick() {
        setShowForm(true);
    }
    return (
        <div className="container text-center">
            <Button className="btn btn-success my-2" onClick={onFormButtonClick}>Add Plant To A Garden Area</Button>
            <div className="border border-dark-subtle row justify-content-evenly shadow">
            {!showForm ? areaElements : form}
            </div>
        </div>
    )
}

export default GardenAreas;