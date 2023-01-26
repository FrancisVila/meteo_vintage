import { Text, Image, View, StyleSheet } from 'react-native';
import React, { useState, useContext } from 'react';
import {u} from './utils'



export const WeatherIcon00 = (props) => {
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
      case '01d' : return <Image style={st.tinyLogo} source={require('../assets/images/01d.png')} />
      case '02d' : return <Image style={st.tinyLogo} source={require('../assets/images/02d.png')} />
      case '03d' : return <Image style={st.tinyLogo} source={require('../assets/images/03d.png')} />
      case '04d' : return <Image style={st.tinyLogo} source={require('../assets/images/04d.png')} />
      // case '05d' : return <Image style={st.tinyLogo} source={require('../assets/images/05d.png')} />
      // case '06d' : return <Image style={st.tinyLogo} source={require('../assets/images/06d.png')} />
      // case '07d' : return <Image style={st.tinyLogo} source={require('../assets/images/07d.png')} />
      // case '08d' : return <Image style={st.tinyLogo} source={require('../assets/images/08d.png')} />
      case '09d' : return <Image style={st.tinyLogo} source={require('../assets/images/09d.png')} />
      case '10d' : return <Image style={st.tinyLogo} source={require('../assets/images/10d.png')} />
      case '11d' : return <Image style={st.tinyLogo} source={require('../assets/images/11d.png')} />
      // case '12d' : return <Image style={st.tinyLogo} source={require('../assets/images/12d.png')} />
      case '13d' : return <Image style={st.tinyLogo} source={require('../assets/images/13d.png')} />

      case '01n' : return <Image style={st.tinyLogo} source={require('../assets/images/01n.png')} />
      case '02n' : return <Image style={st.tinyLogo} source={require('../assets/images/02n.png')} />
      case '03n' : return <Image style={st.tinyLogo} source={require('../assets/images/03n.png')} />
      case '04n' : return <Image style={st.tinyLogo} source={require('../assets/images/04n.png')} />
      // case '05n' : return <Image style={st.tinyLogo} source={require('../assets/images/05n.png')} />
      // case '06n' : return <Image style={st.tinyLogo} source={require('../assets/images/06n.png')} />
      // case '07n' : return <Image style={st.tinyLogo} source={require('../assets/images/07n.png')} />
      // case '08n' : return <Image style={st.tinyLogo} source={require('../assets/images/08n.png')} />
      case '09n' : return <Image style={st.tinyLogo} source={require('../assets/images/09n.png')} />
      case '10n' : return <Image style={st.tinyLogo} source={require('../assets/images/10n.png')} />
      case '11n' : return <Image style={st.tinyLogo} source={require('../assets/images/11n.png')} />
      // case '12n' : return <Image style={st.tinyLogo} source={require('../assets/images/12n.png')} />
      case '13n' : return <Image style={st.tinyLogo} source={require('../assets/images/13n.png')} />
    }
}



export default WeatherIcon00;