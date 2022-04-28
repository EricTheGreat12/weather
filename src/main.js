class Page {
  constructor() {
    this.city = document.querySelector('.city');
    this.conditions = document.querySelector('.conditions');
    this.temp = document.querySelector('.temp');
    this.feelsLike = document.querySelector('.feelsLike');
    this.wind = document.querySelector('.wind');
    this.humidity = document.querySelector('.humidity');
    this.theme = document.getElementById('theme');
  }

  //Calls openweathermap api for current weather in search bar location
  //Or uses city name passed in as parameter
  async getWeatherData(city) {
    let location = document.getElementById('search');
    let units = document.getElementById('units');
    let key = 'b4aeac035ee123e34ece638cad464229';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${
      city ? city : location.value
    }&appid=${key}&units=${units.checked ? 'metric' : 'imperial'}`;
    try {
      let response = await fetch(url, { mode: 'cors' });
      let data = await response.json();
      units.checked
        ? this.update(data, 'C', 'm/s')
        : this.update(data, 'F', 'MPH');
      location.value = '';
      return;
    } catch (err) {
      //HANDLE ERRORS
      throw err;
    }
  }

  //updates dom with new weather data
  update(data, tempUnit, speedUnit) {
    this.city.textContent = `${data.name}, ${data.sys.country}`;
    this.conditions.textContent = data.weather[0].description;
    this.temp.textContent = `${Math.round(data.main.temp)}°${tempUnit}`;
    this.feelsLike.textContent = `${Math.round(
      data.main.feels_like
    )}°${tempUnit}`;
    this.wind.textContent = `${Math.round(data.wind.speed)} ${speedUnit}`;
    this.humidity.textContent = `${data.main.humidity}%`;
  }

  default(city) {
    this.getWeatherData(city);
  }

  colorSchemeLight() {
    theme.classList.remove('dark');
    theme.classList.add('light');
    document.documentElement.style.setProperty('--background-color', '#ffffff');
    document.documentElement.style.setProperty('--font-color', '#121212');
  }

  colorSchemeDark() {
    theme.classList.remove('light');
    theme.classList.add('dark');
    document.documentElement.style.setProperty('--background-color', '#121212');
    document.documentElement.style.setProperty('--font-color', '#ffffff');
  }

  getColorScheme() {
    if (window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.colorSchemeDark();
      }
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (event) => {
          event.matches ? this.colorSchemeDark() : this.colorSchemeLight();
        });
    }
    this.theme.addEventListener('click', () => {
      if (this.theme.classList.contains('dark')) {
        this.colorSchemeLight();
      } else {
        this.colorSchemeDark();
      }
    });
  }
}

let page = new Page();
page.getColorScheme();
page.default('noodle');

document.querySelector('.searchForm').addEventListener('submit', (e) => {
  e.preventDefault();
  page.getWeatherData();
});

document.getElementById('units').addEventListener('change', () => {
  page.getWeatherData(document.querySelector('.city').textContent);
});

document
  .getElementById('theme')
  .addEventListener('click', page.toggleColorScheme);
