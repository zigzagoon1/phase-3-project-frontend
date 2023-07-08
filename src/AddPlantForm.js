import React from "react";
import { useState } from "react";

    const initialValues = {
        garden_area: "",
        plant_name: "",
        location_in_area: "",
        latin_name: "",
        max_height: "",
        max_width: "",
        hardiness_zones: "",
        description: ""
    }
    function AddPlantForm({garden_id, area_id}) {
        const [values, setValues] = useState(initialValues);

        function handleSubmit() {

        }

        function handleChange(e) {
            const {name, value} = e.target;
            setValues({...values, [name]: value,
            });
        }

    return (
        <div className="col">
            <form onSubmit={handleSubmit}className="border shadow-sm">
                <h1 className="text-center">New Plant Form</h1>
                <p className="text-center fs-6 m-auto">Starred (*) items are required.</p>
                <label for="garden_area" className="col-4 text-end px-2 my-2">Enter the garden area number to place your plant in:* </label>
                <input name="garden_area" className="col-6" type="text" onChange={handleChange} value={values.garden_area}></input>
                <label for="plant_name" className="col-4 text-end px-2 my-2">Enter the name of your plant:* </label>
                <input name="plant_name" className="col-6 my-2" type="text" handleChange={handleChange} value={values.plant_name}></input>
                <label for="location_in_area" className="col-4 text-end">Enter the location number to <br></br>place your plant in a garden area:* </label>
                <input name="location_in_area" className="col-6" type="text" handleChange={handleChange} value={values.location_in_area}></input>
                <label for="latin_name" className="col-4 text-end px-2 my-2">Latin Name: </label>
                <input name="latin_name" type="text" className="col-6" handleChange={handleChange} value={values.latin_name}></input>
                <label for="max_height" className="col-4 text-end px-2 my-2">Max Height:  </label>
                <input name="max_height" type="text" className="col-6" handleChange={handleChange} value={values.max_height}></input>
                <label for="max_width" className="col-4 text-end px-2 my-2">Max Width: </label>
                <input name="max_width" type="text" className="col-6" handleChange={handleChange} value={values.max_width}></input>
                <label for="hardiness_zones" className="col-4 text-end px-2">Hardiness Zones </label>
                <input name="hardiness_zones" className="col-6" type="text" handleChange={handleChange} value={values.hardiness_zones}></input>
                <label for="description" className="col-4 text-end px-2 my-2">Enter a description of your plant: </label>
                <input name="description" className="col-6" type="text" handleChange={handleChange} value={values.description}></input>
                <div className="text-center py-4">
                <input className="col-2"type="submit"></input>
                </div>
            </form>
        </div>
    )
}

export default AddPlantForm;