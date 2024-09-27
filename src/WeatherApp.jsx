import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMix: 25.05,
        humidity: 47,
        weather: "haze",
    });


    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }
    return (
        <div>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}