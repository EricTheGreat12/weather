/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
let city = '49546';
let key = 'b4aeac035ee123e34ece638cad464229';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

async function getWeatherData() {
  try {
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
  } catch (err) {
    console.log('err');
  }
}

let currentWeather = getWeatherData();
console.log(currentWeather);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQSw4REFBOEQsS0FBSyxTQUFTLElBQUk7O0FBRWhGO0FBQ0E7QUFDQSx3Q0FBd0MsY0FBYztBQUN0RDtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY2l0eSA9ICc0OTU0Nic7XG5sZXQga2V5ID0gJ2I0YWVhYzAzNWVlMTIzZTM0ZWNlNjM4Y2FkNDY0MjI5JztcbmxldCB1cmwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHtrZXl9YDtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKCdlcnInKTtcbiAgfVxufVxuXG5sZXQgY3VycmVudFdlYXRoZXIgPSBnZXRXZWF0aGVyRGF0YSgpO1xuY29uc29sZS5sb2coY3VycmVudFdlYXRoZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9