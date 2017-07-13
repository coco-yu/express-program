var weather = [
  {
    name: 'beijing',
    weather: 'Overfast',
    temp: '20°C'
  },{
    name: 'shanghai',
    weather: 'Light rain',
    temp: '30°C'
  },{
    name: 'hangzhou',
    weather: 'Cloudy',
    temp: '40°C'
  }
];
exports.getWeather = function(){
  var weatherItem = weather[Math.floor(Math.random() * weather.length)];
  return weatherItem;
}