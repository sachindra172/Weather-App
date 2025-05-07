// if(process.env.NODE_ENV!="production"){
//   require('dotenv').config();
// }
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);


    let API_URL="http://api.openweathermap.org/data/2.5/weather";
    const API_key = import.meta.env.VITE_WEATHER_API_KEY;

    

    let getWeatherInfo=async()=>{
      try{
     let response=  await fetch(`${API_URL}?q=${city}&appid=${API_key}&units=metric`);
     let jsonResponse=await response.json();

     let  result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
     };
     console.log(result);
     return result;
    }
    catch(err){
      throw(err);
    }

    }
    


 let handleChange=(event)=>{
    setCity(event.target.value);
   }

let handleCity=async(event)=>{
  try{
    event.preventDefault();
    console.log(city);
    setCity("");
   let newInfo=  await getWeatherInfo();
   updateInfo(newInfo);
  }
  catch(err){
    console.error("Fetch error:", err.message);
    setError(true);
  }

}


  return (
    <div className='SearchBox'>
      <h3>Search for Weather</h3>

      <div className='search-controls'>
        <TextField
          id="City"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
       <Button variant="contained" type='submit' onClick={handleCity}>
        Search
      </Button>
      </div>
      {error && <p style={{color:"red"}}>No such place exist</p>}
    </div>
  );
}
