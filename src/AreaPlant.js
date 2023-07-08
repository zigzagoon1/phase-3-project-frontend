import React from "react";
import { useState } from "react";
function AreaPlant({name, plant, location_in_area}) {
    //const [area_location, setAreaLocation] = useState(location_in_area);
    let bootstrap = "col-6 border px-auto py-4";
    if (location_in_area === 3) {
        bootstrap = "col-12 border px-auto py-4";
    }
    return (
        <div className={bootstrap}>
            
            <p className="text-center">{plant.name}</p>
        </div>
    )
}

export default AreaPlant;