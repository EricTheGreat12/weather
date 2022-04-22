let city = '49546';
let key = 'b4aeac035ee123e34ece638cad464229';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

async function getWeather() {
  try {
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log('err');
  }
}

getWeather();
