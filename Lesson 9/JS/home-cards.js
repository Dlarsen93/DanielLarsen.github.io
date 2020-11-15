const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {

            if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {
                
                let townInfo = document.createElement('section');
                let textBox = document.createElement('div');
                let h2 = document.createElement('h2');
                let motto = document.createElement('h3');
                let founded = document.createElement('p');
                let population = document.createElement('p');
                let rain = document.createElement('p');
                let image = document.createElement('img');

                //information to populate
                townInfo.setAttribute('class', towns[i].name);
                h2.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                founded.textContent = "Year Founded: " + towns[i].yearFounded;
                population.textContent = "Pop: " + towns[i].currentPopulation;
                rain.textContent = "Yearly Rain Fall: " + towns[i].averageRainfall;
                image.setAttribute("src", "images/", + towns[i].photo);
                image.setAttribute('alt', towns[i].name);

                textBox.append(h2, motto, founded, population, rain);
                townInfo.append(textBox, image);

                document.querySelector('div.towns').appendChild(townInfo);
                
                //Practice
                /*
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let image = document.createElement('img');

                h2.innerHTML = `${towns[i].name} <span class="highlight">${towns[i].name}</span>`;
                image.setAttribute('src', 'images/', + towns[i].photo);

                card.appendChild(h2);
                */

                }

        }
    });