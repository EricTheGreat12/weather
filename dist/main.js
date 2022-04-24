/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
async function getWeatherData() {
  let city = 'new york';
  let key = 'b4aeac035ee123e34ece638cad464229';
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  try {
    let response = await fetch(url, { mode: 'cors' });
    let weatherData = await response.json();
    return weatherData;
  } catch (err) {
    console.log(err);
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

test();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxLQUFLLFNBQVMsSUFBSTtBQUNsRjtBQUNBLHNDQUFzQyxjQUFjO0FBQ3BEO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKCkge1xuICBsZXQgY2l0eSA9ICduZXcgeW9yayc7XG4gIGxldCBrZXkgPSAnYjRhZWFjMDM1ZWUxMjNlMzRlY2U2MzhjYWQ0NjQyMjknO1xuICBsZXQgdXJsID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPSR7a2V5fSZ1bml0cz1tZXRyaWNgO1xuICB0cnkge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgbGV0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfVxufVxuXG4vL2NlbHNpdXMgdG8gZmFocmVuaGVpdFxuZnVuY3Rpb24gdGVtcFRvSW1wKHRlbXApIHtcbiAgcmV0dXJuIHRlbXAgKiAxLjggKyAzMjtcbn1cblxuLy9tZXRlcnMvc2Vjb25kIHRvIG1pbGVzL2hvdXJcbmZ1bmN0aW9uIHNwZWVkVG9JbXAoc3BlZWQpIHtcbiAgcmV0dXJuIHNwZWVkICogMi4yMzY5NDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdGVzdCgpIHtcbiAgbGV0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YSgpO1xuICBjb25zb2xlLmxvZyhkYXRhLnN5cyk7XG59XG5cbnRlc3QoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==