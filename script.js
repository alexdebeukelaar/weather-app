//Fetching the API
getWeather();

const apiKey= 'b91e0723c4c56cf89f1061f3e57202cd';
async function getWeather(){
    const response = await fetch('b91e0723c4c56cf89f1061f3e57202cd');
    const data = await response.json();
    console.log(data)}

    window.addEventListener('load', () => {});
    let long;
    let lat;
    // Finding the location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            //icon url for weather icons
            const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            const celsius = 
            
            //sunset and sunrise
            const sunriseGMT = new Date(sunrise * 1000);
            const sunsetGMT = new Date(sunset * 1000);
           
             // Interacting with DOM to show data
          iconImg.src = iconUrl;
          loc.textContent = `${place}`;
          desc.textContent = `${description}`;
        });
      }
  