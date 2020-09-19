// learn 104. Fetch api ашиглан цаг агаарын өгөгдөл татаж үзүүлэх.

// axios
/*
fetch("http://127.0.0.1:5500/javascript/104.%20jor.html")
  .then((result) => {
    // result.headers.forEach(e => console.log(e));
    // console.log(result);
    return result.text();
  })
  .then((r) => {
    let json = JSON.parse(r);
    console.log(r);
    console.log("Жорын зохиогч нь : " + json.name);
  });

//json => JAVASCRIPT OBJECT NOTATION
//same origin policy*/
/*******************************************/
//Дэлхийн хэмжээний  Цаг агаарын API  https://www.metaweather.com/
// https://gist.github.com/jimmywarting/ac1be6ea0297c16c477e17f8fbe51347

function getWeather(id) {
  fetch(
    "https://api.allorigins.win/get?url=https://www.metaweather.com/api/location/" +
      id +
      "/"
  )
    .then((result) => {
      // result.headers.forEach(e => console.log(e));
      // console.log(result);
      return result.json();
    })
    .then((r) => {
      let data = JSON.parse(r.contents);
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
    });
}
getWeather("2487956");
getWeather("44418");
