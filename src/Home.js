import React from "react";
import PlantForm from "./PlantForm";
import AddGardenAreaForm from "./AddGardenAreaForm";
import { Button } from "react-bootstrap";
import { useState, useEffect, useRef} from "react";
function Home( {areas, addNewPlant, addNewArea}) {
    const [showHome, setShowHome] = useState(true);
    const [showPlantForm, setShowPlantForm] = useState(false);
    const [showAreaForm, setShowAreaForm] = useState(false);
    let plantForm = <div id="plant" className="row text-center">
    <PlantForm addPlant={handleAddNewPlant} showDelete={false} />
    </div>
    let areaForm = <div id="area" className="row text-center">
        <AddGardenAreaForm onAddArea={addArea}/>
    </div>

    let homeElement = useRef(null);
    let areaElement = useRef(null);
    let plantElement = useRef(null);

    useEffect(() => {
        homeElement.current = document.querySelector('#homepage');
        areaElement.current = document.querySelector('#area');
        plantElement.current = document.querySelector('#plant');

    }, [])

    const numAreas = areas.length;
    let numPlants = 0;
    areas.forEach((area) => {
        numPlants += area.plants.length;
    })
    function addAreaButton() {
        setShowAreaForm(true);
        setShowHome(false);
    }
    function addPlantButton() {
        setShowPlantForm(true);
        setShowHome(false);
    }
    function handleAddNewPlant(plant) {
        addNewPlant(plant);
        setShowPlantForm(false);
        setShowHome(true);
    }
    function addArea(area) {
        addNewArea(area);
        setShowAreaForm(false);
        setShowHome(true);
    }
    return(
    <div className="container">
        {showHome ?         <div id="homepage">
             <div className="container text-center">
                <p>Welcome back to your garden! You have {numAreas} garden
                areas made, and a total of {numPlants} plants! 
                Feel free to add more of either using the buttons below.</p>
        <div className="row btn-group">
            <Button className="col-3 btn" onClick={addAreaButton}>Add a new Garden Area</Button> 
            <Button className="col-3 btn btn-success" onClick={addPlantButton}>Add a new Plant</Button>
        </div>
            </div>
        </div> : <div></div>}

        <div id="plant_form">  
            {showPlantForm ? plantForm : <div></div>}
            {showAreaForm ? areaForm : <div></div>}
        </div>
    </div>
    )
}

export default Home;