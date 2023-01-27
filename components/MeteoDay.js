import { View, StyleSheet, Text, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import CommuneSwiper from './CommuneSwiper';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { u } from './utils';
import WeatherIcon from './Weather_icon';
import WeatherIcon00 from './Weather_icon_00';
import * as xfs from 'expo-file-system'

export const MeteoDay = (props) => {
	u.permalog("enter MeteoDay ================================== ")
	console.log("MeteoDay props=", props)
const [dataStr_, dataStr_set] = useState('no data yet');
const [data_, data_set] = useState([]);
const filename = 'listUserCommunes.txt'
const fileUri = `${xfs.documentDirectory}${filename}`;
useEffect( () => { 
    const rClS = async()=>
    {const newData = await readCommuneList()
    data_set(newData)
    dataStr_set(JSON.stringify(newData))
    }
    rClS()
}, []);

// read the list of communes from file
const readCommuneList = async () => {
    const strContent = await xfs.readAsStringAsync(fileUri,{ encoding: xfs.EncodingType.UTF8 });
    // return strContent
    return JSON.parse(strContent)
  }

    const onSwipeLeft=(gestureState) => {

readCommuneList
        // this.setState({myText: 'You swiped left!'});
      }

      const onSwipeRight=(gestureState) => {

        // this.setState({myText: 'You swiped left!'});
      }
      
const hourInfo=(hourData)=> {

    const hourAsDate = u.getDateFromUnix( hourData["dt"])
    return <Text key={hourData["dt"]}> { u.getDayInFrench( (hourAsDate), 'Ddd')}  {hourAsDate.getDate()} {("0" + hourAsDate.getHours()).slice(-2) }:00 </Text>
}

const hourWeatherIcon=(hourData)=> {
    let weatherStr = hourData["weather"][0]["main"]
    weatherStr = weatherStr.toLowerCase()

    return <WeatherIcon width={20} weather={weatherStr} /> 
}

const hourWeatherIcon00=(hourData)=> {
    let weatherStr = hourData["weather"][0]["icon"]
    return <WeatherIcon00 width={20} weather={weatherStr} /> 
}


const saveCommuneList =  (data) => {
    const strData = JSON.stringify(data)
    xfs.writeAsStringAsync(fileUri, strData, { encoding: xfs.EncodingType.UTF8 });
  };

  const readCommuneListStr = async () => {
    const strContent = await xfs.readAsStringAsync(fileUri,{ encoding: xfs.EncodingType.UTF8 });




    dataStr_set(strContent)
    return strContent.toString()
  }
const hourTemp=(hourData)=><Text> {parseInt (hourData["main"]["temp"])}° </Text>

const hourDesc=(hourData)=> <Text> {hourData["weather"][0]["description"]} </Text>


// console.log("MeteoDay props.apiData_['list']=", props.apiData_['list'])
  return (
    
    
    <View style={[ st.container]}>
	<ScrollView>
	<Text style={st.pageHeader}>{props.userCommuneList_[0]['name']}</Text>
    {/* <Text>itemId: {params.otherParam}</Text> */}
        {/* <GestureRecognizer onSwipeLeft={(state) => onSwipeLeft(state)} onSwipeRight={(state) => onSwipeRight(state)}> */}
         {/* </GestureRecognizer> */}
        {/* <CommuneSwiper userCommuneList_={userCommuneList_} /> */}

        <CommuneSwiper {...props}  />

        {/* <View style={[st.iconbar]}></View> */}
        {/* <View style={[st.layer_top, st.c1]}>
            <View style={[st.rnd, st.c0]}/>
            <View style={[st.rnd, st.c0]}/>
        </View> */}
        <View style={[st.layer_middle]}>
{(props.apiData_["list"]).map((hourData)=> <View style={st.wrap_row} key={hourData["dt"]} >{hourInfo(hourData)}{hourWeatherIcon00(hourData)}{hourTemp(hourData)}{hourDesc(hourData)}</View>)}
        </View>
        {/* <View style={[st.layer_middle, st.c4, st.wrap_row]}>
            <View style={[st.sq, st.c0]}/>
            <View style={[st.sq, st.c0]}/>
            <View style={[st.sq, st.c0]}/>
            <View style={[st.sq, st.c0]}/>
            <View style={[st.sq, st.c0]}/>
            <View style={[st.sq, st.c0]}/>
            <View style={[st.sq, st.c0]}/>
            <View style={[st.sq, st.c0]}/>
            <View style={[st.sq, st.c0]}/>
        </View> */}
        {/* <View style={[st.layer_bottom, st.c3]}>    </View> */}

		</ScrollView>
    </View>
   
  );
}

const st=StyleSheet.create({
	pageHeader : {
		fontSize:30, 
		margin:5, 
		textAlign:'center',
		marginTop: 20
	},
    wrap_row:{flexWrap:'wrap', flexDirection:'row'},
    container:{flex:1, width: '100%'},
    layer:{flex:1},
    layer_top:{height:50, flexDirection:'row',  justifyContent:'center', alignItems:'center'},
    layer_middle:{flex:1},
    layer_bottom:{height:50},
    sq: {width:50, height:50, margin:5  },
    rnd: {height:30, width:30, borderRadius:15, margin:3},
    c0 : {backgroundColor: '#000'},
    c1 : {backgroundColor: '#88F'},
    c2 : {backgroundColor: '#F88'},
    c3 : {backgroundColor: '#8F8'},
    c4 : {backgroundColor: '#FF8'},
    c5 : {backgroundColor: '#8FF'},
    iconbar : {backgroundColor: '#FFD', height:20},
    })

export default MeteoDay;


