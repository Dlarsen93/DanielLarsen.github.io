const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=cc2a9728fbac4669b86898fecbccc39b';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const currentTemp = document.querySelector('#current-temp');
    const imageSrc = document.querySelector('#imagesrc');
    const iconsrc = document.querySelector('#icon');
    

    currentTemp.innerHTML = jsObject.main.temp;
    const isrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

    imageSrc.setAttribute('src', isrc );
    imageSrc.setAttribute('alt', jsObject.weather[0].description);
});