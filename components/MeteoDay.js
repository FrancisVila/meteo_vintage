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
	console.log("MeteoDay props.apiData_=", props.apiData_)
	console.log("MeteoDay props.currentCommune_=", props.currentCommune_)
	console.log("MeteoDay props.currentCommune_.name=", props.currentCommune_.name)
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



function HourData({hourData}) {
	const hourAsDate = u.getDateFromUnix( hourData["dt"])
	let weatherStr = hourData["weather"][0]["icon"]
	const rafales = Math.floor (3.6 * hourData["wind"]["gust"])
return(
  <View style={st.windDescView}>
 <Text key={hourData["dt"]}>   {("0" + hourAsDate.getHours()).slice(-2) }:00 </Text>
 <WeatherIcon00 width={30} weather={weatherStr} /> 
 <Text style={[st.temp]}> {parseInt (hourData["main"]["temp"])}° </Text>
 <Text style={[st.hourDesc]}> {hourData["weather"][0]["description"]} </Text>
 <View style={[st.windDescView, (rafales>20)?'':st.hidden]}><Text style={[st.hourDesc]}> vent</Text><Text style={st.hourDescWindSpeed}> {rafales} </Text><Text style={st.hourDesc}>km/h</Text></View>
  </View>);


}



const dayInFrench= (hourData, dayFromNow)=> {
	const hourAsDate = u.getDateFromUnix( hourData["dt"])
	let dayStr=""
	switch (dayFromNow) {
	case 0 :  dayStr = "Auj." ; break;
	case 2 :  dayStr = "Dem." ; break;
	default: dayStr = u.getDayInFrench( (hourAsDate), 'Ddd') + ' ' + hourAsDate.getDate() ; break;}
	return dayStr
}

