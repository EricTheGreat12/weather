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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVMsSUFBSSxTQUFTLHNDQUFzQztBQUNqRTtBQUNBLHdDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLFVBQVUsSUFBSSxpQkFBaUI7QUFDOUQ7QUFDQSwrQkFBK0IsMkJBQTJCLEdBQUcsU0FBUztBQUN0RSxvQ0FBb0M7QUFDcEM7QUFDQSxNQUFNLEdBQUcsU0FBUztBQUNsQiwrQkFBK0IsNkJBQTZCLEVBQUUsVUFBVTtBQUN4RSxtQ0FBbUMsbUJBQW1CO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpO1xuICAgIHRoaXMuY29uZGl0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25kaXRpb25zJyk7XG4gICAgdGhpcy50ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKTtcbiAgICB0aGlzLmZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVsc0xpa2UnKTtcbiAgICB0aGlzLndpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCcpO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcbiAgICB0aGlzLnRoZW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lJyk7XG4gIH1cblxuICAvL0NhbGxzIG9wZW53ZWF0aGVybWFwIGFwaSBmb3IgY3VycmVudCB3ZWF0aGVyIGluIHNlYXJjaCBiYXIgbG9jYXRpb25cbiAgLy9PciB1c2VzIGNpdHkgbmFtZSBwYXNzZWQgaW4gYXMgcGFyYW1ldGVyXG4gIGFzeW5jIGdldFdlYXRoZXJEYXRhKGNpdHkpIHtcbiAgICBsZXQgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XG4gICAgbGV0IHVuaXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXRzJyk7XG4gICAgbGV0IGtleSA9ICdiNGFlYWMwMzVlZTEyM2UzNGVjZTYzOGNhZDQ2NDIyOSc7XG4gICAgbGV0IHVybCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtcbiAgICAgIGNpdHkgPyBjaXR5IDogbG9jYXRpb24udmFsdWVcbiAgICB9JmFwcGlkPSR7a2V5fSZ1bml0cz0ke3VuaXRzLmNoZWNrZWQgPyAnbWV0cmljJyA6ICdpbXBlcmlhbCd9YDtcbiAgICB0cnkge1xuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgdW5pdHMuY2hlY2tlZFxuICAgICAgICA/IHRoaXMudXBkYXRlKGRhdGEsICdDJywgJ20vcycpXG4gICAgICAgIDogdGhpcy51cGRhdGUoZGF0YSwgJ0YnLCAnTVBIJyk7XG4gICAgICBsb2NhdGlvbi52YWx1ZSA9ICcnO1xuICAgICAgcmV0dXJuO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy9IQU5ETEUgRVJST1JTXG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9XG5cbiAgLy91cGRhdGVzIGRvbSB3aXRoIG5ldyB3ZWF0aGVyIGRhdGFcbiAgdXBkYXRlKGRhdGEsIHRlbXBVbml0LCBzcGVlZFVuaXQpIHtcbiAgICB0aGlzLmNpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLm5hbWV9LCAke2RhdGEuc3lzLmNvdW50cnl9YDtcbiAgICB0aGlzLmNvbmRpdGlvbnMudGV4dENvbnRlbnQgPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgdGhpcy50ZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCl9wrAke3RlbXBVbml0fWA7XG4gICAgdGhpcy5mZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgICAgZGF0YS5tYWluLmZlZWxzX2xpa2VcbiAgICApfcKwJHt0ZW1wVW5pdH1gO1xuICAgIHRoaXMud2luZC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS53aW5kLnNwZWVkKX0gJHtzcGVlZFVuaXR9YDtcbiAgICB0aGlzLmh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7ZGF0YS5tYWluLmh1bWlkaXR5fSVgO1xuICB9XG5cbiAgZGVmYXVsdChjaXR5KSB7XG4gICAgdGhpcy5nZXRXZWF0aGVyRGF0YShjaXR5KTtcbiAgfVxuXG4gIGNvbG9yU2NoZW1lTGlnaHQoKSB7XG4gICAgdGhlbWUuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpO1xuICAgIHRoZW1lLmNsYXNzTGlzdC5hZGQoJ2xpZ2h0Jyk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWJhY2tncm91bmQtY29sb3InLCAnI2ZmZmZmZicpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb250LWNvbG9yJywgJyMxMjEyMTInKTtcbiAgfVxuXG4gIGNvbG9yU2NoZW1lRGFyaygpIHtcbiAgICB0aGVtZS5jbGFzc0xpc3QucmVtb3ZlKCdsaWdodCcpO1xuICAgIHRoZW1lLmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYmFja2dyb3VuZC1jb2xvcicsICcjMTIxMjEyJyk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvbnQtY29sb3InLCAnI2ZmZmZmZicpO1xuICB9XG5cbiAgZ2V0Q29sb3JTY2hlbWUoKSB7XG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKSB7XG4gICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKSB7XG4gICAgICAgIHRoaXMuY29sb3JTY2hlbWVEYXJrKCk7XG4gICAgICB9XG4gICAgICB3aW5kb3dcbiAgICAgICAgLm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgZXZlbnQubWF0Y2hlcyA/IHRoaXMuY29sb3JTY2hlbWVEYXJrKCkgOiB0aGlzLmNvbG9yU2NoZW1lTGlnaHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudGhlbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy50aGVtZS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmsnKSkge1xuICAgICAgICB0aGlzLmNvbG9yU2NoZW1lTGlnaHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sb3JTY2hlbWVEYXJrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxubGV0IHBhZ2UgPSBuZXcgUGFnZSgpO1xucGFnZS5nZXRDb2xvclNjaGVtZSgpO1xucGFnZS5kZWZhdWx0KCdub29kbGUnKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaEZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHBhZ2UuZ2V0V2VhdGhlckRhdGEoKTtcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdHMnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gIHBhZ2UuZ2V0V2VhdGhlckRhdGEoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKS50ZXh0Q29udGVudCk7XG59KTtcblxuZG9jdW1lbnRcbiAgLmdldEVsZW1lbnRCeUlkKCd0aGVtZScpXG4gIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBhZ2UudG9nZ2xlQ29sb3JTY2hlbWUpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9