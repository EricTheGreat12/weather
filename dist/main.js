/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
async function getWeatherData() {
  let city = '48187';
  let key = 'b4aeac035ee123e34ece638cad464229';
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  try {
    let response = await fetch(url, { mode: 'cors' });
    let weatherData = await response.json();
    handleWeatherData(weatherData);
  } catch (err) {
    console.log(err);
  }
}

function handleWeatherData(weatherData) {
  //city
  document.querySelector('.city').textContent = weatherData.name;

  //temperatures and wind (add solution for no gust)
  let temp = weatherData.main.temp;
  let feelsLike = weatherData.main.feels_like;
  let tempUnit = 'C';
  let windSpeed = weatherData.wind.speed;
  let windGust = weatherData.wind.gust;
  let speedUnit = 'm/s';
  if (document.querySelector('.unit').dataset.value == 'i') {
    temp = tempToImp(temp);
    feelsLike = tempToImp(feelsLike);
    tempUnit = 'F';
    windSpeed = speedToImp(windSpeed);
    windGust = speedToImp(windGust);
    speedUnit = 'MPH';
  }

  document.querySelector('.temp').textContent = `${Math.round(
    temp
  )} ${tempUnit}`;

  document.querySelector('.feelsLike').textContent = `${Math.round(
    feelsLike
  )} ${tempUnit}`;

  document.querySelector('.wind').textContent = `From ${
    weatherData.wind.deg
  } DEG at ${Math.round(windSpeed)} ${speedUnit} gusts to ${Math.round(
    windGust
  )} ${speedUnit}`;
}

function tempToImp(temp) {
  return temp * 1.8 + 32;
}

function speedToImp(speed) {
  return speed * 2.23694;
}

getWeatherData();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxLQUFLLFNBQVMsSUFBSTtBQUNsRjtBQUNBLHNDQUFzQyxjQUFjO0FBQ3BEO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbURBQW1EO0FBQ25EO0FBQ0EsS0FBSyxFQUFFLFNBQVM7O0FBRWhCLHdEQUF3RDtBQUN4RDtBQUNBLEtBQUssRUFBRSxTQUFTOztBQUVoQjtBQUNBO0FBQ0EsSUFBSSxTQUFTLHVCQUF1QixFQUFFLFdBQVcsV0FBVztBQUM1RDtBQUNBLEtBQUssRUFBRSxVQUFVO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoKSB7XG4gIGxldCBjaXR5ID0gJzQ4MTg3JztcbiAgbGV0IGtleSA9ICdiNGFlYWMwMzVlZTEyM2UzNGVjZTYzOGNhZDQ2NDIyOSc7XG4gIGxldCB1cmwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHtrZXl9JnVuaXRzPW1ldHJpY2A7XG4gIHRyeSB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBsZXQgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgaGFuZGxlV2VhdGhlckRhdGEod2VhdGhlckRhdGEpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVdlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKSB7XG4gIC8vY2l0eVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEubmFtZTtcblxuICAvL3RlbXBlcmF0dXJlcyBhbmQgd2luZCAoYWRkIHNvbHV0aW9uIGZvciBubyBndXN0KVxuICBsZXQgdGVtcCA9IHdlYXRoZXJEYXRhLm1haW4udGVtcDtcbiAgbGV0IGZlZWxzTGlrZSA9IHdlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZTtcbiAgbGV0IHRlbXBVbml0ID0gJ0MnO1xuICBsZXQgd2luZFNwZWVkID0gd2VhdGhlckRhdGEud2luZC5zcGVlZDtcbiAgbGV0IHdpbmRHdXN0ID0gd2VhdGhlckRhdGEud2luZC5ndXN0O1xuICBsZXQgc3BlZWRVbml0ID0gJ20vcyc7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudW5pdCcpLmRhdGFzZXQudmFsdWUgPT0gJ2knKSB7XG4gICAgdGVtcCA9IHRlbXBUb0ltcCh0ZW1wKTtcbiAgICBmZWVsc0xpa2UgPSB0ZW1wVG9JbXAoZmVlbHNMaWtlKTtcbiAgICB0ZW1wVW5pdCA9ICdGJztcbiAgICB3aW5kU3BlZWQgPSBzcGVlZFRvSW1wKHdpbmRTcGVlZCk7XG4gICAgd2luZEd1c3QgPSBzcGVlZFRvSW1wKHdpbmRHdXN0KTtcbiAgICBzcGVlZFVuaXQgPSAnTVBIJztcbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wJykudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxuICAgIHRlbXBcbiAgKX0gJHt0ZW1wVW5pdH1gO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVsc0xpa2UnKS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoXG4gICAgZmVlbHNMaWtlXG4gICl9ICR7dGVtcFVuaXR9YDtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCcpLnRleHRDb250ZW50ID0gYEZyb20gJHtcbiAgICB3ZWF0aGVyRGF0YS53aW5kLmRlZ1xuICB9IERFRyBhdCAke01hdGgucm91bmQod2luZFNwZWVkKX0gJHtzcGVlZFVuaXR9IGd1c3RzIHRvICR7TWF0aC5yb3VuZChcbiAgICB3aW5kR3VzdFxuICApfSAke3NwZWVkVW5pdH1gO1xufVxuXG5mdW5jdGlvbiB0ZW1wVG9JbXAodGVtcCkge1xuICByZXR1cm4gdGVtcCAqIDEuOCArIDMyO1xufVxuXG5mdW5jdGlvbiBzcGVlZFRvSW1wKHNwZWVkKSB7XG4gIHJldHVybiBzcGVlZCAqIDIuMjM2OTQ7XG59XG5cbmdldFdlYXRoZXJEYXRhKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=