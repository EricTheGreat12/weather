/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
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
      if (data.cod == 200) {
        units.checked
          ? this.update(data, 'C', 'm/s')
          : this.update(data, 'F', 'MPH');
        location.value = '';
        return;
      } else {
        console.log(data.message);
      }
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

  //gets preferred color scheme and listens for changes to preferred
  //color scheme

  //toggles color scheme on button click
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVMsSUFBSSxTQUFTLHNDQUFzQztBQUNqRTtBQUNBLHdDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixVQUFVLElBQUksaUJBQWlCO0FBQzlEO0FBQ0EsK0JBQStCLDJCQUEyQixHQUFHLFNBQVM7QUFDdEUsb0NBQW9DO0FBQ3BDO0FBQ0EsTUFBTSxHQUFHLFNBQVM7QUFDbEIsK0JBQStCLDZCQUE2QixFQUFFLFVBQVU7QUFDeEUsbUNBQW1DLG1CQUFtQjtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKTtcbiAgICB0aGlzLmNvbmRpdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZGl0aW9ucycpO1xuICAgIHRoaXMudGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wJyk7XG4gICAgdGhpcy5mZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHNMaWtlJyk7XG4gICAgdGhpcy53aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQnKTtcbiAgICB0aGlzLmh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5Jyk7XG4gICAgdGhpcy50aGVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZScpO1xuICB9XG5cbiAgLy9DYWxscyBvcGVud2VhdGhlcm1hcCBhcGkgZm9yIGN1cnJlbnQgd2VhdGhlciBpbiBzZWFyY2ggYmFyIGxvY2F0aW9uXG4gIC8vT3IgdXNlcyBjaXR5IG5hbWUgcGFzc2VkIGluIGFzIHBhcmFtZXRlclxuICBhc3luYyBnZXRXZWF0aGVyRGF0YShjaXR5KSB7XG4gICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuICAgIGxldCB1bml0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml0cycpO1xuICAgIGxldCBrZXkgPSAnYjRhZWFjMDM1ZWUxMjNlMzRlY2U2MzhjYWQ0NjQyMjknO1xuICAgIGxldCB1cmwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7XG4gICAgICBjaXR5ID8gY2l0eSA6IGxvY2F0aW9uLnZhbHVlXG4gICAgfSZhcHBpZD0ke2tleX0mdW5pdHM9JHt1bml0cy5jaGVja2VkID8gJ21ldHJpYycgOiAnaW1wZXJpYWwnfWA7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGlmIChkYXRhLmNvZCA9PSAyMDApIHtcbiAgICAgICAgdW5pdHMuY2hlY2tlZFxuICAgICAgICAgID8gdGhpcy51cGRhdGUoZGF0YSwgJ0MnLCAnbS9zJylcbiAgICAgICAgICA6IHRoaXMudXBkYXRlKGRhdGEsICdGJywgJ01QSCcpO1xuICAgICAgICBsb2NhdGlvbi52YWx1ZSA9ICcnO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy9IQU5ETEUgRVJST1JTXG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9XG5cbiAgLy91cGRhdGVzIGRvbSB3aXRoIG5ldyB3ZWF0aGVyIGRhdGFcbiAgdXBkYXRlKGRhdGEsIHRlbXBVbml0LCBzcGVlZFVuaXQpIHtcbiAgICB0aGlzLmNpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLm5hbWV9LCAke2RhdGEuc3lzLmNvdW50cnl9YDtcbiAgICB0aGlzLmNvbmRpdGlvbnMudGV4dENvbnRlbnQgPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgdGhpcy50ZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCl9wrAke3RlbXBVbml0fWA7XG4gICAgdGhpcy5mZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgZGF0YS5tYWluLmZlZWxzX2xpa2VcbiAgICApfcKwJHt0ZW1wVW5pdH1gO1xuICAgIHRoaXMud2luZC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS53aW5kLnNwZWVkKX0gJHtzcGVlZFVuaXR9YDtcbiAgICB0aGlzLmh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7ZGF0YS5tYWluLmh1bWlkaXR5fSVgO1xuICB9XG5cbiAgZGVmYXVsdChjaXR5KSB7XG4gICAgdGhpcy5nZXRXZWF0aGVyRGF0YShjaXR5KTtcbiAgfVxuXG4gIGNvbG9yU2NoZW1lTGlnaHQoKSB7XG4gICAgdGhlbWUuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpO1xuICAgIHRoZW1lLmNsYXNzTGlzdC5hZGQoJ2xpZ2h0Jyk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWJhY2tncm91bmQtY29sb3InLCAnI2ZmZmZmZicpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb250LWNvbG9yJywgJyMxMjEyMTInKTtcbiAgfVxuXG4gIGNvbG9yU2NoZW1lRGFyaygpIHtcbiAgICB0aGVtZS5jbGFzc0xpc3QucmVtb3ZlKCdsaWdodCcpO1xuICAgIHRoZW1lLmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYmFja2dyb3VuZC1jb2xvcicsICcjMTIxMjEyJyk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvbnQtY29sb3InLCAnI2ZmZmZmZicpO1xuICB9XG5cbiAgLy9nZXRzIHByZWZlcnJlZCBjb2xvciBzY2hlbWUgYW5kIGxpc3RlbnMgZm9yIGNoYW5nZXMgdG8gcHJlZmVycmVkXG4gIC8vY29sb3Igc2NoZW1lXG5cbiAgLy90b2dnbGVzIGNvbG9yIHNjaGVtZSBvbiBidXR0b24gY2xpY2tcbiAgZ2V0Q29sb3JTY2hlbWUoKSB7XG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKSB7XG4gICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKSB7XG4gICAgICAgIHRoaXMuY29sb3JTY2hlbWVEYXJrKCk7XG4gICAgICB9XG4gICAgICB3aW5kb3dcbiAgICAgICAgLm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgZXZlbnQubWF0Y2hlcyA/IHRoaXMuY29sb3JTY2hlbWVEYXJrKCkgOiB0aGlzLmNvbG9yU2NoZW1lTGlnaHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudGhlbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy50aGVtZS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmsnKSkge1xuICAgICAgICB0aGlzLmNvbG9yU2NoZW1lTGlnaHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sb3JTY2hlbWVEYXJrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxubGV0IHBhZ2UgPSBuZXcgUGFnZSgpO1xucGFnZS5nZXRDb2xvclNjaGVtZSgpO1xucGFnZS5kZWZhdWx0KCdub29kbGUnKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaEZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHBhZ2UuZ2V0V2VhdGhlckRhdGEoKTtcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdHMnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gIHBhZ2UuZ2V0V2VhdGhlckRhdGEoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKS50ZXh0Q29udGVudCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==