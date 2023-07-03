import React from "react";
import GardenArea from "./GardenArea";
//all garden areas, for rendering /areas Route
//contains each garden area organised on screen by location
//
function GardenAreas({areas}) {
    const areaElements = areas.map((area) => {
       return <GardenArea id={area.id} location={area.location} length={area.length} width={area.width}/>
    })
    return (
        <div>
        {areaElements}
        </div>
    )
}

export default GardenAreas;