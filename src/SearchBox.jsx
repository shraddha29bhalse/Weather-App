import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "f4c814d69248407193a6e2fda2057e46";
    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                temp_min: jsonResponse.main.temp_min,
                temp_max: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            return result;
        }catch (error) {
            throw error;
        }}
    let HandleChange = (event) => {
        setError(false);
        setCity(event.target.value);
    }
    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (error) {
            setError(true);
        }}
    return (
        <div className='search-box'>
            <h2>Search For Wheather </h2>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="standard" required value={city} onChange={HandleChange}/><br /><br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
            {error && <p style={{ color: "red" }}> This Place is not within my reach</p>}
        </div>)
};