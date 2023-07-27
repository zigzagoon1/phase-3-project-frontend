import React from "react";
import { useState } from "react";
function AddGardenAreaForm({onAddArea}) {
    //location
    //length
    //width
    //number of plants
    const defaultValues = {
        location: "",
        length: "",
        width: "",
        number_of_plants: ""
    };
    const [values, setValues] = useState(defaultValues);
    function handleSubmit(e) {
        e.preventDefault();
        const newArea = {location: values.location, width: values.width, height: values.height, number_of_plants: values.number_of_plants}
        if (values.number_of_plants === "") {
            newArea.number_of_plants = 5
        }
        onAddArea(newArea);
    }
    function handleChange(e) {
        const {name, value} = e.target;
        setValues({...values, [name]: value,
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="border shadow-sm">
                <h1 className="text-center">Garden Area Form</h1>
                <p className="text-center fs-6 m-auto">Starred (*) items are required.</p>
                <label htmlFor="location" className="col-6">Location:</label>
                <input name="location" type="text" className="col-6" onChange={handleChange} value={values.location} />
                <label htmlFor="length" className="col-6">Length (in feet/inches)</label>
                <input name="length" type="text" className="col-6" onChange={handleChange} value={values.length} />
                <label htmlFor="width" className="col-6">Width (in feet/inches)</label>
                <input name="width" type="text" className="col-6" onChange={handleChange} value={values.width} />
                <label htmlFor="number_of_plants" className="col-6">Number of plants that can fit in this garden:</label>
                <input name="number_of_plants" type="text" className="col-6" onChange={handleChange} value={values.number_of_plants} />
                <input type="submit" className="" />
            </form>
        </div>
    )
}

export default AddGardenAreaForm;