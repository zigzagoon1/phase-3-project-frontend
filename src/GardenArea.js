import React from "react";
//single garden area, contains info on
//size (width, length, height),
//location 
function GardenArea({id, location, length, width }) {
    function mouseHover() {

    }
    return (
        <div id={location} className="col-4 my-5 mx-1 border border-top py-5 border-dark km-shadow">
            <div>

            </div>
        </div>
    )
}

export default GardenArea;