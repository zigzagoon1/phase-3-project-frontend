import React from "react";
import PlantForm from "./PlantForm";
import { Button } from "react-bootstrap";
function Home( {areas}) {
    const numAreas = areas.length;
    let numPlants = 0;
    areas.forEach((area) => {
        numPlants += area.plants.length;
    })

    function addArea() {

    }
    function addPlant() {
        <div className="row text-center">
                <PlantForm addPlant={handleAddNewPlant} showDelete={false} 
                location_id={plant} garden_id={garden_id}/>
            </div>
    }
    return(
        <div className="container text-center">
            <p>Welcome back to your garden! You have {numAreas} garden
            areas made, and a total of {numPlants} plants! 
            Feel free to add more of either using the buttons below.</p>
            <div className="row btn-group">
                <Button className="col-3 btn" onClick={addArea}>Add a new Garden Area</Button> 
                <Button className="col-3 btn btn-success" onClick={addPlant}>Add a new Plant</Button>
            </div>

        </div>
    )
}

export default Home;