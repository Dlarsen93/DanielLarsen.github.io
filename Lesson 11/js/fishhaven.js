const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=cc2a9728fbac4669b86898fecbccc39b';

const summaryapi = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=cc2a9728fbac4669b86898fecbccc39b";

fetch(summaryapi)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        //changes the current info spans with the corresponding values
        let description = jsObject.weather[0].description;
        let weatherDesc = description.charAt(0).toUpperCase() + description.slice(1);
        
        document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
        document.getElementById('current-desc').textContent = weatherDesc;
        document.getElementById('high-temp').textContent = Math.round(jsObject.main.temp_max);
        document.getElementById('current-humidity').textContent = Math.round(jsObject.main.humidity);
        document.getElementById('windSpeed').textContent = Math.round(jsObject.wind.speed);

        //calculates wind chill
        function calcWindChill(temperature, speed) {
            let chill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temperature * Math.pow(speed, 0.16));
            return Math.round(chill);
        }

        var temp = jsObject.main.temp;
        var windSpeed = jsObject.wind.speed;
        document.getElementById('windChill').innerHTML = calcWindChill(temp, windSpeed);
    });

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    const forcast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(forcast);

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for(let i = 0; i < forcast.length; i++){
      const forcastDate = new Date(forcast[i].dt_txt);
            let iconSrc = 'https://openweathermap.org/img/w/' + forcast[i].weather[0].icon + '.png';
            let desc = forcast[i].weather[0].description;
            let forcastCard = document.createElement('li');
            let weekday = document.createElement('h3');
            let forcastIcon = document.createElement('img');
            let forcastTemp = document.createElement('p');

            //store text/content in the elements
            weekday.textContent = daysOfWeek[forcastDate.getDay()];
            forcastIcon.setAttribute('src', iconSrc);
            forcastIcon.setAttribute('alt', desc);
            forcastIcon.style.width = '4.4em';
            forcastTemp.innerHTML = forcast[i].main.temp + '&#176;F';

            //append elements to li item
            forcastCard.appendChild(weekday);
            forcastCard.appendChild(forcastIcon);
            forcastCard.appendChild(forcastTemp);
            forcastCard.classList.add("card");

            document.getElementById('fiveDayForcast').appendChild(forcastCard);

    }
});
