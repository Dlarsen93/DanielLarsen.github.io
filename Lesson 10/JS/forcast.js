const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=cc2a9728fbac4669b86898fecbccc39b';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject); //be sure to delete this before submitting!

    const forcast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(forcast);

    const daysOfWeek = ['Sunday', 'Monday', 'Tursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for(let i = 0; i < forcast.length; i++){
      const forecastDate = new Date(forecast[i].dt_txt);
            let iconSrc = 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png';
            let desc = forecast[i].weather[0].description;
            let forecastCard = document.createElement('li');
            let weekday = document.createElement('h3');
            let forecastIcon = document.createElement('img');
            let forecastTemp = document.createElement('p');

            //store text/content in the elements
            weekday.textContent = weekdays[foreDate.getDay()];
            forecastIcon.setAttribute('src', iconSrc);
            forecastIcon.setAttribute('alt', desc);
            forecastIcon.style.width = '4.4em';
            forecastTemp.innerHTML = forecast[i].main.temp + '&#176;F';

            //append elements to li item
            forecastCard.appendChild(weekday);
            forecastCard.appendChild(forecastIcon);
            forecastCard.appendChild(forecastTemp);
            forecastCard.classList.add("card");

            document.getElementById('fiveForecast').appendChild(forecastCard);

    }
});
