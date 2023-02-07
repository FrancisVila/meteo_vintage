import {
    Text,
    TextInput,
    FlatList,
    View,
    Modal,
    Pressable,
    StyleSheet,
    Alert,
    Keyboard,
	ScrollView
  } from 'react-native'
  import * as xfs from 'expo-file-system'
  import {
    getCurrentPositionAsync,
    useForegroundPermissions,
    PermissionStatus,
  } from 'expo-location';
  import React, { useState } from 'react'
  import * as FileSystem from 'expo-file-system'
  import Ionicons from '@expo/vector-icons/Ionicons'
  // import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchCommune from './SearchCommune';
  
  export const ManageCommunes =  (props) => {

    // userCommuneList_set = props.navigation.state.params.userCommuneList_set
    // userCommuneList_ = props.navigation.state.params.userCommuneList_
    
    const  deleteItem =  (location) => {



      //  remove location from userCommuneList_
      const newList = props.userCommuneList_.filter(c => {



        return c['name'] !== location['name']}
        )

      props.userCommuneList_set(newList)
       saveCommuneList(newList)
      
    }

    const filename = 'listUserCommunes.txt'
    const fileUri = `${xfs.documentDirectory}${filename}`;

    const saveCommuneList =  (data) => {

      const strData = JSON.stringify(data)
      xfs.writeAsStringAsync(fileUri, strData, { encoding: xfs.EncodingType.UTF8 });
    };
    const readCommuneList = () => {

      const strContent =  xfs.readAsStringAsync(fileUri,{ encoding: xfs.EncodingType.UTF8 });
      return JSON.parse(strContent)
    }
    const listCommunes=  ()=> {
      try {
        fileContent =  readFile(readCommuneList())
        return fileContent
      }
      catch {return[]}
    }

	const handleCityClick= () => {
		console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
		props.screenToShow_set('MeteoDay')
	}
    
    return  (
		<ScrollView>
		<View style={st.container}>
		
        <FlatList style={st.c3}
          data={props.userCommuneList_}
          renderItem={itemData => <View style={st.listItem}> 
			   <Text style={{ fontSize:20}} onPress={handleCityClick} > 
                  {itemData.item['name']} {itemData.item['zip']}
               </Text>
              <Pressable  onPress={() =>  deleteItem(itemData.item)} >
                  <Ionicons size={20} name='trash' style={st.closeButton} />
                </Pressable>
              </View>}
        ></FlatList>
		<View style={st.addCommune} ><Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text>
		<Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text>
		<Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text>
		<Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text>
		<Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text>
		<Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text>
		<Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text>
		<Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text><Text>RRRR</Text>
		</View>
	</View>
	</ScrollView>
    )
  }
  
  const st = StyleSheet.create({
	c3:{backgroundColor: '#fDf'},
	c2 : {
		backgroundColor:'#Dff'
	},

	container:{
		// display:'flex',
		backgroundColor:'#ffD', 
		justifyContent:'flex-start'
	},

	addCommune:{ 
		backgroundColor:'#Dff',
		
	},
    screenWrapper:{
      marginTop:30,
    },
  

  

    listItem:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      // alignItems: 'stretch' ,
      borderBottomColor:'#777',
      borderBottomWidth: StyleSheet.hairlineWidth,
	  width:'70%'
  },
  
  modalHeaderText:{fontSize: 40},
  
  closeButton: {
    // alignSelf :'flex-end',
    color: '#f00', 
	position: 'absolute',
	right:5,
  },
    red:{color: '#f00'},
  
    listOfCities: {
      height:"30%",
      fontSize:30,
      overflow:'hidden'
    },
    modal:{
      flexDirection: 'column'
      },
  
    modalSemiTrans:{
      backgroundColor: '#300',
      height: "100%",
      width:"100%",
      opacity:0.5
    },
  
    topRight: {
      
      textAlign : 'right',
      // position: 'absolute',
      // top: 5,
      // right: 5
    },
    textInput: {
      backgroundColor: '#fff',
      borderColor: '#888',
      borderWidth: 1,
      margin: 0,
      marginBottom: 10,
      fontSize: 30
    },
  
  
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22
    },
  
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width: '50%',
      alignSelf: 'center',
    },
    buttonOpen: {
      backgroundColor: '#F194FF'
    },
  
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center'
    }
  })
  
  export default ManageCommunes
  