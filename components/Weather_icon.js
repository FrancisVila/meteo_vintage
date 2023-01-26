import { Text, Image, View, StyleSheet } from 'react-native';
import React, { useState, useContext } from 'react';
import {u} from './utils'



export const WeatherIcon = (props) => {
  const st = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: props.width,
      height: props.width,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });
    // variable names don't work inside the require, have to type out explicitely ! (Nov 2022)
    // see https://stackoverflow.com/questions/30854232/react-native-image-require-module-using-dynamic-names 
    switch (props.weather) {
      case 'rain-mix' : return <Image style={st.tinyLogo} source={require('../assets/images/weather_rain-mix.png')} />
      case 'storm-showers' : return <Image style={st.tinyLogo} source={require('../assets/images/weather_storm-showers.png')} />
      case 'thunderstorm' : return <Image style={st.tinyLogo} source={require('../assets/images/weather_thunderstorm.png')} />
      case 'sprinkle' : return <Image style={st.tinyLogo} source={require('../assets/images/weather_sprinkle.png')} />
      case 'rain' : return <Image style={st.tinyLogo} source={require('../assets/images/weather_rain.png')} />
      case 'showers' : return <Image style={st.tinyLogo} source={require('../assets/images/weather_showers.png')} />
      case 'snow' : return <Image style={st.tinyLogo} source={require('../assets/images/weather_snow.png')} />
      case 'sleet' : return <Image style={st.tinyLogo} source={require('../assets/images/weather_sleet.png')} />
      case 'smoke' : return <Image style={st.tinyLogo} source={require('../assets/images/weather_smoke.png')} />
      case 'day-haze' : return <Image style={st.tinyLogo} source={require('../assets/images/weather_day-haze.png')} />
      case 'cloudy-gusts' : return <Image style={st.tinyLogo} source={require('../assets/images/weather_cloudy-gusts.png')} />
      case 'fog' : return <Image style={st.tinyLogo} source={require('../assets/images/weather_fog.png')} />
      case 'dust' : return <Image style={st.tinyLogo} source={require('../assets/images/weather_dust.png')} />
      case 'smog' : return <Image style={st.tinyLogo} source={require('../assets/images/weather_smog.png')} />
      case 'day-windy' : return <Image style={st.tinyLogo} source={require('../assets/images/weather_day-windy.png')} />
      case 'sunny' : return <Image style={st.tinyLogo} source={require('../assets/images/weather_sunny.png')} />
      case 'tornado' : return <Image style={st.tinyLogo} source={require('../assets/images/weather_tornado.png')} />
      case 'clouds' : return <Image style={st.tinyLogo} source={require('../assets/images/weather_cloudy.png')} />
    }
}



export default WeatherIcon;