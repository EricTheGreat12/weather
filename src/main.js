async function getWeatherData() {
  let city = '48187';
  let key = 'b4aeac035ee123e34ece638cad464229';
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  try {
    let response = await fetch(url, { mode: 'cors' });
    let weatherData = await response.json();
    handleWeatherData(weatherData);
  } catch (err) {
    console.log(err);
  }
}

function handleWeatherData(weatherData) {
  //city
  document.querySelector('.city').textContent = weatherData.name;

  //temperatures and wind (add solution for no gust)
  let temp = weatherData.main.temp;
  let feelsLike = weatherData.main.feels_like;
  let tempUnit = 'C';
  let windSpeed = weatherData.wind.speed;
  let windGust = weatherData.wind.gust;
  let speedUnit = 'm/s';
  if (document.querySelector('.unit').dataset.value == 'i') {
    temp = tempToImp(temp);
    feelsLike = tempToImp(feelsLike);
    tempUnit = 'F';
    windSpeed = speedToImp(windSpeed);
    windGust = speedToImp(windGust);
    speedUnit = 'MPH';
  }

  document.querySelector('.temp').textContent = `${Math.round(
    temp
  )} ${tempUnit}`;

  document.querySelector('.feelsLike').textContent = `${Math.round(
    feelsLike
  )} ${tempUnit}`;

  document.querySelector('.wind').textContent = `From ${
    weatherData.wind.deg
  } DEG at ${Math.round(windSpeed)} ${speedUnit} gusts to ${Math.round(
    windGust
  )} ${speedUnit}`;
}

function tempToImp(temp) {
  return temp * 1.8 + 32;
}

function speedToImp(speed) {
  return speed * 2.23694;
}

getWeatherData();
