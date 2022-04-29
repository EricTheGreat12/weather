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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrRUFBa0UsWUFBWTtBQUM5RTtBQUNBLEtBQUssU0FBUywyQ0FBMkM7O0FBRXpEO0FBQ0Esd0NBQXdDLGNBQWM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixxREFBcUQsS0FBSztBQUMxRDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLFVBQVUsSUFBSSxpQkFBaUI7QUFDOUQ7QUFDQSwrQkFBK0IsMkJBQTJCLEdBQUcsU0FBUztBQUN0RSxvQ0FBb0M7QUFDcEM7QUFDQSxNQUFNLEdBQUcsU0FBUztBQUNsQiwrQkFBK0IsNkJBQTZCLEVBQUUsVUFBVTtBQUN4RSxtQ0FBbUMsbUJBQW1CO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5rZXkgPSAnYjRhZWFjMDM1ZWUxMjNlMzRlY2U2MzhjYWQ0NjQyMjknO1xuICAgIHRoaXMuc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuICAgIHRoaXMudW5pdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdHMnKTtcbiAgICB0aGlzLmNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpO1xuICAgIHRoaXMuY29uZGl0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25kaXRpb25zJyk7XG4gICAgdGhpcy50ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKTtcbiAgICB0aGlzLmZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVsc0xpa2UnKTtcbiAgICB0aGlzLndpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCcpO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcbiAgICB0aGlzLnRoZW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lJyk7XG4gIH1cblxuICAvL0NhbGxzIG9wZW53ZWF0aGVybWFwIGFwaVxuICBhc3luYyBnZXRXZWF0aGVyRGF0YShjaXR5KSB7XG4gICAgbGV0IHVybCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5LnRyaW0oKX0mYXBwaWQ9JHtcbiAgICAgIHRoaXMua2V5XG4gICAgfSZ1bml0cz0ke3RoaXMudW5pdHMuY2hlY2tlZCA/ICdtZXRyaWMnIDogJ2ltcGVyaWFsJ31gO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgdGhpcy51bml0cy5jaGVja2VkXG4gICAgICAgICAgPyB0aGlzLnVwZGF0ZShkYXRhLCAnQycsICdtL3MnKVxuICAgICAgICAgIDogdGhpcy51cGRhdGUoZGF0YSwgJ0YnLCAnTVBIJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlYXJjaEVycm9yKGBTb3JyeSwgd2UgY291bGRuJ3QgZmluZCBcIiR7Y2l0eX1cImApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5zZWFyY2hFcnJvcignTmV0d29yayBlcnJvcicpO1xuICAgIH1cbiAgICB0aGlzLnNlYXJjaC52YWx1ZSA9ICcnO1xuICB9XG5cbiAgLy91cGRhdGVzIGRvbSB3aXRoIG5ldyB3ZWF0aGVyIGRhdGFcbiAgdXBkYXRlKGRhdGEsIHRlbXBVbml0LCBzcGVlZFVuaXQpIHtcbiAgICB0aGlzLmNpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLm5hbWV9LCAke2RhdGEuc3lzLmNvdW50cnl9YDtcbiAgICB0aGlzLmNvbmRpdGlvbnMudGV4dENvbnRlbnQgPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgdGhpcy50ZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCl9wrAke3RlbXBVbml0fWA7XG4gICAgdGhpcy5mZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgZGF0YS5tYWluLmZlZWxzX2xpa2VcbiAgICApfcKwJHt0ZW1wVW5pdH1gO1xuICAgIHRoaXMud2luZC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS53aW5kLnNwZWVkKX0gJHtzcGVlZFVuaXR9YDtcbiAgICB0aGlzLmh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7ZGF0YS5tYWluLmh1bWlkaXR5fSVgO1xuICB9XG5cbiAgLy9hZGRzIGV2ZW50IGxpc3RlbmVyIGZvciBzZWFyY2ggZm9ybSBzdWJtaXRcbiAgc2VhcmNoTGlzdGVuZXIoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaEZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRoaXMuc2VhcmNoLnZhbHVlID09ICcnKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoRXJyb3IoJ1BsZWFzZSBlbnRlciBhIGNpdHkgbmFtZSBvciB6aXAgY29kZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nZXRXZWF0aGVyRGF0YSh0aGlzLnNlYXJjaC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2hFcnJvcihlcnJvck1lc3NhZ2UpIHtcbiAgICB0aGlzLnNlYXJjaC5zZXRDdXN0b21WYWxpZGl0eShlcnJvck1lc3NhZ2UpO1xuICAgIHRoaXMuc2VhcmNoLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgdGhpcy5zZWFyY2guc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICB9XG5cbiAgdW5pdHNMaXN0ZW5lcigpIHtcbiAgICB0aGlzLnVuaXRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZ2V0V2VhdGhlckRhdGEodGhpcy5jaXR5LnRleHRDb250ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vY2hhbmdlcyB0byBsaWdodCBjb2xvciBzY2hlbWVcbiAgY29sb3JTY2hlbWVMaWdodCgpIHtcbiAgICB0aGVtZS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XG4gICAgdGhlbWUuY2xhc3NMaXN0LmFkZCgnbGlnaHQnKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYmFja2dyb3VuZC1jb2xvcicsICcjZmZmZmZmJyk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvbnQtY29sb3InLCAnIzEyMTIxMicpO1xuICB9XG5cbiAgLy9jaGFuZ2VzIHRvIGRhcmsgY29sb3Igc2NoZW1lXG4gIGNvbG9yU2NoZW1lRGFyaygpIHtcbiAgICB0aGVtZS5jbGFzc0xpc3QucmVtb3ZlKCdsaWdodCcpO1xuICAgIHRoZW1lLmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYmFja2dyb3VuZC1jb2xvcicsICcjMTIxMjEyJyk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvbnQtY29sb3InLCAnI2ZmZmZmZicpO1xuICB9XG5cbiAgLy9nZXQgYnJvd3NlcidzIHByZWZlcmVkIGNvbG9yIHNjaGVtZVxuICAvL2xpc3RlbnMgZm9yIGNoYW5nZXMgdG8gYnJvd3NlcidzIGNvbG9yIHNjaGVtZVxuICAvL3RvZ2dsZXMgY29sb3Igc2NoZW1lIGJhc2VkIG9uIGNvbG9yIHNjaGVtZSBidXR0b24gY2xpY2tzXG4gIGdldENvbG9yU2NoZW1lKCkge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSkge1xuICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcykge1xuICAgICAgICB0aGlzLmNvbG9yU2NoZW1lRGFyaygpO1xuICAgICAgfVxuICAgICAgd2luZG93XG4gICAgICAgIC5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJylcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICAgIGV2ZW50Lm1hdGNoZXMgPyB0aGlzLmNvbG9yU2NoZW1lRGFyaygpIDogdGhpcy5jb2xvclNjaGVtZUxpZ2h0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnRoZW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMudGhlbWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrJykpIHtcbiAgICAgICAgdGhpcy5jb2xvclNjaGVtZUxpZ2h0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbG9yU2NoZW1lRGFyaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy9jYWxscyBtZXRob2RzIHRoYXQgcnVuIHBhZ2UgYW5kIGNhbGxzIGFwaSBmb3IgZGVmYXVsdCBjaXR5XG4gIHJ1bigpIHtcbiAgICB0aGlzLnNlYXJjaExpc3RlbmVyKCk7XG4gICAgdGhpcy51bml0c0xpc3RlbmVyKCk7XG4gICAgdGhpcy5nZXRDb2xvclNjaGVtZSgpO1xuICAgIHRoaXMuZ2V0V2VhdGhlckRhdGEoJ25vb2RsZScpO1xuICB9XG59XG5cbmxldCBwYWdlID0gbmV3IFBhZ2UoKTtcbnBhZ2UucnVuKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=