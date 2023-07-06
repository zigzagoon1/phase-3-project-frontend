import React from "react";
import GardenArea from "./GardenArea";
//all garden areas, for rendering /areas Route
//contains each garden area organised on screen by location
//
function GardenAreas({areas, plants}) {
    const areaElements = areas.map((area) => {
       return <GardenArea key={area.id} location={area.location} length={area.length} width={area.width}/>
    })
    return (
        <div className="container">
            <div className="border border-dark-subtle row justify-content-evenly shadow">
            {areaElements}
            </div>
        </div>
    )
}

export default GardenAreas;