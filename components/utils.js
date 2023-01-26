
import React, { useState , useContext} from 'react';
// import {documentDirectory} from "expo-file-system"


// import * as x from "expo-file-system"
 

const capitalizePlaceNames = (placeName) =>
{
    if (!placeName)
        return 'No place'
    const words = placeName.split(" ");
let capi = words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1).toLowerCase(); 
}).join(" ");
capi = capi.replace(/\sSur\s/g, " sur ") 
capi = capi.replace(/\sLe\s/g, " le ") 
capi = capi.replace(/\sLa\s/g, " la ")
capi = capi.replace(/\sEn\s/g, " en ")
return capi
}

const capitalizeFirstLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1)

// international:
// replace this with moment
const getDayInFrench=(date, format='mmmm')=> {

    const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre']
    const joursSemaine = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
    let ret = mois [date.getMonth()]
    switch (format)
      {
        case 'mmmm': return ret;break;
        case 'Mmmm' : return capitalizeFirstLetter(ret);break;
        case 'MMMM' : return (ret.toUpperCase());break;
      }
        ret=ret.substring(0,3)
        switch (format)
        {
        case 'mmm': return ret;break;
        case 'Mmm' : return capitalizeFirstLetter(ret);break;
        case 'MMM' : return (ret.toUpperCase());break;
        }
        ret=ret.substring(0,2)
        switch (format)
        {
        case 'mm': return ret;break;
        case 'Mm' : return capitalizeFirstLetter(ret);break;
        case 'MM' : return (ret.toUpperCase());break;
        }
        ret=ret.substring(0,1)
        switch (format)
        {
        case 'm': return ret;break;
        case 'M' : return (ret.toUpperCase());break;
        }
        ret = joursSemaine [date.getDay()]
        switch (format)
        {
            case 'dddd': return ret;break;
            case 'Dddd' : return capitalizeFirstLetter(ret);break;
            case 'DDDD' : return (ret.toUpperCase());break;
          }
            ret=ret.substring(0,3)
            switch (format)
            {
            case 'ddd': return ret;break;
            case 'Ddd' : return capitalizeFirstLetter(ret);break;
            case 'DDD' : return (ret.toUpperCase());break;
            }
            ret=ret.substring(0,2)
            switch (format)
            {
            case 'dd': return ret;break;
            case 'Dd' : return capitalizeFirstLetter(ret);break;
            case 'DD' : return (ret.toUpperCase());break;
            }
            ret=ret.substring(0,1)
            switch (format)
            {
            case 'd': return ret;break;
            case 'D' : return (ret.toUpperCase());break;
            }
      return ret
  }
  // highly confusing javascript!!!
  // first ... is the "rest" operator, meaning all the other args, ex ("toto=", toto, tata) ...args is [toto, tata]
  // second ... is "spread" operator [toto, tata] => toto, tata
  const permalog = (mess, ...args)=> console.log(mess, ...args)

  const getApiOpenweathermap=(apiKey, lat=49.0889824331,   lon=-0.608826965285,   units = 'metric',   lang = 'fr')=>
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}&lang=${lang}`

const getDateFromUnix=(unixDate)=> new Date(unixDate * 1000); 


// taken from https://stackoverflow.com/questions/64478212/any-easy-way-to-import-multiple-image-files-at-once-in-react
// use as <img src={images["banner1.png"]} />
const importAll = (r) => {
// removed, see https://stackoverflow.com/questions/51319209/critical-dependency-require-function-is-used-in-a-way-in-which-dependencies-can
  // const importObj = require.context(r, false, /\.svg/)


  let images = {};
  importObj.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

// const saveFile = async (filename, strData) => {
//   const fileUri = `${x.documentDirectory}${filename}`;
//   // 
//   await x.writeAsStringAsync(fileUri, strData, { encoding: EncodingType.UTF8 });


//   // const path = `${DocumentDirectoryPath}/${Date.now()}.txt`;
  
// };

// const readFile = async(filename) => {
//   const fileUri = `${x.documentDirectory}${filename}`;
//   const strContent = await x.readAsStringAsync(fileUri,{ encoding: EncodingType.UTF8 });
//   return strContent
  
// }



// export const FileHandler = (props) => {
//   const saveFile = async (filename, strData) => {
//     const fileUri = `${x.documentDirectory}${filename}`;
//     // 
//     await x.writeAsStringAsync(fileUri, strData, { encoding: EncodingType.UTF8 });
  
  
//     // const path = `${DocumentDirectoryPath}/${Date.now()}.txt`;
    
//   };
  
//   const readFile = async(filename) => {
//     const fileUri = `${x.documentDirectory}${filename}`;
//     const strContent = await x.readAsStringAsync(fileUri,{ encoding: EncodingType.UTF8 });
//     return strContent
    
//   }
//   return (
//     <Text>{props.label}</Text>
//   );
// }

// export default FileHandler;

export const u = {permalog, capitalizePlaceNames, getDayInFrench, getApiOpenweathermap, getDateFromUnix, importAll}


