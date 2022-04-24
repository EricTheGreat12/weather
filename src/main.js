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
