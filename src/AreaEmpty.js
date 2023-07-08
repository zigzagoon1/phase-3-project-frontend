import React from "react";
function AreaEmpty({garden_id, location_in_area, empty_area_clicked}) {
    
    function handleClick() {
        empty_area_clicked(location_in_area);
    }
    let bootstrap = "col-6 border px-auto py-3 text-center";
    if (location_in_area === 3) {
        bootstrap = "col-12 border px-auto py-3 text-center";
    }
    return (
        <div className={bootstrap}>
            <button className="col btn-outline-success btn-lg fs-6" onClick={handleClick}>Add</button>
        </div>
    )
}

export default AreaEmpty;