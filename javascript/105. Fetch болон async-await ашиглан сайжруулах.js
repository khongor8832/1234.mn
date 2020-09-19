// learn 105. Fetch болон async-await ашиглан сайжруулах

async function getWeatherAsync(id) {
  const result = await fetch(
    "https://api.allorigins.win/get?url=https://www.metaweather.com/api/location/" +
      id +
      "/"
  );
  const weatherJson = await result.json();
  let data = JSON.parse(weatherJson.contents);
  //   console.log(data);
  let today = data.consolidated_weather[0];
  // console.log(typeof data);
  // console.log(today);
  console.log(
    "Өнөөдрийн " +
      data.title +
      "-н температур " +
      today.max_temp +
      " аас " +
      today.min_temp +
      " хооронд байна. "
  );
}
getWeatherAsync("2487956");
getWeatherAsync("44418");
