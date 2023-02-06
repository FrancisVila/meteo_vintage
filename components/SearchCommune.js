import {
  Text,
  TextInput,
  FlatList,
  View,
  Pressable,
  StyleSheet,
  Alert,
  Keyboard,
  Button
} from 'react-native'
import * as xfs from 'expo-file-system'
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus
} from 'expo-location'
import React, { useState, useEffect } from 'react'
import * as FileSystem from 'expo-file-system'
import Ionicons from '@expo/vector-icons/Ionicons'
import { u } from './utils'

export const SearchCommune = props => {
	u.permalog('entering SearchCommune')
  const getLocation = async () => {
    const location = await getCurrentPositionAsync()

    Alert.alert(
      ` lat: ${location.coords.latitude}, lng: ${location.coords.longitude},`
    )
    // );
  }

  const [userEntry_, userEntry_set] = useState('')
  const [listSelectableCommunes_, listSelectableCommunes_set] = useState([])
  const [modalVisible_, modalVisible_set] = useState(false)
  u.permalog('SearchCommune 1111111111111111')
  useEffect(() => {
    listSelectableCommunes_set(listBigCommunes())
    console.log('setting listSelectableCommunes_set to ', listBigCommunes())
  }, [])

  // min number of chars typed by user before showing list
  const MIN_CHARS_SHOW_LIST = 3
  u.permalog('SearchCommune 2222222222')
  const updateList = val => {
    userEntry_set('')
    if (val.length === 0) {
      const message = "Entrer le nom ou le code postal d'une commune"
      userEntry_set(message)
      return message
    }
    if (val[0] in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
      // user is entering a zip code
      if (val.length < 5) {
        const message = "Entrer le code postal d'une commune"
        userEntry_set(message)
        return message
      } else {
        // user finished typing a zip code
        const commune = communesFile.filter(c => c['zip'] === val)[0]
        if (typeof commune == 'object') {
          // userEntry_set(message)
          listSelectableCommunes_set([commune])
          return
        } else {
          // user entered a mix of letters and digits
          const message = `Merci de taper soit 5 chiffres pour un code postal, ou des lettres pour le nom d'une commune`
          userEntry_set(message)
          return message
        }
      }
    }
    // user is entering a place name

    val = val.toUpperCase()
    // console.log('val='+val)
    let listOfCommunes = ''

    if (val.length > MIN_CHARS_SHOW_LIST - 1) {
      const locList = []
      communesFile
        .filter(c => c['name'].startsWith(val))
        .forEach(commune => {
          const communeName = commune['name']
          const sstr = communeName.substring(0, val.length).toUpperCase()
          if (sstr === val) {
            // console.log(communeN
            locList.push(commune)
            // listSelectableCommunes_set((old)=>old.append(`${communeName} ${commune['zip']}`))
            // listOfCommunes = `${listOfCommunes}${communeName} ${commune['zip']} \n`
          }
        })

      listSelectableCommunes_set(locList)
    }
    return listOfCommunes
  }

  const listBigCommunes = () => {
    const bigCommunes = communesFile
      .filter(c => typeof c['rang'] === 'number')
      .sort((a, b) => a['rang'] - b['rang'])
    return bigCommunes
  }

  const handle_press_show_modal = async () => {
    await getLocation()

    listSelectableCommunes_set([])
    modalVisible_set(true)
  }

  const communesFile = require('./CommunesDeFrance.json')
  listBigCommunes()
  // console.log(`communes=${communes}`)
  // for (let i in communes){
  //   if (communes[i]['name'].substring(0,3) === 'BOU')
  //     console.log(`commune=${communes[i]['name']}`)
  // }
  // const communes = 'france-places.json'
  // console.log(FileSystem.documentDirectory)
  // const fileUri = `${FileSystem.documentDirectory}${communes}`;
  // console.log(fileUri)
  // console.log(`fileUri =${fileUri}`)
  // console.log(getString(fileUri))

  // const franceData  = JSON.parse(strContent)
  // toto = franceData[0][0]

  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 10
        }}
      />
      // <View
      //   style={{
      //     height: 3,
      //     width: "100%",
      //     backgroundColor: "#607D8B",
      //   }}
      // />
    )
  }

  // let props = props

  const saveFile = async (filename, strData) => {
    const fileUri = `${xfs.documentDirectory}${filename}`

    await xfs.writeAsStringAsync(fileUri, strData, {
      encoding: xfs.EncodingType.UTF8
    })
  }
  const readFile = async filename => {
    const fileUri = `${xfs.documentDirectory}${filename}`
    const strContent = await xfs.readAsStringAsync(fileUri, {
      encoding: xfs.EncodingType.UTF8
    })
    return strContent
  }

  const getItem = async location => {
    // params.addItemToList(location['name'])
	u.permalog('getItem 11111111111')
    console.log(
      `getItem location=${location} ${location['name']} ${location['lon']}`
    )
    // params.addItemToList(location)
    await props.currentCommune_set(location)

    Keyboard.dismiss()
    const alreadyInList = props.userCommuneList_.filter(
      c => c['name'] === location['name']
    ).length
    console.log(`getItem 1 userCommuneList_=${props.userCommuneList_}`)
    console.log(`getItem 2 alreadyInList=${alreadyInList}`)
    if (alreadyInList === 0) {
      const newList = [...props.userCommuneList_, location]
      console.log(`getItem 3 newList[0]["name"]=${newList[0]['name']}`)
      await props.userCommuneList_set(newList)
      await saveFile('listUserCommunes.txt', JSON.stringify(newList))
      console.log(`getItem 4 after saveFile}`)
    }
    props.screenToShow_set('MeteoDay')
  }

  const deleteItem = locationName => {
    Keyboard.dismiss()
    const newList = props.userCommuneList_.filter(
      c => c['name'] !== locationName
    )
    props.userCommuneList_set(newList)
  }

  const displayCommune = item => {
    let ret = ''
    try {
      // capitalizePlaceNames
      ret = u.capitalizePlaceNames(
        `${u.capitalizePlaceNames(item['name'])} ${item['zip']}`
      )
    } catch {
      ret = 'error?'
    }
    return ret
  }

  return ( <View style={[st.container]}>
      <View style={[st.layer_top]}>
        <TextInput
          placeholder='Entrer un nom de commune'
          style={[st.textInput]}
          autoCorrect={false}
          spellCheck={false}
          autoComplete='off'
          placeholderTextColor='#00000080'
          onChangeText={updateList}
        ></TextInput>
      </View>
      <View id='modalHeader' style={st.listItem}></View>
      <FlatList
        id='selectableList'
        ItemSeparatorComponent={ItemDivider}
        style={st.listOfCities}
        alwaysBounceVertical={false}
        data={listSelectableCommunes_}
        renderItem={itemData => {
          return (
            <View style={st.buttonItem}>
              <Pressable
                style={st.buttonItem}
                onPress={() =>{u.permalog('Press'); getItem(itemData.item)}}
              >
                <Text style={[st.buttonItem, st.buttonItemText]}>
                   {displayCommune(itemData.item)}{' '}
                </Text>
              </Pressable>
            </View>
          )
        }}
        keyExtractor={(item, index) => {
          return index.toString()
        }}
      />
      <Text style={st.red}>{userEntry_}</Text>
    </View>
  )
}

