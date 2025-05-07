import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Lucknow",
        feelsLike: 32.79,
        humidity: 10,
        temp: 35.51,
        tempMax: 35.51,
        tempMin: 35.51,
        weather: "clear sky"
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }


    return(
        <div style={{textAlign:"center"}}>
            <h2 style={{color:"black"}}>WeatherApp</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}