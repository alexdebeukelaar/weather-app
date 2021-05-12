//Fetching the API
const api= {
  key:"b91e0723c4c56cf89f1061f3e57202cd",
  baseurl:"http://api.openweathermap.org/data/2.5",
}

//making the search box work
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

//number 13 = enter key!
function setQuery(evt) {
  if (evt.keycode == 13) {
    getResults(searchbox.value);
  }
}

//Getting results of the searchbox
function getResults (query){
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then(weather =>{ 
    return weather.json();
  }).then(DisplayResults);
}

//Displaying Results
function DisplayResults (weather) {
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector ('.location.date');
  date.innerText = dateBuilder(now);
}

//function for the date
function dateBuilder (d) {
  let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  let day = Day[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} $`
}