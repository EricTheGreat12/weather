/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrRUFBa0UsWUFBWTtBQUM5RTtBQUNBLEtBQUssU0FBUywyQ0FBMkM7O0FBRXpEO0FBQ0Esd0NBQXdDLGNBQWM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixxREFBcUQsS0FBSztBQUMxRDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixVQUFVLElBQUksaUJBQWlCO0FBQzlEO0FBQ0EsK0JBQStCLDJCQUEyQixHQUFHLFNBQVM7QUFDdEUsb0NBQW9DO0FBQ3BDO0FBQ0EsTUFBTSxHQUFHLFNBQVM7QUFDbEIsK0JBQStCLDZCQUE2QixFQUFFLFVBQVU7QUFDeEUsbUNBQW1DLG1CQUFtQjtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5rZXkgPSAnYjRhZWFjMDM1ZWUxMjNlMzRlY2U2MzhjYWQ0NjQyMjknO1xuICAgIHRoaXMuc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuICAgIHRoaXMudW5pdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdHMnKTtcbiAgICB0aGlzLmNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpO1xuICAgIHRoaXMuY29uZGl0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25kaXRpb25zJyk7XG4gICAgdGhpcy50ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKTtcbiAgICB0aGlzLmZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVsc0xpa2UnKTtcbiAgICB0aGlzLndpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCcpO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcbiAgICB0aGlzLnRoZW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lJyk7XG4gIH1cblxuICAvL0NhbGxzIG9wZW53ZWF0aGVybWFwIGFwaVxuICBhc3luYyBnZXRXZWF0aGVyRGF0YShjaXR5KSB7XG4gICAgbGV0IHVybCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5LnRyaW0oKX0mYXBwaWQ9JHtcbiAgICAgIHRoaXMua2V5XG4gICAgfSZ1bml0cz0ke3RoaXMudW5pdHMuY2hlY2tlZCA/ICdtZXRyaWMnIDogJ2ltcGVyaWFsJ31gO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgdGhpcy51bml0cy5jaGVja2VkXG4gICAgICAgICAgPyB0aGlzLnVwZGF0ZShkYXRhLCAnQycsICdtL3MnKVxuICAgICAgICAgIDogdGhpcy51cGRhdGUoZGF0YSwgJ0YnLCAnTVBIJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlYXJjaEVycm9yKGBTb3JyeSwgd2UgY291bGRuJ3QgZmluZCBcIiR7Y2l0eX1cImApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5zZWFyY2hFcnJvcignTmV0d29yayBlcnJvcicpO1xuICAgIH1cbiAgICB0aGlzLnNlYXJjaC52YWx1ZSA9ICcnO1xuICB9XG5cbiAgLy9tYXliZSBhZGQgbG9hZGluZyBjb250ZW50IGxhdGVyLiBtYXliZSBub3RcbiAgbG9hZGluZygpIHtcbiAgICB0aGlzLmNpdHkudGV4dENvbnRlbnQgPSAnLS0nO1xuICAgIHRoaXMuY29uZGl0aW9ucy50ZXh0Q29udGVudCA9ICctLSc7XG4gICAgdGhpcy50ZW1wLnRleHRDb250ZW50ID0gJy0tJztcbiAgICB0aGlzLmZlZWxzTGlrZS50ZXh0Q29udGVudCA9ICctLSc7XG4gICAgdGhpcy53aW5kLnRleHRDb250ZW50ID0gJy0tJztcbiAgICB0aGlzLmh1bWlkaXR5LnRleHRDb250ZW50ID0gJy0tJztcbiAgfVxuXG4gIC8vdXBkYXRlcyBkb20gd2l0aCBuZXcgd2VhdGhlciBkYXRhXG4gIHVwZGF0ZShkYXRhLCB0ZW1wVW5pdCwgc3BlZWRVbml0KSB7XG4gICAgdGhpcy5jaXR5LnRleHRDb250ZW50ID0gYCR7ZGF0YS5uYW1lfSwgJHtkYXRhLnN5cy5jb3VudHJ5fWA7XG4gICAgdGhpcy5jb25kaXRpb25zLnRleHRDb250ZW50ID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMudGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5tYWluLnRlbXApfcKwJHt0ZW1wVW5pdH1gO1xuICAgIHRoaXMuZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgIGRhdGEubWFpbi5mZWVsc19saWtlXG4gICAgKX3CsCR7dGVtcFVuaXR9YDtcbiAgICB0aGlzLndpbmQudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEud2luZC5zcGVlZCl9ICR7c3BlZWRVbml0fWA7XG4gICAgdGhpcy5odW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2RhdGEubWFpbi5odW1pZGl0eX0lYDtcbiAgfVxuXG4gIC8vYWRkcyBldmVudCBsaXN0ZW5lciBmb3Igc2VhcmNoIGZvcm0gc3VibWl0XG4gIHNlYXJjaExpc3RlbmVyKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hGb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLnNlYXJjaC52YWx1ZSA9PSAnJykge1xuICAgICAgICB0aGlzLnNlYXJjaEVycm9yKCdQbGVhc2UgZW50ZXIgYSBjaXR5IG5hbWUgb3IgemlwIGNvZGUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2V0V2VhdGhlckRhdGEodGhpcy5zZWFyY2gudmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoRXJyb3IoZXJyb3JNZXNzYWdlKSB7XG4gICAgdGhpcy5zZWFyY2guc2V0Q3VzdG9tVmFsaWRpdHkoZXJyb3JNZXNzYWdlKTtcbiAgICB0aGlzLnNlYXJjaC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIHRoaXMuc2VhcmNoLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgfVxuXG4gIHVuaXRzTGlzdGVuZXIoKSB7XG4gICAgdGhpcy51bml0cy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmdldFdlYXRoZXJEYXRhKHRoaXMuY2l0eS50ZXh0Q29udGVudCk7XG4gICAgfSk7XG4gIH1cblxuICAvL2NoYW5nZXMgdG8gbGlnaHQgY29sb3Igc2NoZW1lXG4gIGNvbG9yU2NoZW1lTGlnaHQoKSB7XG4gICAgdGhlbWUuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpO1xuICAgIHRoZW1lLmNsYXNzTGlzdC5hZGQoJ2xpZ2h0Jyk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWJhY2tncm91bmQtY29sb3InLCAnI2ZmZmZmZicpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb250LWNvbG9yJywgJyMxMjEyMTInKTtcbiAgfVxuXG4gIC8vY2hhbmdlcyB0byBkYXJrIGNvbG9yIHNjaGVtZVxuICBjb2xvclNjaGVtZURhcmsoKSB7XG4gICAgdGhlbWUuY2xhc3NMaXN0LnJlbW92ZSgnbGlnaHQnKTtcbiAgICB0aGVtZS5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWJhY2tncm91bmQtY29sb3InLCAnIzEyMTIxMicpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb250LWNvbG9yJywgJyNmZmZmZmYnKTtcbiAgfVxuXG4gIC8vZ2V0IGJyb3dzZXIncyBwcmVmZXJlZCBjb2xvciBzY2hlbWVcbiAgLy9saXN0ZW5zIGZvciBjaGFuZ2VzIHRvIGJyb3dzZXIncyBjb2xvciBzY2hlbWVcbiAgLy90b2dnbGVzIGNvbG9yIHNjaGVtZSBiYXNlZCBvbiBjb2xvciBzY2hlbWUgYnV0dG9uIGNsaWNrc1xuICBnZXRDb2xvclNjaGVtZSgpIHtcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEpIHtcbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5jb2xvclNjaGVtZURhcmsoKTtcbiAgICAgIH1cbiAgICAgIHdpbmRvd1xuICAgICAgICAubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBldmVudC5tYXRjaGVzID8gdGhpcy5jb2xvclNjaGVtZURhcmsoKSA6IHRoaXMuY29sb3JTY2hlbWVMaWdodCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy50aGVtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnRoZW1lLmNsYXNzTGlzdC5jb250YWlucygnZGFyaycpKSB7XG4gICAgICAgIHRoaXMuY29sb3JTY2hlbWVMaWdodCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb2xvclNjaGVtZURhcmsoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vY2FsbHMgbWV0aG9kcyB0aGF0IHJ1biBwYWdlIGFuZCBjYWxscyBhcGkgZm9yIGRlZmF1bHQgY2l0eVxuICBydW4oKSB7XG4gICAgdGhpcy5sb2FkaW5nKCk7XG4gICAgdGhpcy5zZWFyY2hMaXN0ZW5lcigpO1xuICAgIHRoaXMudW5pdHNMaXN0ZW5lcigpO1xuICAgIHRoaXMuZ2V0Q29sb3JTY2hlbWUoKTtcbiAgICB0aGlzLmdldFdlYXRoZXJEYXRhKCdub29kbGUnKTtcbiAgfVxufVxuXG5sZXQgcGFnZSA9IG5ldyBQYWdlKCk7XG5wYWdlLnJ1bigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9