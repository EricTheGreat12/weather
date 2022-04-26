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
  page.getWeatherData();
});

document.getElementById('units').addEventListener('change', () => {
  page.getWeatherData(document.querySelector('.city').textContent);
});

let page = new Page();
page.default('detroit');

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxTQUFTLElBQUksU0FBUyxzQ0FBc0M7QUFDakU7QUFDQSx3Q0FBd0MsY0FBYztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixVQUFVLElBQUksaUJBQWlCO0FBQzlEO0FBQ0EsK0JBQStCLDJCQUEyQixHQUFHLFNBQVM7QUFDdEUsb0NBQW9DO0FBQ3BDO0FBQ0EsTUFBTSxHQUFHLFNBQVM7QUFDbEIsK0JBQStCLDZCQUE2QixFQUFFLFVBQVU7QUFDeEUsbUNBQW1DLG1CQUFtQjtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5Jyk7XG4gICAgdGhpcy5jb25kaXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmRpdGlvbnMnKTtcbiAgICB0aGlzLnRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcCcpO1xuICAgIHRoaXMuZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzTGlrZScpO1xuICAgIHRoaXMud2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kJyk7XG4gICAgdGhpcy5odW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpO1xuICB9XG5cbiAgLy9DYWxscyBvcGVud2VhdGhlcm1hcCBhcGkgZm9yIGN1cnJlbnQgd2VhdGhlciBpbiBzZWFyY2ggYmFyIGxvY2F0aW9uXG4gIC8vT3IgdXNlcyBjaXR5IG5hbWUgcGFzc2VkIGluIGFzIHBhcmFtZXRlclxuICBhc3luYyBnZXRXZWF0aGVyRGF0YShjaXR5KSB7XG4gICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuICAgIGxldCB1bml0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml0cycpO1xuICAgIGxldCBrZXkgPSAnYjRhZWFjMDM1ZWUxMjNlMzRlY2U2MzhjYWQ0NjQyMjknO1xuICAgIGxldCB1cmwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7XG4gICAgICBjaXR5ID8gY2l0eSA6IGxvY2F0aW9uLnZhbHVlXG4gICAgfSZhcHBpZD0ke2tleX0mdW5pdHM9JHt1bml0cy5jaGVja2VkID8gJ21ldHJpYycgOiAnaW1wZXJpYWwnfWA7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHVuaXRzLmNoZWNrZWRcbiAgICAgICAgPyB0aGlzLnVwZGF0ZShkYXRhLCAnQycsICdtL3MnKVxuICAgICAgICA6IHRoaXMudXBkYXRlKGRhdGEsICdGJywgJ01QSCcpO1xuICAgICAgbG9jYXRpb24udmFsdWUgPSAnJztcbiAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vSEFORExFIEVSUk9SU1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfVxuXG4gIC8vdXBkYXRlcyBkb20gd2l0aCBuZXcgd2VhdGhlciBkYXRhXG4gIHVwZGF0ZShkYXRhLCB0ZW1wVW5pdCwgc3BlZWRVbml0KSB7XG4gICAgdGhpcy5jaXR5LnRleHRDb250ZW50ID0gYCR7ZGF0YS5uYW1lfSwgJHtkYXRhLnN5cy5jb3VudHJ5fWA7XG4gICAgdGhpcy5jb25kaXRpb25zLnRleHRDb250ZW50ID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMudGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5tYWluLnRlbXApfcKwJHt0ZW1wVW5pdH1gO1xuICAgIHRoaXMuZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcbiAgICAgIGRhdGEubWFpbi5mZWVsc19saWtlXG4gICAgKX3CsCR7dGVtcFVuaXR9YDtcbiAgICB0aGlzLndpbmQudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEud2luZC5zcGVlZCl9ICR7c3BlZWRVbml0fWA7XG4gICAgdGhpcy5odW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2RhdGEubWFpbi5odW1pZGl0eX0lYDtcbiAgfVxuXG4gIGRlZmF1bHQoY2l0eSkge1xuICAgIHRoaXMuZ2V0V2VhdGhlckRhdGEoY2l0eSk7XG4gIH1cbn1cblxuLy9jZWxzaXVzIHRvIGZhaHJlbmhlaXRcbmZ1bmN0aW9uIHRlbXBUb0ltcCh0ZW1wKSB7XG4gIHJldHVybiB0ZW1wICogMS44ICsgMzI7XG59XG5cbi8vbWV0ZXJzL3NlY29uZCB0byBtaWxlcy9ob3VyXG5mdW5jdGlvbiBzcGVlZFRvSW1wKHNwZWVkKSB7XG4gIHJldHVybiBzcGVlZCAqIDIuMjM2OTQ7XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hGb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBwYWdlLmdldFdlYXRoZXJEYXRhKCk7XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXRzJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICBwYWdlLmdldFdlYXRoZXJEYXRhKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5JykudGV4dENvbnRlbnQpO1xufSk7XG5cbmxldCBwYWdlID0gbmV3IFBhZ2UoKTtcbnBhZ2UuZGVmYXVsdCgnZGV0cm9pdCcpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9