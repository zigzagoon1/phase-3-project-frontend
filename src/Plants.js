import React from "react";
import Plant from "./Plant";
import PlantForm from "./PlantForm";
import { useState } from "react";
//my plants area- show plants owned by user and more details about each plant


function Plants({plants, editPlant}) {
    const [form, setForm] = useState(<div className="row text-center">
    <PlantForm addNewPlant={handleEditPlant}/>
    </div>)
    const [showForm, setShowForm] = useState(false);

    function handleShowForm(plant) {
        setForm(<div className="row text-center">
            <PlantForm editOrAddPlant={handleEditPlant} plant={plant}/>
        </div>)
        setShowForm(true);
    }
    function handleEditPlant(plant) {
        editPlant(plant);
    }

    const plantElements = plants.map((plant) => {
        return <Plant key={plant.id} plant={plant} onShowForm={handleShowForm} />
    })

    return (
        <div className="container">
            {showForm ? form : plantElements}
        </div>
    )
}

export default Plants;