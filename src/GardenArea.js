import React from "react";
import AreaPlant from "./AreaPlant";
import AreaEmpty from "./AreaEmpty";
//single garden area, contains info on
//size (width, length, height),
//location 
function GardenArea({plants, id, number_of_plants, showForm}) {

    function onShowForm(showDeleteOrNot, plant, garden_id) {
        showForm(showDeleteOrNot, plant, garden_id);
    }
    let totalSpaces = Array.apply(null, Array(number_of_plants)).map(function() {});
    let i = -1;
    plants = plants.sort((a, b) => a.location_in_area <= b.location_in_area ? -1 : 1);
    const areaElements = totalSpaces.map(() => {
        i++;
        const locations = [];
        for (let j = 0; j < plants.length; j++) {
            locations.push(plants[j].location_in_area);
        }
        if (!locations.find(x => x === i + 1)) {
            return <AreaEmpty key={i} location_in_area={i + 1} garden_id={id} showForm={onShowForm} />
        }
        if (plants.length > 0 && plants[i] !== undefined) {
            if (plants[i].location_in_area <= number_of_plants) {
                return <AreaPlant key={plants[i].id} plant={plants[i]} showForm={onShowForm}/>;
            }
        }
        return <AreaEmpty key={i} location_in_area={i + 1} garden_id={id} showForm={onShowForm} />
    })
    
    return (
        <div className="col-4 my-5 mx-1 border border-top border-dark km-shadow">
            <h3>{id}</h3>
            <div className="container-fluid">
                <div className="row justify-content-around"> {areaElements} </div>
            </div>
        </div>
    )
}

export default GardenArea;