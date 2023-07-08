import React from "react";
import GardenArea from "./GardenArea";
import AddPlantForm from "./AddPlantForm";
import { useState } from "react";
import { NavLink } from "react-router-dom";
//all garden areas, for rendering /areas Route
//contains each garden area organised on screen by location
//
function GardenAreas({areas, plants}) {
    const [totalSlots, setTotalSlots] = useState(`${areas.length} * 5`)
    const [formObj, setFormObj] = useState([])
    const [addForm, setAddForm] = useState(false);

    plants.sort((a, b) => a.location_in_area - b.location_in_area);
    
    const areaElements = areas.map((area) => {
       return <GardenArea key={area.id} id={area.id} location={area.location} length={area.length} 
       width={area.width} plants={area.plants} number_of_plants={area.number_of_plants}/>
    })
    // function handleEmptyAreaClick(garden_id, slot_location_in_area) {
    //     const singleGarden = areas.filter(garden => garden.id === garden_id);
    //     const singleGardenElement = singleGarden.map((area) => {
    //         return <div className="row text-center">
    //         <AddPlantForm />
    //                 <GardenArea
    //                 key={area.id} id={area.id} location={area.location} length={area.length} 
    //                 width={area.width} plants={area.plants} number_of_plants={area.number_of_plants} />
                    
    //         </div>
    //     })
    //     setAddForm(true);
    //     setSingleGardenArea(singleGardenElement);
    // }
        let form = [0]
        function showForm() {
            const placeholder = [1]
            form = placeholder.map(() => {
                
                return <div className="row text-center">
                    <AddPlantForm />
                </div>
            })
            setAddForm(true);
            setFormObj(form);
        }
    return (
        <div className="container text-center">
            <NavLink className="btn btn-outline-success my-2" to="/add_plant">Add Plant To A Garden Area</NavLink>
            <div className="border border-dark-subtle row justify-content-evenly shadow">
            {!addForm ? areaElements : form}
            </div>
        </div>
    )
}

export default GardenAreas;