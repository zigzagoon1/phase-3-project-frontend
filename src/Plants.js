import React from "react";
import Plant from "./Plant";
//my plants area- show plants owned by user and more details about each plant


function Plants({plants}) {

    
    const plantElements = plants.map((plant) => {
        return <Plant key={plant.id} name={plant.name} latin_name={plant.latin_name} height={plant.height} width={plant.width}
        hardiness_zones={plant.hardiness_zones} garden_location={plant.location} description={plant.description} />
    })
    
    return (
        <div>
            {plantElements}
        </div>
    )
}

export default Plants;