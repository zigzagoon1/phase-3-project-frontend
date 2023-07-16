import React from "react";
//plant common name and latin name,
//how many of the plant owned,
//space plant takes up,
//user's areas that contain plant,
//hardiness zones?,
//bloom time?,
//height?
function Plant({plant, onShowForm}) {
    function showForm() {
        onShowForm(plant);
    }
    return (
        <div className="row between py-2">
            <h1 className="col-4">{plant.name}</h1>
            <button className="btn btn-success col-3" onClick={showForm}>Edit Plant</button>
        </div>
    )
}

export default Plant;