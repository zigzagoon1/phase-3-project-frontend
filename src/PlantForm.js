import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import AlertMessage from "./AlertMessage";


function PlantForm( {addPlant, editPlant, plant, showDelete, deletePlant, location_id, garden_id} ) {
    const location = location_id ? location_id : "";
    const garden = garden_id ? garden_id : "";
    const defaultValues = !plant ? {
        garden_area_id: garden,
        name: "",
        location_in_area: location,
        latin_name: "",
        height: "",
        width: "",
        hardiness_zones: "",
        description: ""
    } : {
        garden_area_id: plant.garden_area_id ? plant.garden_area_id : "",
        name: plant.name ? plant.name : "",
        location_in_area: plant.location_in_area ? plant.location_in_area : "",
        latin_name: plant.latin_name ? plant.latin_name : "",
        height: plant.height ? plant.height : "",
        width: plant.width ? plant.width : "",
        hardiness_zones: plant.hardiness_zones ? plant.hardiness_zones : "",
        description: plant.description ? plant.description : "",
        id: plant.id
    };

    const [values, setValues] = useState(defaultValues);
    const [showAlert, setShowAlert] = useState(false);

    let btn =  showDelete ? 
    <Button className="col-2 m-2 mx-4 p-1 btn btn-danger" onClick={handleDeletePlant}>Delete Plant</Button>
    : <div></div>
    let message;

    function handleSubmit(e) {
        e.preventDefault();
        const newPlant = {garden_area_id: values.garden_area_id, name: values.name, location_in_area: values.location_in_area,
            latin_name: values.latin_name, height: values.height, width: values.width, 
            hardiness_zones: values.hardiness_zones, description: values.description, id: values.id};
        if (newPlant.garden_area_id === "" || newPlant.name === "" || newPlant.location_in_area === "") {
            message = "Please enter a plant name, garden area identifier, and location identifier within the garden area before submitting the form. The first three sections must have a value in order to add a plant."
            setShowAlert(true);
            return;
        }
        if (plant) {
            editPlant(newPlant)
        }
        else {
            addPlant(newPlant);
        }
    }
    function handleHideModal() {
        if (showAlert) {
            setShowAlert(false);
        }
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setValues({...values, [name]: value,
        });
    }

    function handleDeletePlant() {
        if (plant !== null && plant !== undefined ) {

        deletePlant(plant);
        }
        else {
            message = "No plant selected. Please return to the plants page and select a plant to delete."
            setShowAlert(true);
        }
    }


return (
    <div onClick={handleHideModal} className="col" >
        <form onSubmit={handleSubmit} className="border shadow-sm">
            <h1 className="text-center">Plant Form</h1>
            <p className="text-center fs-6 m-auto">Starred (*) items are required.</p>
            <label htmlFor="garden_area_id" className="col-4 text-start px-2 my-2">Garden Area number to place plant in:* </label>
            <input name="garden_area_id" className="col-6" type="text" onChange={handleChange} value={values.garden_area_id}></input>
            <label htmlFor="name" className="col-4 text-end px-2 my-2">Enter the name of your plant:* </label>
            <input name="name" className="col-6 my-2" type="text" onChange={handleChange} value={values.name}></input>
            <label htmlFor="location_in_area" className="col-4 text-start">Location number within area to place plant in:* </label>
            <input name="location_in_area" className="col-6" type="text" onChange={handleChange} value={values.location_in_area}></input>
            <label htmlFor="latin_name" className="col-4 text-end px-2 my-2">Latin Name: </label>
            <input name="latin_name" type="text" className="col-6" onChange={handleChange} value={values.latin_name}></input>
            <label htmlFor="height" className="col-4 text-end px-2 my-2">Height:  </label>
            <input name="height" type="text" className="col-6" onChange={handleChange} value={values.height}></input>
            <label htmlFor="width" className="col-4 text-end px-2 my-2">Width: </label>
            <input name="width" type="text" className="col-6" onChange={handleChange} value={values.width}></input>
            <label htmlFor="hardiness_zones" className="col-4 text-end px-2">Hardiness Zones </label>
            <input name="hardiness_zones" className="col-6" type="text" onChange={handleChange} value={values.hardiness_zones}></input>
            <label htmlFor="description" className="col-4 text-end px-2 my-2">Description of plant: </label>
            <input name="description" className="col-6" type="text" onChange={handleChange} value={values.description}></input>
            <div className="text-center py-4">
            <input name="submit" className="col-2"type="submit"></input>
            {btn}
            </div>

        </form>
        <AlertMessage message={message} show={showAlert}/>
    </div>
    )
}

export default PlantForm;