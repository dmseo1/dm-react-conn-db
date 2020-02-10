import React, {Component} from 'react';
import styled from 'styled-components'
import { weatherConditions } from '../Data/WeatherConditions'

const Weather = ({weather, temperature}) => {
    console.log(`넘어온 날씨: ${weather}`)
    return(
        <div>
            <div>{temperature}˚C</div>
            <div>{weatherConditions[weather].title}</div>
            <div>{weatherConditions[weather].subtitle}</div>
        </div>
    );
  
  }

 
  export default Weather;