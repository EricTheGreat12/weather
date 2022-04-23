let city = '49546';
let key = 'b4aeac035ee123e34ece638cad464229';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

async function getWeatherData() {
  try {
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
  } catch (err) {
    console.log('err');
  }
}

let currentWeather = getWeatherData();
console.log(currentWeather);
