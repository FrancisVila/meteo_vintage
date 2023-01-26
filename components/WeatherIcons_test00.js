import { Text, View , StyleSheet} from 'react-native';
import React, { useState } from 'react';
import WeatherIcon00 from './Weather_icon';

export const WeatherIcon_test00 = (props) => {
  return (
    <View style={st.container}>
      <View style={st.row}><Text>01d</Text><WeatherIcon00 width={24} weather='01d' /></View>
      <View style={st.row}><Text>02d</Text><WeatherIcon00 width={24} weather='02d' /></View>
      <View style={st.row}><Text>thunderstorm</Text><WeatherIcon00 width={24} weather='thunderstorm' /></View>
      <View style={st.row}><Text>sprinkle</Text><WeatherIcon00 width={24} weather='sprinkle' /></View>
      <View style={st.row}><Text>rain</Text><WeatherIcon00 width={24} weather='rain' /></View>
      <View style={st.row}><Text>showers</Text><WeatherIcon00 width={24} weather='showers' /></View>
      <View style={st.row}><Text>snow</Text><WeatherIcon00 width={24} weather='snow' /></View>
      <View style={st.row}><Text>sleet</Text><WeatherIcon00 width={24} weather='sleet' /></View>
      <View style={st.row}><Text>smoke</Text><WeatherIcon00 width={24} weather='smoke' /></View>
      <View style={st.row}><Text>day-haze</Text><WeatherIcon00 width={24} weather='day-haze' /></View>
      <View style={st.row}><Text>cloudy-gusts</Text><WeatherIcon00 width={24} weather='cloudy-gusts' /></View>
      <View style={st.row}><Text>fog</Text><WeatherIcon00 width={24} weather='fog' /></View>
      <View style={st.row}><Text>dust</Text><WeatherIcon00 width={24} weather='dust' /></View>
      <View style={st.row}><Text>smog</Text><WeatherIcon00 width={24} weather='smog' /></View>
      <View style={st.row}><Text>day-windy</Text><WeatherIcon00 width={24} weather='day-windy' /></View>
      <View style={st.row}><Text>sunny</Text><WeatherIcon00 width={24} weather='sunny' /></View>
      <View style={st.row}><Text>tornado</Text><WeatherIcon00 width={24} weather='tornado' /></View>
      <View style={st.row}><Text>cloudy</Text><WeatherIcon00 width={24} weather='cloudy' /></View>


    </View>
  );
}

const st = StyleSheet.create({
    container: { flex: 1, flexDirection:'column' , flexWrap:'wrap' },
  row: { flex: 1, flexDirection:'row',  flexWrap:'wrap', marginBottom:40},
  col: { flex: 1, flexDirection:'column'  },
});

export default WeatherIcon_test00;