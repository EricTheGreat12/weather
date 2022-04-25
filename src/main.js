async function getWeatherData(city) {
  let location = document.getElementById('search');
  let units = document.getElementById('units').dataset.value;
  let key = 'b4aeac035ee123e34ece638cad464229';
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${
    city ? city : location.value
  }&appid=${key}&units=${units}`;
  try {
    let response = await fetch(url, { mode: 'cors' });
    let data = await response.json();
    units === 'metric'
      ? page.update(data, 'C', 'm/s')
      : page.update(data, 'F', 'MPH');

    location.value = '';
    return;
  } catch (err) {
    throw err;
  }
}

class Page {
  constructor() {
    this.city = document.querySelector('.city');
    this.conditions = document.querySelector('.conditions');
    this.temp = document.querySelector('.temp');
    this.feelsLike = document.querySelector('.feelsLike');
    this.wind = document.querySelector('.wind');
    this.humidity = document.querySelector('.humidity');
  }

  update(data, tempUnit, speedUnit) {
    this.city.textContent = data.name;
    this.conditions.textContent = data.weather[0].description;
    this.temp.textContent = `${Math.round(data.main.temp)}°${tempUnit}`;
    this.feelsLike.textContent = `${Math.round(
      data.main.feels_like
    )}°${tempUnit}`;
    this.wind.textContent = `${Math.round(data.wind.speed)} ${speedUnit}`;
    this.humidity.textContent = `${data.main.humidity}%`;
  }

  default(city) {
    getWeatherData(city);
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

document.querySelector('.searchForm').addEventListener('submit', (e) => {
  e.preventDefault();
  getWeatherData();
});

let page = new Page();
page.default('detroit');
