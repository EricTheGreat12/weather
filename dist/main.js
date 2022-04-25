/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsU0FBUyxJQUFJLFNBQVMsTUFBTTtBQUMvQjtBQUNBLHNDQUFzQyxjQUFjO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMkJBQTJCLEdBQUcsU0FBUztBQUN0RSxvQ0FBb0M7QUFDcEM7QUFDQSxNQUFNLEdBQUcsU0FBUztBQUNsQiwrQkFBK0IsNkJBQTZCLEVBQUUsVUFBVTtBQUN4RSxtQ0FBbUMsbUJBQW1CO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShjaXR5KSB7XG4gIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcbiAgbGV0IHVuaXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXRzJykuZGF0YXNldC52YWx1ZTtcbiAgbGV0IGtleSA9ICdiNGFlYWMwMzVlZTEyM2UzNGVjZTYzOGNhZDQ2NDIyOSc7XG4gIGxldCB1cmwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7XG4gICAgY2l0eSA/IGNpdHkgOiBsb2NhdGlvbi52YWx1ZVxuICB9JmFwcGlkPSR7a2V5fSZ1bml0cz0ke3VuaXRzfWA7XG4gIHRyeSB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB1bml0cyA9PT0gJ21ldHJpYydcbiAgICAgID8gcGFnZS51cGRhdGUoZGF0YSwgJ0MnLCAnbS9zJylcbiAgICAgIDogcGFnZS51cGRhdGUoZGF0YSwgJ0YnLCAnTVBIJyk7XG5cbiAgICBsb2NhdGlvbi52YWx1ZSA9ICcnO1xuICAgIHJldHVybjtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3cgZXJyO1xuICB9XG59XG5cbmNsYXNzIFBhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpO1xuICAgIHRoaXMuY29uZGl0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25kaXRpb25zJyk7XG4gICAgdGhpcy50ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKTtcbiAgICB0aGlzLmZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVsc0xpa2UnKTtcbiAgICB0aGlzLndpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCcpO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcbiAgfVxuXG4gIHVwZGF0ZShkYXRhLCB0ZW1wVW5pdCwgc3BlZWRVbml0KSB7XG4gICAgdGhpcy5jaXR5LnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICAgIHRoaXMuY29uZGl0aW9ucy50ZXh0Q29udGVudCA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLnRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wKX3CsCR7dGVtcFVuaXR9YDtcbiAgICB0aGlzLmZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgICBkYXRhLm1haW4uZmVlbHNfbGlrZVxuICAgICl9wrAke3RlbXBVbml0fWA7XG4gICAgdGhpcy53aW5kLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLndpbmQuc3BlZWQpfSAke3NwZWVkVW5pdH1gO1xuICAgIHRoaXMuaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLm1haW4uaHVtaWRpdHl9JWA7XG4gIH1cblxuICBkZWZhdWx0KGNpdHkpIHtcbiAgICBnZXRXZWF0aGVyRGF0YShjaXR5KTtcbiAgfVxufVxuXG4vL2NlbHNpdXMgdG8gZmFocmVuaGVpdFxuZnVuY3Rpb24gdGVtcFRvSW1wKHRlbXApIHtcbiAgcmV0dXJuIHRlbXAgKiAxLjggKyAzMjtcbn1cblxuLy9tZXRlcnMvc2Vjb25kIHRvIG1pbGVzL2hvdXJcbmZ1bmN0aW9uIHNwZWVkVG9JbXAoc3BlZWQpIHtcbiAgcmV0dXJuIHNwZWVkICogMi4yMzY5NDtcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaEZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGdldFdlYXRoZXJEYXRhKCk7XG59KTtcblxubGV0IHBhZ2UgPSBuZXcgUGFnZSgpO1xucGFnZS5kZWZhdWx0KCdkZXRyb2l0Jyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=