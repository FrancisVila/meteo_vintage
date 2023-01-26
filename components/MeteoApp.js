import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import { u } from './utils'

import Spinner from './spinner'
import MeteoDay from './MeteoDay'

import NavButtons from './NavButtons'
import ManageCommunes from './ManageCommunes'
import SearchCommune from './SearchCommune'


export default function MeteoApp () {
	u.permalog('MeteoApp enter =======================================')
	const apiKey = '477f078c4051f7949ab33b17f8a591e6'
	// let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${apiKey}`;
	let lat = 49.0889824331
	let lon = -0.608826965285
	const units = 'metric'
	const lang = 'fr'
	// full data retrieved from openweather
	const [apiData_, apiData_set] = useState({})
	// string, determines which screen is currently shown
	const [screenToShow_, screenToShow_set] = useState('Spinner')
	// not used
	const [currentCompo_, currentCompo_set] = useState(<Spinner />)
	// currentCommune_ an object in the form {"name": "Puteaux", lon:2.123456, etc}
	const [currentCommune_, currentCommune_set] = useState({ name: 'toto' })
	// the list of currentCommune_ type objects the user keeps
	const [userCommuneList_, userCommuneList_set] = useState([])
  
	const props = {
	  apiData_,
	  apiData_set,
	  screenToShow_,
	  screenToShow_set,
	  currentCompo_,
	  currentCompo_set,
	  currentCommune_,
	  currentCommune_set,
	  userCommuneList_,
	  userCommuneList_set
	}
	useEffect(() => {
		const rClS = async () => {
		  try {
			console.log('MeteoApp rClS enter')
			let newCommunes = await readDataFromFile('listUserCommunes.txt')
			// TODO remove this later, due to "long" hanging out in listUserCommunes.txt after replace change long => lon
			newCommunes = newCommunes.replace(', "long":', ', "lon":')
			console.log('newCommunes=', newCommunes)
			// newCommunes = newCommunes.replace(searchValue='long', 'lon', ) const original_string = 'v_toto'
			const regexFindVunderscore = /(v_)(\w+) /gim
			const string_output = original_string.replace(
			  regexFindVunderscore,
			  '$2 '
			)
			// string_output is 'toto '
			lat = newCommunes[0]['lat']
			lon = newCommunes[0]['lon']
			console.log('MeteoApp rClS 1 lat, lon=', lat, lon)
			newData = get_data_from_open_weather_map(lat, lon)
			console.log('MeteoApp rClS 1 apiData_set', newData)
			apiData_set(newData)
	
			screenToShow_set('MeteoDay')
		  } catch (err) {
			screenToShow_set('SearchCommune')
			// return Promise.reject(err);
		  }
		}
		rClS()
	  }, [])

	  useEffect(() => {}, [screenToShow_])

	  useEffect(() => {
		if (currentCommune_  === "Properties")
			screenToShow_set("Properties")
		else
		{
		console.log( 'currentCommune_, currentCommune_["lat"], currentCommune_["lat"] =', currentCommune_    ) 
		lat = currentCommune_['lat']
		lon = currentCommune_['lon']
		get_data_from_open_weather_map(lat, lon)}
	
	  }, [currentCommune_])

	  const readDataFromFile = async filename => {
		const fileUri = `${xfs.documentDirectory}${filename}`
		const strContent = await xfs.readAsStringAsync(fileUri, {
		  encoding: xfs.EncodingType.UTF8
		})
		return JSON.parse(strContent)
	  }

	  
  const d = new Date('November 20, 2022 01:15:00')
	  const get_data_from_open_weather_map = (lat, lon) => {
		console.log('get_data_from_open_weather_map = (lat, lon)=', lat, lon)
		const apiUrl = u.getApiOpenweathermap(apiKey, lat, lon, units, lang)
		fetch(apiUrl)
		  .then(res => res.json())
		  // {
		  //   console.log("apiUr=", apiUrl)
		  //   console.log("11111111111111111111111")
		  //   const j = await res.json()
		  //   console.log("j=", j)
		  //   return j})
	
		  // console.log("2222222222222222222")
		  // return res.json()})
		  .then(data => {
			// console.log('MeteoApp get_data_from_open_weather_map1 apiData_set', data)
			apiData_set(data)
			// console.log('MeteoApp get_data_from_open_weather_map1 apiData_', apiData_)
			const unixTime = data['list'][0]['dt']
			const dataDate = u.getDateFromUnix(unixTime)
			return data
		  })
	  }
	  const aDate = new Date(1668783600 * 1000)

// return <Text>{screenToShow_}</Text>


  if (screenToShow_ === 'Spinner') return <Spinner {...props} />
  if (screenToShow_ === 'MeteoDay') return <MeteoDay {...props} />
  if (screenToShow_ === 'Properties') return <Spinner {...props} />
  if (screenToShow_ === 'SearchCommune')   return <SearchCommune {...props} />
  
  }
