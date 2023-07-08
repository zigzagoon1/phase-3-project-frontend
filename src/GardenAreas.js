import React from "react";
import GardenArea from "./GardenArea";
import AddPlantForm from "./AddPlantForm";
import { useState } from "react";
//all garden areas, for rendering /areas Route
//contains each garden area organised on screen by location
//
function GardenAreas({areas, plants}) {
    const [totalSlots, setTotalSlots] = useState(`${areas.length} * 5`)
    const [singleGardenArea, setSingleGardenArea] = useState([])
    const [addForm, setAddForm] = useState(false);

    plants.sort((a, b) => a.location_in_area - b.location_in_area);
    
    const areaElements = areas.map((area) => {
       return <GardenArea key={area.id} id={area.id} location={area.location} length={area.length} 
       width={area.width} plants={area.plants} number_of_plants={area.number_of_plants} handleEmptyClick={handleEmptyAreaClick}/>
    })
    function handleEmptyAreaClick(garden_id, slot_location_in_area) {
        const singleGarden = areas.filter(garden => garden.id === garden_id);
        const singleGardenElement = singleGarden.map((area) => {
            return <div>
                <GardenArea 
                key={area.id} id={area.id} location={area.location} length={area.length} 
                width={area.width} plants={area.plants} number_of_plants={area.number_of_plants} />
                <AddPlantForm />
            </div>
        })
        setAddForm(true);
        setSingleGardenArea(singleGardenElement);
    }
    return (
        <div className="container">
            <div className="border border-dark-subtle row justify-content-evenly shadow">
            {!addForm ? areaElements : singleGardenArea}
            </div>
        </div>
    )
}

export default GardenAreas;