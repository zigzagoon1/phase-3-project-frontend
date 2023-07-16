import React from "react";
import Plant from "./Plant";
import PlantForm from "./PlantForm";
import { useState } from "react";
//my plants area- show plants owned by user and more details about each plant


function Plants({plants}) {
    const [form, setForm] = useState(<div className="row text-center">
    <PlantForm addNewPlant={handleEditPlant}/>
    </div>)
    const [showForm, setShowForm] = useState(false);

    function handleShowForm(plant) {
        setForm(<div className="row text-center">
            <PlantForm editPlant={handleEditPlant} plant={plant}/>
        </div>)
        setShowForm(true);
    }
    function handleEditPlant() {

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