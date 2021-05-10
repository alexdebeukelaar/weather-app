getWeather();

const api= 'b91e0723c4c56cf89f1061f3e57202cd'
async function getWeather(){
    const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={b91e0723c4c56cf89f1061f3e57202cd}');
    const data = await response.json();
    console.log(data)}

    window.addEventListener('load', () => {});
    let long;
    let lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
           
        });
      }
    });