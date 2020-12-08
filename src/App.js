import './App.css';
import React, {useState} from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = 'f20f712b0075b19b3fb788343220f865'
const URL = 'http://api.openweathermap.org/data/2.5/weather'

const App = () => {
    const [temperature, setTemperature] = useState(undefined)
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [humidity, setHumidity] = useState(undefined)
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')

    const getWeather = async (e) => {
        e.preventDefault()
        const city = e.target.elements.city.value
        const country = e.target.elements.country.value
        const apiCall = await fetch(`${URL}?q=${city},${country}&units=metric&appid=${API_KEY}`)
        const data = await apiCall.json()
        if (city && country) {
            console.log(data)
            setTemperature(data.main.temp)
            setCity(data.name)
            setCountry(data.sys.country)
            setHumidity(data.main.humidity)
            setDescription(data.weather[0].description)
        } else {
            setTemperature(undefined)
            setCity('')
            setCountry('')
            setHumidity(undefined)
            setDescription('')
            setError('Please enter city and country')
        }
    }

    return (
        <>
            <Title/>
            <Form getWeather={getWeather}/>
            <Weather temperature={temperature}
                     city={city}
                     country={country}
                     humidity={humidity}
                     description={description}
                     error={error}
            />
        </>
    );
}

export default App;
