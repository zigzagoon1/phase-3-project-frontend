import React from "react";
import { useState } from "react";
function AreaPlant({name, plant, location_in_area}) {
    //const [area_location, setAreaLocation] = useState(location_in_area);
    let bootstrap = "col-6 border px-auto py-2";
    if (location_in_area === 3) {
        bootstrap = "col-12 border px-auto py-2";
    }
    return (
        <div className={bootstrap}>
            <p className="text-center m-auto">{plant.location_in_area}</p>
            <p className="text-center m-auto">{plant.name}</p>
        </div>
    )
}

export default AreaPlant;