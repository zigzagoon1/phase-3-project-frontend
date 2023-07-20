import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import PlantForm from "./PlantForm";
function AreaEmpty({garden_id, location_in_area, showForm}) {

    function showFormOnClick() {
        showForm(false, location_in_area, garden_id);
    }

    let bootstrap = "col-6 border px-auto py-3 text-center btn-danger";
    if (location_in_area === 3) {
        bootstrap = "col-12 border px-auto py-3 text-center btn-danger";
    }
    return (
        <Button className={bootstrap} onClick={showFormOnClick}>
            <p>{location_in_area}</p>
            <p className="col fs-6 m-auto"></p>
        </Button>
    )
}

export default AreaEmpty;