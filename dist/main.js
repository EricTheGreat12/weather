/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
function help() {
  console.log('asdf');
  return true;
}

async function getWeatherData() {
  let location = document.getElementById('search');
  let units = document.getElementById('units').dataset.value;
  let key = 'b4aeac035ee123e34ece638cad464229';
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=${key}&units=${units}`;
  try {
    let response = await fetch(url, { mode: 'cors' });
    let weatherData = await response.json();
    console.log(weatherData);
    location.value = '';
    return weatherData;
  } catch (err) {
    throw err;
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

async function test() {
  let data = await getWeatherData();
  console.log(data.sys);
}

document.querySelector('.searchForm').addEventListener('submit', (e) => {
  e.preventDefault();
  getWeatherData();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLGVBQWUsU0FBUyxJQUFJLFNBQVMsTUFBTTtBQUMzRztBQUNBLHNDQUFzQyxjQUFjO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGhlbHAoKSB7XG4gIGNvbnNvbGUubG9nKCdhc2RmJyk7XG4gIHJldHVybiB0cnVlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YSgpIHtcbiAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuICBsZXQgdW5pdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdHMnKS5kYXRhc2V0LnZhbHVlO1xuICBsZXQga2V5ID0gJ2I0YWVhYzAzNWVlMTIzZTM0ZWNlNjM4Y2FkNDY0MjI5JztcbiAgbGV0IHVybCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbi52YWx1ZX0mYXBwaWQ9JHtrZXl9JnVuaXRzPSR7dW5pdHN9YDtcbiAgdHJ5IHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGxldCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgbG9jYXRpb24udmFsdWUgPSAnJztcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRocm93IGVycjtcbiAgfVxufVxuXG4vL2NlbHNpdXMgdG8gZmFocmVuaGVpdFxuZnVuY3Rpb24gdGVtcFRvSW1wKHRlbXApIHtcbiAgcmV0dXJuIHRlbXAgKiAxLjggKyAzMjtcbn1cblxuLy9tZXRlcnMvc2Vjb25kIHRvIG1pbGVzL2hvdXJcbmZ1bmN0aW9uIHNwZWVkVG9JbXAoc3BlZWQpIHtcbiAgcmV0dXJuIHNwZWVkICogMi4yMzY5NDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdGVzdCgpIHtcbiAgbGV0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YSgpO1xuICBjb25zb2xlLmxvZyhkYXRhLnN5cyk7XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hGb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBnZXRXZWF0aGVyRGF0YSgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=