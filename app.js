let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];

let hour = now.getHours();
let minutes = now.getMinutes();

let currentTime = document.querySelector("#day-and-time");

currentTime.innerHTML = `${day} ${hour}:${minutes.toString().padStart(2, "0")}`;

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  let city = searchInput.value;

  if (city) {
    let apiKey = "02c11a0b9530bbo6f48bc95dtef84f9a";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiURL).then(getTemperature);
  } else {
    alert(`Please type a city!`);
  }
}

function getTemperature(response) {
  let temperatureElement = document.querySelector("#current-temp-value");
  let cityElement = document.querySelector("h1");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);