const st = StyleSheet.create({
	pink:{backgroundColor:'pink'},
	yellow:{backgroundColor:'yellow'},
	red:{backgroundColor:'red'},
	blue:{backgroundColor:'blue'},
	container:{width:'100%',height:'100%', padding:0, margin:50},
  	buttonItem: {
		backgroundColor: '#ddd',
		width: 300,
		textAlign: 'left',
		borderRadius: 20,
		color: '#000',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		alignSelf: 'center'
  },
  buttonItemText: {
    fontSize: 20,
    padding: 5
  },
  screenWrapper: {
    marginTop: 30
  },


  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'stretch' ,
    borderBottomColor: '#777',
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  modalHeaderText: { fontSize: 40 },

  closeButton: {
    // alignSelf :'flex-end',
    color: '#f00'
  },
  red: { color: '#f00' },

  listOfCities: {
    height: '70%',
    fontSize: 30,
    overflow: 'hidden',
    width: '100%',
    textAlign: 'center'
  },
  modal: {
    flexDirection: 'column'
  },

  modalSemiTrans: {
    backgroundColor: '#300',
    height: '100%',
    width: '100%',
    opacity: 0.5
  },

  topRight: {
    textAlign: 'right'
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
    fontSize: 25
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
    alignSelf: 'center'
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
  },
  layer_top: {
marginTop: 50,
marginRight:20,
marginLeft: 20,
marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SearchCommune
