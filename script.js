const apiKey = "8e170730ddd9d32911926123ab1bc2f3"
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    
    //Variable assigning
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    //function declaration
    async function checkWeather(city){ 
        //Fetching APIKey
        const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
        
        //Error Handling(if unknown city name is entered)
        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }

        else{
            var data = await response.json();//Extracting data of API

        //Document Object Model(DOM)    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";//Rounding off the value
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        

        //Displaying images according to weather condition
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }

        //State before click
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        }
    }
    
    //Display information on click
    searchBtn.addEventListener("click",()=>{
        checkWeather(searchBox.value);//Function call
     })
