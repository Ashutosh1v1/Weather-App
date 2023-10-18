const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const apiKey = "e305f31bfef36ceab86ea5ad6fd7e398";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".btn");
const weathicon = document.querySelector(".weathicon");

async function Checkweather(city) {
  const response = await fetch(apiURL + `&q=${city}` + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

  

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weathicon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weathicon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weathicon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weathicon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weathicon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchbtn.addEventListener("click", () => {
  Checkweather(searchbox.value);
});
