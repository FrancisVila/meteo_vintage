import {
    Text,
    TextInput,
    FlatList,
    View,
    Modal,
    Pressable,
    StyleSheet,
    Alert,
    Keyboard
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
  
  export const ManageCommunes =  (props) => {
    

    userCommuneList_set = props.navigation.state.params.userCommuneList_set
    userCommuneList_ = props.navigation.state.params.userCommuneList_
    
    const  deleteItem =  (location) => {



      //  remove location from userCommuneList_
      const newList = userCommuneList_.filter(c => {



        return c['name'] !== location['name']}
        )

      userCommuneList_set(newList)
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
    
    return  (
        <FlatList 
        style={{margin:20}}
          data={userCommuneList_}
          renderItem={itemData => <View style={styles.listItem}> 
          
              <Text style={{ fontSize:20}}> 
                {itemData.item['name']} {itemData.item['zip']}
              </Text>
              <Pressable onPress={() =>  deleteItem(itemData.item)} >
                  <Ionicons size={20} name='trash' style={styles.closeButton} />
                </Pressable>
              </View>}
        ></FlatList>
    )
  }
  
  const styles = StyleSheet.create({
    screenWrapper:{
      marginTop:30,
    },
  
    modalBody:{
      flex:1,
      overflow:'hidden',
      height:"100%",
      marginTop: 20,
      marginLeft: 20,
      marginRight :20,
    },
  
    modalWrapper: {
      flexDirection: 'column',
      margin: 20,
      padding: 10,
      color: '#000',
      borderRadius: 10,
      backgroundColor: '#fff',
      zIndex: 20, // works on ios
      elevation: 20, 
      height:"80%"
    },
    listItem:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      // alignItems: 'stretch' ,
      borderBottomColor:'#777',
      borderBottomWidth: StyleSheet.hairlineWidth,
  },
  
  modalHeaderText:{fontSize: 40},
  
  closeButton: {
    // alignSelf :'flex-end',
    color: '#f00', 
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
  