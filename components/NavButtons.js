import { Text , View, Button, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import WeatherIcon from './Weather_icon';
import WeatherIcon_test from './WeatherIcons_test'

export const NavButtons = (props) => {
  return (
    <View style={{marginTop:100, marginBottom:100,padding: 20, flex:1, alignContent:'space-between', justifyContent:"space-between"}}>

<WeatherIcon_test />
 <Button 
    style={{marginBottom:200, width:'100',borderRadius:20}}
    title="Go to Search Communes"
    color="#006600"
    onPress={() => props.navigation.navigate("SearchCommune")}  />

<Button 
style={st.linkButton}
    title="Go to MeteoDay"
    color="#660000"
    onPress={() => props.navigation.navigate("MeteoDay", {
            itemId: 86,
            otherParam: 'anything you want here',
          } )}  />
    <Button 
style={st.linkButton}
    title="Go to Manage list"
    color="#000066"
    onPress={() => props.navigation.navigate("ManageCommunes")}  /> 
    </View>
  );
}

const st=StyleSheet.create({
    linkButton:{ width:'100',borderRadius:20},

})

export default NavButtons;