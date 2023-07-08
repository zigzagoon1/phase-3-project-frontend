import React from "react";
import AreaPlant from "./AreaPlant";
import AreaEmpty from "./AreaEmpty";
import { useState, useEffect } from "react";
//single garden area, contains info on
//size (width, length, height),
//location 
function GardenArea({plants, id, number_of_plants}) {

    const plantElements = plants.map((plant) => {
        return <AreaPlant key={plant.id} plant={plant} location_in_area={plant.location_in_area}/>;
    })

    let totalEmptySpaces = Array.apply(null, Array(number_of_plants - plants.length)).map(function() {});
    let i = 0;
    let j = number_of_plants - plants.length;

    const emptyPlantElements = totalEmptySpaces.map((empty, index) => {
        if (i >= 5) {
            i = 0;
        }
        else if (i < 5) {
        i++;

        }
        j++;
        if (j === 0) {
            j++;
        }
        return <AreaEmpty key={index} location_in_area={plants.length + i} garden_id={id} />

    })
    const anyEmpty = plants.length !== number_of_plants ? emptyPlantElements : null;

    
    // const empties = []
    // for (let i = plants.length + 1, p = 0, e = 20 - plants.length; i < totalEmptySpaces; i++, p++) {
    //     if (p >= 5) {
    //     p = 0;
    // }
    //     empties.push(<AreaEmpty key={i} location_in_area={p} garden_area={i}/>)
    //     console.log(empties.length)
    // }
    




    return (
        <div className="col-4 my-5 mx-1 border border-top border-dark km-shadow">
            <h3>{id}</h3>
            <div className="container-fluid">
                <div className="row justify-content-around">{plantElements} {anyEmpty} </div>
            </div>
        </div>
    )
}

export default GardenArea;