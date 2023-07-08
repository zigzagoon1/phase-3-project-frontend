import React from "react";
function AreaEmpty({garden_id, location_in_area}) {
    
    let bootstrap = "col-6 border px-auto py-3 text-center";
    if (location_in_area === 3) {
        bootstrap = "col-12 border px-auto py-3 text-center";
    }
    return (
        <div className={bootstrap}>
            <p>{location_in_area}</p>
            <p className="col fs-6 m-auto"></p>
        </div>
    )
}

export default AreaEmpty;