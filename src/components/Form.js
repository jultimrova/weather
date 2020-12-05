import React from "react";

const Form = ({getWeather}) => {
    return <>
        <form onSubmit={getWeather}>
            <label htmlFor='city'>City
                <input id='city' type="text" name='city' placeholder='city'/>
            </label>
            <label htmlFor='country'>Country
                <input id='country' type="text" name='country' placeholder='country'/>
            </label>
            <button>Show</button>
        </form>
    </>
}

export default Form;