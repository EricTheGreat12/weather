function help() {
  console.log('asdf');
  return true;
}

async function getWeatherData() {
  let location = document.getElementById('search');
  let units = document.getElementById('units').dataset.value;
  let key = 'b4aeac035ee123e34ece638cad464229';
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=${key}&units=${units}`;
  try {
    let response = await fetch(url, { mode: 'cors' });
    let weatherData = await response.json();
    console.log(weatherData);
    location.value = '';
    return weatherData;
  } catch (err) {
    throw err;
  }
}

//celsius to fahrenheit
function tempToImp(temp) {
  return temp * 1.8 + 32;
}

//meters/second to miles/hour
function speedToImp(speed) {
  return speed * 2.23694;
}

async function test() {
  let data = await getWeatherData();
  console.log(data.sys);
}

document.querySelector('.searchForm').addEventListener('submit', (e) => {
  e.preventDefault();
  getWeatherData();
});
