const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=cc2a9728fbac4669b86898fecbccc39b';

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
