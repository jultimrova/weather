import React from "react";

const Form = ({getWeather}) => {
    return <>
        <form className='form' onSubmit={getWeather}>
            City
            <input id='city' type="text" name='city' placeholder='city'/>
            Country
            <input id='country' type="text" name='country' placeholder='country'/>
            <button className='button'>Show</button>
        </form>
    </>
}

export default Form;