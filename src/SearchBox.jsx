import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "2c8dee2c6f6384590fed8f01bd66d056";

    let getWeatherInfo = async () =>{
        try{
            let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jasonResponce = await responce.json();

       let result = {
        city: city,
        temp: jasonResponce.main.temp,
        tempMin: jasonResponce.main.temp_min,
        tempMax: jasonResponce.main.temp_max,
        humidity: jasonResponce.main.humidity,
        feelsLike: jasonResponce.main.feels_like,
        weather: jasonResponce.weather[0].description,
       };
       console.log(result);
       return result;
    } catch(err){
        throw err;
    }
       
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) =>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
         let newInfo = await getWeatherInfo();
         updateInfo(newInfo); 
        }catch(err) {
        setError(true);
        }   
    }

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type="submit" >Search</Button>
            {error && <p style={{color: "red"}}>No such place exists! </p> }     
            </form>
        </div>
    )
}