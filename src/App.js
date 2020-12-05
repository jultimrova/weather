import './App.css';
import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = 'f20f712b0075b19b3fb788343220f865'
const URL = 'http://api.openweathermap.org/data/2.5/weather'

const App = () => {
    const getWeather = async (e) => {
        e.preventDefault()
        const city = e.target.elements.city.value
        const country = e.target.elements.country.value
        const apiCall = await fetch(`${URL}?q=${city},${country}&units=metric&appid=${API_KEY}`)
        const data = await apiCall.json()
        console.log(data)
    }

    return (
        <>
            <Title/>
            <Form getWeather={getWeather}/>
            <Weather/>
        </>
    );
}

export default App;
