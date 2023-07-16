import React from "react";
function AreaPlant({plant}) {
    let bootstrap = "col-6 border px-auto py-2";
    if (plant.location_in_area === 3) {
        bootstrap = "col-12 border px-auto py-3";
    }
    return (
        <div className={bootstrap}>
            <p className="text-center m-auto">{plant.location_in_area}</p>
            <p className="text-center m-auto">{plant.name}</p>
        </div>
    )
}

export default AreaPlant;