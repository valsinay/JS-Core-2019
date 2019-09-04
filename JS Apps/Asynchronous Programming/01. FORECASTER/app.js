function attachEvents() {
    let location = document.getElementById('location');
    let submitBtn = document.getElementById('submit');
    let currentDiv = document.getElementById('current')
    let upcoming= document.getElementById('upcoming');

    const url = `https://judgetests.firebaseio.com/locations.json`

    const icons = {
        sunny: '☀',
        'partly sunny': '⛅',
        overcast: '☁',
        rain: '☂',
        degrees: '°'
    }
    submitBtn.addEventListener('click', loadElement);

    function loadElement() {
        fetch(url)
            .then(handler)
            .then(data => {

                let currentLocation = data.filter((x) => x.name === location.value)[0]
               
                  
               
                loadTodaysWeather(currentLocation);
                loadThreeDays(currentLocation)

                location.value = ""

            })
    }

    function loadTodaysWeather(data) {
        let url = `https://judgetests.firebaseio.com/forecast/today/${data.code}.json`
        
        fetch(url)
        .then(handler)
        .then(data => {
                
                        if(currentDiv.contains(document.querySelector(".forecasts"))){
                            document.querySelector('.forecasts').remove();
                        }

                            document.getElementById('forecast').style.display = 'block';
            
                            let forecasts = document.createElement('div')
                            forecasts.setAttribute('class', "forecasts")
                            let span = document.createElement('span')
                            span.setAttribute('class', 'condition symbol');
                            span.textContent = icons[data.forecast.condition.toLowerCase()];
                            let spanCondition = document.createElement('span');
                            spanCondition.setAttribute('class','condition')
                            let spanCity = document.createElement('span');
                            let spanDegrees = document.createElement('span');
                            let spanWeather = document.createElement('span');
            
                            spanCity.setAttribute('class', 'forecast-data');
                            spanDegrees.setAttribute('class', 'forecast-data');
                            spanWeather.setAttribute('class', 'forecast-data');
            
                            spanCity.textContent = data.name;
                            spanDegrees.textContent =`${data.forecast.low}${icons.degrees}/${data.forecast.high}${icons.degrees}`;
                            spanWeather.textContent = data.forecast.condition;
            
                            spanCondition.appendChild(spanCity)
                            spanCondition.appendChild(spanDegrees)
                            spanCondition.appendChild(spanWeather)
            
                            forecasts.appendChild(span);
                            forecasts.appendChild(spanCondition);
            
                            currentDiv.appendChild(forecasts)
                        
            })
    }

    function loadThreeDays(data){
        let url = `https://judgetests.firebaseio.com/forecast/upcoming/${data.code}.json`

        fetch(url)
            .then(handler)
            .then(data => {
 
                if(upcoming.contains(document.querySelector(".upcoming"))){
                    document.querySelector('.upcoming').remove();
                    document.querySelector('.upcoming').remove();
                    document.querySelector('.upcoming').remove();

                    console.log('yes')
                }
                  
                
                   
                document.getElementById('forecast').style.display = 'block';
                for (const city of data.forecast) {
                    
                    let forecasts = document.createElement('div')
                    forecasts.setAttribute('class', "forecast-info")
                    let span = document.createElement('span')
                    span.setAttribute('class', 'upcoming');
                   
                    let spanSymbol = document.createElement('span');
                    let spanDegrees = document.createElement('span');
                    let spanWeather = document.createElement('span');
    
                    spanSymbol.setAttribute('class', 'symbol');
                    spanDegrees.setAttribute('class', 'forecast-data');
                    spanWeather.setAttribute('class', 'forecast-data');
    
                    spanSymbol.textContent = icons[city.condition.toLowerCase()];
                    spanDegrees.textContent =`${city.low}${icons.degrees}/${city.high}${icons.degrees}`;
                   spanWeather.textContent = city.condition;
    
                   span.appendChild(spanSymbol)
                   span.appendChild(spanDegrees)
                   span.appendChild(spanWeather)
    
                    upcoming.appendChild(span)
                }
            })
    }

    function handler(response) {

        if (response.status > 400) {
            
            throw new Error(`Something went wrong.Error: ${response.statusText}`)
        }

        return response.json();
    }

    
}

attachEvents();