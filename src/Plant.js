import React from "react";
//plant common name and latin name,
//how many of the plant owned,
//space plant takes up,
//user's areas that contain plant,
//hardiness zones?,
//bloom time?,
//height?
function Plant({name, latin_name, height, width, hardiness_zones, garden_location, description}) {
    
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default Plant;