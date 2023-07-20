import React from "react";
import { Button } from "react-bootstrap";
function AreaPlant({plant, showForm}) {

    function showFormOnClick() {
        showForm(true, plant);
    }

    let bootstrap = "col-6 border px-auto py-2 btn-success";
    if (plant.location_in_area === 3) {
        bootstrap = "col-12 border px-auto py-3 btn-success";
    }
    return (
        <Button className={bootstrap} onClick={showFormOnClick}>
            <p className="text-center m-auto">{plant.location_in_area}</p>
            <p className="text-center m-auto">{plant.name}</p>
        </Button>
    )
}

export default AreaPlant;