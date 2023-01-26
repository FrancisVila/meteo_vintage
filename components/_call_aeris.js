import { request } from "axios";

const aeris_options = {
  method: 'GET',
  url: 'https://aerisweather1.p.rapidapi.com/sunmoon/ankara,tr',
  headers: {
    'X-RapidAPI-Key': '9e5c32cc60mshc6ec5933e6be2ecp1d3a22jsn3e9e4fe94a43',
    'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
  }
};

request(aeris_options).then(function (response) {

}).catch(function (error) {

});