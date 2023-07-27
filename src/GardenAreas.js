import React from "react";
import GardenArea from "./GardenArea";
import PlantForm from "./PlantForm";
import { useState } from "react";
import {Button} from 'react-bootstrap'
//all garden areas, for rendering /areas Route
//contains each garden area organised on screen by location
//
function GardenAreas({areas, addNewPlant, editPlant, deletePlant}) {
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState(<div className="row text-center"> <PlantForm addPlant={handleAddNewPlant} showDelete={false} /> </div>)
    function onShowForm(showDelete, plant, garden_id) {
        if (showDelete) {
            setForm(<div className="row text-center">
                <PlantForm showDelete={showDelete} editPlant={onEditPlant} 
                deletePlant={handleDelete} plant={plant}/>
            </div>)
        }
        else if (plant > 0 && plant < 6) {
            setForm(<div className="row text-center">
                <PlantForm addPlant={handleAddNewPlant} showDelete={false} 
                location_id={plant} garden_id={garden_id}/>
            </div>)
        }
        setShowForm(true);
    }
    
    function handleDelete(plant) {
        deletePlant(plant)
        setShowForm(false);
    }
    function onEditPlant(plant) {
        editPlant(plant)
        setShowForm(false);
    }
    const areaElements = areas.map((area) => {
       return <GardenArea key={area.id} id={area.id} location={area.location} length={area.length} 
       width={area.width} plants={area.plants} number_of_plants={area.number_of_plants} showForm={onShowForm}/>
    })
    function handleAddNewPlant(plant) {
        addNewPlant(plant);
        setShowForm(false)
    }

    return (
        <div className="container text-center">
            <div className="border border-dark-subtle row justify-content-evenly shadow">
            {!showForm ? areaElements : form}
            </div>
        </div>
    )
}

export default GardenAreas;