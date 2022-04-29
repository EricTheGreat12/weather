class Page {
  constructor() {
    this.key = 'b4aeac035ee123e34ece638cad464229';
    this.search = document.getElementById('search');
    this.units = document.getElementById('units');
    this.city = document.querySelector('.city');
    this.conditions = document.querySelector('.conditions');
    this.temp = document.querySelector('.temp');
    this.feelsLike = document.querySelector('.feelsLike');
    this.wind = document.querySelector('.wind');
    this.humidity = document.querySelector('.humidity');
    this.theme = document.getElementById('theme');
  }

  //Calls openweathermap api
  async getWeatherData(city) {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${
      this.key
    }&units=${this.units.checked ? 'metric' : 'imperial'}`;

    try {
      let response = await fetch(url, { mode: 'cors' });
      if (response.status == 200) {
        let data = await response.json();
        this.units.checked
          ? this.update(data, 'C', 'm/s')
          : this.update(data, 'F', 'MPH');
      } else {
        this.searchError(`Sorry, we couldn't find "${city}"`);
      }
    } catch (err) {
      this.searchError('Network error');
    }
    this.search.value = '';
  }

  //maybe add loading content later. maybe not
  loading() {
    this.city.textContent = '--';
    this.conditions.textContent = '--';
    this.temp.textContent = '--';
    this.feelsLike.textContent = '--';
    this.wind.textContent = '--';
    this.humidity.textContent = '--';
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

  //adds event listener for search form submit
  searchListener() {
    document.querySelector('.searchForm').addEventListener('submit', (e) => {
      e.preventDefault();
      if (this.search.value == '') {
        this.searchError('Please enter a city name or zip code');
      } else {
        this.getWeatherData(this.search.value);
      }
    });
  }

  searchError(errorMessage) {
    this.search.setCustomValidity(errorMessage);
    this.search.reportValidity();
    this.search.setCustomValidity('');
  }

  unitsListener() {
    this.units.addEventListener('change', () => {
      this.getWeatherData(this.city.textContent);
    });
  }

  //changes to light color scheme
  colorSchemeLight() {
    theme.classList.remove('dark');
    theme.classList.add('light');
    document.documentElement.style.setProperty('--background-color', '#ffffff');
    document.documentElement.style.setProperty('--font-color', '#121212');
  }

  //changes to dark color scheme
  colorSchemeDark() {
    theme.classList.remove('light');
    theme.classList.add('dark');
    document.documentElement.style.setProperty('--background-color', '#121212');
    document.documentElement.style.setProperty('--font-color', '#ffffff');
  }

  //get browser's prefered color scheme
  //listens for changes to browser's color scheme
  //toggles color scheme based on color scheme button clicks
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

  //calls methods that run page and calls api for default city
  run() {
    this.loading();
    this.searchListener();
    this.unitsListener();
    this.getColorScheme();
    this.getWeatherData('noodle');
  }
}

let page = new Page();
page.run();
