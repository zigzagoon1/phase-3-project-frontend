import React from "react";
//single garden area, contains info on
//size (width, length, height),
//location 
function GardenArea({id, location, length, width }) {
    return (
        <div>
            <h1>{location}</h1>
        </div>
    )
}

export default GardenArea;