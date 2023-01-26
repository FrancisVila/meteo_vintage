import { Text, View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { u } from './utils'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'

export const CommuneSwiper = props => {
  console.log('Enter CommuneSwiper ================================')
  // console.log('CommuneSwiper props=', props)
  const userCommuneList_ = props.userCommuneList_
  const currentCommune_ = props.currentCommune_
  const userCommuneList_set = props.userCommuneList_set
  const currentCommune_set = props.currentCommune_set

  // console.log(`1 inside CommuneSwiper userCommuneList_=${userCommuneList_}`)
  // console.log(`2 inside CommuneSwiper userCommuneList_[0]=${userCommuneList_[0]}`)
  // console.log(`3 inside CommuneSwiper userCommuneList_[0]['name']=${userCommuneList_[0]['name']}`)
  const abbrevList = Array.from(userCommuneList_, loc => loc['name'][0])
  const locList = abbrevList.join(' ')
  // expected output: Array [2, 4, 6]

  const currentIdx = () => {
    let idx = 0
    userCommuneList_.forEach(commune => {
      if (commune['name'] === currentCommune_['name']) return idx
      else idx += 1
    })

    return idx
  }

  
  const targetIdx = idx => {
    const ret = idx % userCommuneList_.length
	console.log("setting ")
    return ret
  }

  // direction=+1 for swipe right, -1 for left (or the opposite?)
  const onSwipeCommune = async (direction = +1) => {
    console.log('swipe direction ' + direction)
	// +1 because there's a configuration page after the list of communes
    const newIdx = (currentIdx() + direction) % (userCommuneList_.length +1)
	if (newIdx == userCommuneList_.length)
		{
			console.log("swipe to Properties")
			currentCommune_set("Properties")
		}
	else{
		console.log("Commune")
    	await currentCommune_set(userCommuneList_[targetIdx(newIdx)])
	}
	console.log('swipe newIdx ' + newIdx)
    // this.setState({myText: 'You swiped left!'});
  }

  //   const onSwipeRight= async (commune) => {
  //     console.log('4 inside CommuneSwiper You swiped right!')
  //     console.log(userCommuneList_ [currentIdx()])
  //     console.log('ZZZZZZZZZZ')
  //     const newIdx = currentIdx()+1
  //     await currentCommune_set( userCommuneList_ [targetIdx (newIdx)] )
  //     props.navigation.navigate ('MeteoDay')
  //     // this.setState({myText: 'You swiped left!'});
  //   }

  const styleToApply = (commune = currentCommune_, viewOrText = 'view') => {
    let styleStr = ''
    if (commune['name'] !== currentCommune_['name']) styleStr = 'un_'
    if (viewOrText === 'view') styleStr += 'selectedView'
    else styleStr += 'selectedText'
    return st[styleStr]
  }

  return (
    <GestureRecognizer
      onSwipeLeft={async () => await onSwipeCommune(-1)}
      onSwipeRight={async () => await onSwipeCommune(+1)}
    >
      <View
        style={{
          backgroundColor: 'red',
          flexDirection: 'row',
          height: 20,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%'
        }}
      >
        {userCommuneList_.map(commune => (
          <View style={styleToApply(commune, 'view')} key={commune['name']}>
            <Text style={styleToApply(commune, 'text')}>
              {commune['name'][0]}
            </Text>
          </View>
        ))}
        <View style={st.un_selectedView}>
          <Text style={st.un_selectedText}>*</Text>
        </View>
      </View>
    </GestureRecognizer>
  )
  //
}

export default CommuneSwiper

const st = StyleSheet.create({
  selectedView: {
    borderRadius: 10,
    backgroundColor: '#004',
    marginRight: 5,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 12
  },
  selectedText: {
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 10,
    fontWeight: 'bold'
  },
  un_selectedView: {
    borderRadius: 10,
    backgroundColor: '#fff',
    marginRight: 5,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 12
  },
  un_selectedText: {
    color: '#004',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 10
  }
})
