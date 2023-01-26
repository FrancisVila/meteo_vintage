import { Text, View , StyleSheet} from 'react-native';
import React, { useState } from 'react';
import WeatherIcon from './Weather_icon';

export const WeatherIcon_test = (props) => {
  return (
    <View style={st.container}>
        <View style={st.row}><Text>rain-mix</Text><WeatherIcon width={24} weather='rain-mix' /></View>
      <View style={st.row}><Text>storm-showers</Text><WeatherIcon width={24} weather='storm-showers' /></View>
      <View style={st.row}><Text>thunderstorm</Text><WeatherIcon width={24} weather='thunderstorm' /></View>
      <View style={st.row}><Text>sprinkle</Text><WeatherIcon width={24} weather='sprinkle' /></View>
      <View style={st.row}><Text>rain</Text><WeatherIcon width={24} weather='rain' /></View>
      <View style={st.row}><Text>showers</Text><WeatherIcon width={24} weather='showers' /></View>
      <View style={st.row}><Text>snow</Text><WeatherIcon width={24} weather='snow' /></View>
      <View style={st.row}><Text>sleet</Text><WeatherIcon width={24} weather='sleet' /></View>
      <View style={st.row}><Text>smoke</Text><WeatherIcon width={24} weather='smoke' /></View>
      <View style={st.row}><Text>day-haze</Text><WeatherIcon width={24} weather='day-haze' /></View>
      <View style={st.row}><Text>cloudy-gusts</Text><WeatherIcon width={24} weather='cloudy-gusts' /></View>
      <View style={st.row}><Text>fog</Text><WeatherIcon width={24} weather='fog' /></View>
      <View style={st.row}><Text>dust</Text><WeatherIcon width={24} weather='dust' /></View>
      <View style={st.row}><Text>smog</Text><WeatherIcon width={24} weather='smog' /></View>
      <View style={st.row}><Text>day-windy</Text><WeatherIcon width={24} weather='day-windy' /></View>
      <View style={st.row}><Text>sunny</Text><WeatherIcon width={24} weather='sunny' /></View>
      <View style={st.row}><Text>tornado</Text><WeatherIcon width={24} weather='tornado' /></View>
      <View style={st.row}><Text>cloudy</Text><WeatherIcon width={24} weather='cloudy' /></View>


    </View>
  );
}

const st = StyleSheet.create({
    container: { flex: 1, flexDirection:'column' , flexWrap:'wrap' },
  row: { flex: 1, flexDirection:'row',  flexWrap:'wrap', marginBottom:40},
  col: { flex: 1, flexDirection:'column'  },
});

export default WeatherIcon_test;