const hourInfo=(hourData)=> {

    const hourAsDate = u.getDateFromUnix( hourData["dt"])
    return <Text key={hourData["dt"]}>   {("0" + hourAsDate.getHours()).slice(-2) }:00 </Text>
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

const handleSearch = ()=> {
	props.screenToShow_set('SearchCommune')
}

const ShowWeather = ({hourData}) => {
	// return <Text>{hourData.dt}</Text>
	console.log("dayOfWeek=", dayOfWeek)
	 const ret = 
	 <View>
	 {(dayOfWeek === dayInFrench(hourData))? 
		// if new day, show day header
			null: 
			<View style={st.divider}><Text style={st.dayHeader}>{dayInFrench(hourData, dayFromNow)}</Text></View>}
	 <View style={st.wrap_row} key={hourData.dt} > 
	 <HourData hourData={hourData}></HourData>

	</View>
	</View> 
	dayOfWeek = dayInFrench(hourData)
	dayFromNow++
	return ret
}

let dayOfWeek = ""
let dayFromNow = 0

// console.log("MeteoDay props.apiData_['list']=", props.apiData_['list'])
  return (
    <View style={[ [st.container]]}>
	      <ScrollView style={[st.scroller, st.hidden]}>
		  <Text style={{fontFamily: 'normal', fontWeight:'bold'}}>  normal </Text>
        <Text style={{fontFamily: 'notoserif', fontWeight:'bold'}}>  notoserif </Text>
        <Text style={{fontFamily: 'sans-serif', fontWeight:'100'}}>  sans-serif </Text>
        <Text style={{fontFamily: 'sans-serif-light', fontWeight:'100'}}>  sans-serif-light </Text>
        <Text style={{fontFamily: 'sans-serif-thin', fontWeight:'100'}}>  sans-serif-thin </Text>
        <Text style={{fontFamily: 'sans-serif-condensed', fontWeight:'100'}}>  sans-serif-condensed </Text>
        <Text style={{fontFamily: 'sans-serif-medium', fontWeight:'100'}}>  sans-serif-medium </Text>
        <Text style={{fontFamily: 'serif', fontWeight:'100'}}>  serif </Text>
        <Text style={{fontFamily: 'Roboto', fontWeight:'100'}}>  Roboto </Text>
        <Text style={{fontFamily: 'monospace', fontWeight:'100'}}>  monospace </Text>  

        <Text style={{fontFamily: 'normal', fontWeight:'900'}}>  normal </Text>
        <Text style={{fontFamily: 'notoserif', fontWeight:'900'}}>  notoserif </Text>
        <Text style={{fontFamily: 'sans-serif', fontWeight:'900'}}>  sans-serif </Text>
        <Text style={{fontFamily: 'sans-serif-light', fontWeight:'900'}}>  sans-serif-light </Text>
        <Text style={{fontFamily: 'sans-serif-thin', fontWeight:'900'}}>  sans-serif-thin </Text>
        <Text style={{fontFamily: 'sans-serif-condensed', fontWeight:'900'}}>  sans-serif-condensed </Text>
        <Text style={{fontFamily: 'sans-serif-medium', fontWeight:'900'}}>  sans-serif-medium </Text>
        <Text style={{fontFamily: 'serif', fontWeight:'900'}}>  serif </Text>
        <Text style={{fontFamily: 'Roboto', fontWeight:'900'}}>  Roboto </Text>
        <Text style={{fontFamily: 'monospace', fontWeight:'900'}}>  monospace </Text>        

		<Text style={{fontFamily: 'normal'}}>  normal </Text>
        <Text style={{fontFamily: 'notoserif'}}>  notoserif </Text>
        <Text style={{fontFamily: 'sans-serif'}}>  sans-serif </Text>
        <Text style={{fontFamily: 'sans-serif-light'}}>  sans-serif-light </Text>
        <Text style={{fontFamily: 'sans-serif-thin'}}>  sans-serif-thin </Text>
        <Text style={{fontFamily: 'sans-serif-condensed'}}>  sans-serif-condensed </Text>
        <Text style={{fontFamily: 'sans-serif-medium'}}>  sans-serif-medium </Text>
        <Text style={{fontFamily: 'serif'}}>  serif </Text>
        <Text style={{fontFamily: 'Roboto'}}>  Roboto </Text>
        <Text style={{fontFamily: 'monospace'}}>  monospace </Text>        
      </ScrollView>
	<ScrollView >
	<View style={st.headerView}>
		<Text style={st.pageHeader}>{props.currentCommune_.name.toLowerCase()} </Text>
		<Text style={st.searchIcon} onPress={handleSearch}>⌕</Text>
	</View>
        <View style={[st.layer_middle]}>
		{props.apiData_["list"].map((hourData) => <ShowWeather  hourData={hourData} ></ShowWeather>)}
        </View>
		</ScrollView>
    </View>
  );
}

const st=StyleSheet.create({
	hidden: {display:'none'},
	scroller: {flex:1},
	temp: {fontSize:16, fontWeight:'900'},
	windDescView : {display: 'flex', flexDirection:'row', height:'100%' , alignItems: 'center'},
	hourDesc : {display: 'flex', fontSize:9, },
	hourDescWindSpeed : {display: 'flex', fontSize:16, },
	divider:{ position:'absolute', top:-60, width:'100%', backgroundColor:'#ddd', height:170,  zIndex:-10},
	dayHeader :{
		fontSize:14, 
		top:60, 
		position:'absolute',  
		left:0, width:'100%', 
		borderTopColor:'#333', 
		borderTopWidth: 1,
		marginTop:0 ,
		fontFamily: 'sans-serif-condensed',
		fontWeight: 'bold',
		paddingTop:10,
		paddingLeft:5,
	},
	wrap_row:{flexWrap:'wrap', flexDirection:'row', marginLeft:100, marginTop:5, alignItems: 'center'},
	headerView : {width:'100%', flexDirection:'row' },
	searchIconView : { position: 'absolute', left:0 },
	searchIcon : {fontSize:40, position: 'absolute', right:20, top: 15 },
	pageHeader : {
		fontSize:30, 
		margin:5, 
		textAlign:'center',
		marginTop: 20,
		marginBottom: 50,
		width: '100%',
		fontFamily: 'sans-serif-condensed',
		fontWeight: 'bold'

	},
    
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


