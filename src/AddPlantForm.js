import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertMessage from "./AlertMessage";


    function AddPlantForm( {addNewPlant, plant = null} ) {
        const navigate = useNavigate();
        const initialValues = {
            garden_area_id: "",
            name: "",
            location_in_area: "",
            latin_name: "",
            max_height: "",
            max_width: "",
            hardiness_zones: "",
            description: ""
        }
        const [values, setValues] = useState(initialValues);
        const [showAlert, setShowAlert] = useState(false);

        // if (plant) {
        //     initialValues.map((attr) => {
        //         attr = plant[attr]
        //     })
        // }

        let message = ("Please enter a plant name, garden area identifier, and location identifier within the garden area before submitting the form. The first three sections must have a value in order to add a plant.")

        function handleSubmit(e) {
            e.preventDefault();
            
            const newPlant = {garden_area_id: values.garden_area, name: values.plant_name, location_in_area: values.location_in_area,
                latin_name: values.latin_name, max_height: values.max_height, max_width: values.max_width, 
                hardiness_zones: values.hardiness_zones, description: values.description}
            if (newPlant.garden_area === "" || newPlant.plant_name === "" || newPlant.location_in_area === "") {
                setShowAlert(true);
            }
            else {
                addNewPlant(newPlant);
            }
            navigate('/areas');
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



    return (
        <div onClick={handleHideModal} className="col" >
            <form onSubmit={handleSubmit} className="border shadow-sm">
                <h1 className="text-center">Plant Form</h1>
                <p className="text-center fs-6 m-auto">Starred (*) items are required.</p>
                <label htmlFor="garden_area_id" className="col-4 text-end px-2 my-2">Enter the garden area number to place your plant in:* </label>
                <input name="garden_area_id" className="col-6" type="text" onChange={handleChange} value={values.garden_area}></input>
                <label htmlFor="name" className="col-4 text-end px-2 my-2">Enter the name of your plant:* </label>
                <input name="name" className="col-6 my-2" type="text" onChange={handleChange} value={values.plant_name}></input>
                <label htmlFor="location_in_area" className="col-4 text-end">Enter the location number to <br></br>place your plant in a garden area:* </label>
                <input name="location_in_area" className="col-6" type="text" onChange={handleChange} value={values.location_in_area}></input>
                <label htmlFor="latin_name" className="col-4 text-end px-2 my-2">Latin Name: </label>
                <input name="latin_name" type="text" className="col-6" onChange={handleChange} value={values.latin_name}></input>
                <label htmlFor="max_height" className="col-4 text-end px-2 my-2">Max Height:  </label>
                <input name="max_height" type="text" className="col-6" onChange={handleChange} value={values.max_height}></input>
                <label htmlFor="max_width" className="col-4 text-end px-2 my-2">Max Width: </label>
                <input name="max_width" type="text" className="col-6" onChange={handleChange} value={values.max_width}></input>
                <label htmlFor="hardiness_zones" className="col-4 text-end px-2">Hardiness Zones </label>
                <input name="hardiness_zones" className="col-6" type="text" onChange={handleChange} value={values.hardiness_zones}></input>
                <label htmlFor="description" className="col-4 text-end px-2 my-2">Enter a description of your plant: </label>
                <input name="description" className="col-6" type="text" onChange={handleChange} value={values.description}></input>
                <div className="text-center py-4">
                <input className="col-2"type="submit"></input>
                </div>
            </form>
            <AlertMessage message={message} show={showAlert}/>
        </div>
    )
}

export default AddPlantForm;