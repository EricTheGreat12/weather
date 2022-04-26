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

  toggleTheme() {
    if (theme.textContent == 'Dark Mode') {
      theme.textContent = 'Light Mode';
      document.documentElement.style.setProperty(
        '--background-color',
        '#121212'
      );
      document.documentElement.style.setProperty('--font-color', '#ffffff');
    } else {
      theme.textContent = 'Dark Mode';
      document.documentElement.style.setProperty(
        '--background-color',
        '#ffffff'
      );
      document.documentElement.style.setProperty('--font-color', '#121212');
    }
  }
}

let page = new Page();
page.default('noodle');

document.querySelector('.searchForm').addEventListener('submit', (e) => {
  e.preventDefault();
  page.getWeatherData();
});

document.getElementById('units').addEventListener('change', () => {
  page.getWeatherData(document.querySelector('.city').textContent);
});

document.getElementById('theme').addEventListener('click', page.toggleTheme);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVMsSUFBSSxTQUFTLHNDQUFzQztBQUNqRTtBQUNBLHdDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLFVBQVUsSUFBSSxpQkFBaUI7QUFDOUQ7QUFDQSwrQkFBK0IsMkJBQTJCLEdBQUcsU0FBUztBQUN0RSxvQ0FBb0M7QUFDcEM7QUFDQSxNQUFNLEdBQUcsU0FBUztBQUNsQiwrQkFBK0IsNkJBQTZCLEVBQUUsVUFBVTtBQUN4RSxtQ0FBbUMsbUJBQW1CO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5Jyk7XG4gICAgdGhpcy5jb25kaXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmRpdGlvbnMnKTtcbiAgICB0aGlzLnRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcCcpO1xuICAgIHRoaXMuZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzTGlrZScpO1xuICAgIHRoaXMud2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kJyk7XG4gICAgdGhpcy5odW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpO1xuICAgIHRoaXMudGhlbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWUnKTtcbiAgfVxuXG4gIC8vQ2FsbHMgb3BlbndlYXRoZXJtYXAgYXBpIGZvciBjdXJyZW50IHdlYXRoZXIgaW4gc2VhcmNoIGJhciBsb2NhdGlvblxuICAvL09yIHVzZXMgY2l0eSBuYW1lIHBhc3NlZCBpbiBhcyBwYXJhbWV0ZXJcbiAgYXN5bmMgZ2V0V2VhdGhlckRhdGEoY2l0eSkge1xuICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcbiAgICBsZXQgdW5pdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdHMnKTtcbiAgICBsZXQga2V5ID0gJ2I0YWVhYzAzNWVlMTIzZTM0ZWNlNjM4Y2FkNDY0MjI5JztcbiAgICBsZXQgdXJsID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke1xuICAgICAgY2l0eSA/IGNpdHkgOiBsb2NhdGlvbi52YWx1ZVxuICAgIH0mYXBwaWQ9JHtrZXl9JnVuaXRzPSR7dW5pdHMuY2hlY2tlZCA/ICdtZXRyaWMnIDogJ2ltcGVyaWFsJ31gO1xuICAgIHRyeSB7XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICB1bml0cy5jaGVja2VkXG4gICAgICAgID8gdGhpcy51cGRhdGUoZGF0YSwgJ0MnLCAnbS9zJylcbiAgICAgICAgOiB0aGlzLnVwZGF0ZShkYXRhLCAnRicsICdNUEgnKTtcbiAgICAgIGxvY2F0aW9uLnZhbHVlID0gJyc7XG4gICAgICByZXR1cm47XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvL0hBTkRMRSBFUlJPUlNcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH1cblxuICAvL3VwZGF0ZXMgZG9tIHdpdGggbmV3IHdlYXRoZXIgZGF0YVxuICB1cGRhdGUoZGF0YSwgdGVtcFVuaXQsIHNwZWVkVW5pdCkge1xuICAgIHRoaXMuY2l0eS50ZXh0Q29udGVudCA9IGAke2RhdGEubmFtZX0sICR7ZGF0YS5zeXMuY291bnRyeX1gO1xuICAgIHRoaXMuY29uZGl0aW9ucy50ZXh0Q29udGVudCA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLnRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wKX3CsCR7dGVtcFVuaXR9YDtcbiAgICB0aGlzLmZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICBkYXRhLm1haW4uZmVlbHNfbGlrZVxuICAgICl9wrAke3RlbXBVbml0fWA7XG4gICAgdGhpcy53aW5kLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLndpbmQuc3BlZWQpfSAke3NwZWVkVW5pdH1gO1xuICAgIHRoaXMuaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLm1haW4uaHVtaWRpdHl9JWA7XG4gIH1cblxuICBkZWZhdWx0KGNpdHkpIHtcbiAgICB0aGlzLmdldFdlYXRoZXJEYXRhKGNpdHkpO1xuICB9XG5cbiAgdG9nZ2xlVGhlbWUoKSB7XG4gICAgaWYgKHRoZW1lLnRleHRDb250ZW50ID09ICdEYXJrIE1vZGUnKSB7XG4gICAgICB0aGVtZS50ZXh0Q29udGVudCA9ICdMaWdodCBNb2RlJztcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJy0tYmFja2dyb3VuZC1jb2xvcicsXG4gICAgICAgICcjMTIxMjEyJ1xuICAgICAgKTtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb250LWNvbG9yJywgJyNmZmZmZmYnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhlbWUudGV4dENvbnRlbnQgPSAnRGFyayBNb2RlJztcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJy0tYmFja2dyb3VuZC1jb2xvcicsXG4gICAgICAgICcjZmZmZmZmJ1xuICAgICAgKTtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb250LWNvbG9yJywgJyMxMjEyMTInKTtcbiAgICB9XG4gIH1cbn1cblxubGV0IHBhZ2UgPSBuZXcgUGFnZSgpO1xucGFnZS5kZWZhdWx0KCdub29kbGUnKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaEZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHBhZ2UuZ2V0V2VhdGhlckRhdGEoKTtcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdHMnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gIHBhZ2UuZ2V0V2VhdGhlckRhdGEoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKS50ZXh0Q29udGVudCk7XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwYWdlLnRvZ2dsZVRoZW1lKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==