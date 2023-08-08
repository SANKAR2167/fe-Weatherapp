import React from 'react'
import Axios from 'axios'
import { useState } from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const KEY = "55bd53a7b3e5be70bb450fc81f19a6b8";

export default function Home() {

  const [city, setCity] = useState("");
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)

      setData(response.data);
      console.log(response.data);
    }
    catch (err) {
      alert("error in API call");
    }
  }

  return (
    <div className="weatherapp">
      <div className="con-weather">
        <h1>Weather Application</h1>
        <div className="input-container">
          <TextField color='primary' className='input' id="filled-basic" label="Enter the City Name" variant="standard" value={city} onChange={e => setCity(e.target.value)} />
          <IconButton aria-label="find" onClick={fetchData} className='button' color='primary'>
            <SearchIcon />
          </IconButton>
        </div>
      </div>


      {data && (
        <Card className="container">
          <h2>{data.name}, {data.sys.country}</h2>
          <div className="temperature">
            <img className='temp' src="https://www.freeiconspng.com/uploads/weather-icon-png-22.png" alt="" /> <h3>{data.main.temp} °K</h3>
          </div>

          <div className="key-values">
            <div className="location">
              <div className="loc-container">
                <img className='loc-img' src="https://i.blogs.es/44253a/googlelatitude/450_1000.webp" alt="" />
              </div>
              <div className="loc-latlong">
                <h4>Lattitude: {data.coord.lat}</h4>
                <h4>Longitude: {data.coord.lon}</h4>
              </div>
            </div>
            <div className="weather">
              <div className="weat">
                <img className='we-img' src="https://cdn4.iconfinder.com/data/icons/toony-weather-set/1500/Suncloud9-512.png" alt="" /><h4>{data.weather[0].main}</h4>
              </div>

              <div className="weat">
                <img className='sd-img' src="https://cdn-icons-png.flaticon.com/512/1247/1247909.png" alt="" /><h4>{data.wind.speed} M/s</h4>
              </div>
            </div>
          </div>
        </Card>
      )}


    </div>
  )
}

