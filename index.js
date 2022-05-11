let weather = {
    apiKey: "294982b1d1c46a06b165d93010bd5819",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      if(name=="Kolhapur"){
        document.getElementById("region").innerHTML = "Region : South Maharashtra";
      }
      if(name=="Pune" || name=="Mumbai" || name=="Nigdi" || name=="Pimpri"){
        document.getElementById("region").innerHTML = "Region : West Maharashtra";
        document.getElementById("crops").innerHTML = "Major Crops Grown : Rice, Sugarcane and Groundnut";
        document.getElementById("soil").innerHTML = "Types of soil :black soil, reddish soil ";
        
      }
      if(name=="Nagpur" || name=="Yavatmal" || name=="Chandrapur"){
        document.getElementById("region").innerHTML = "Region : East Maharashtra";
        document.getElementById("crops").innerHTML = "Major Crops Grown : sugarcane, jowar, bajra, sunflower";
        document.getElementById("soil").innerHTML = "Types of soil : loamy alluvial soils; shallow sandy, clayey red soils. ";
      }
      if(name=="Nashik" || name=="Jalgaon" || name=="Aurangabad"){
        document.getElementById("region").innerHTML = "Region : North Maharashtra";
        document.getElementById("crops").innerHTML = "Major Crops Grown :	Soybean, Sugarcane, Wheat, Bajri  ";
        document.getElementById("soil").innerHTML = "Types of soil : Reddish brown soils, 	Coarse shallow soils ";
      }
      if(name=="Sangli" || name=="Ratnagiri" || name=="Satara"){
        document.getElementById("region").innerHTML = "Region : South Maharashtra";
        document.getElementById("crops").innerHTML = "Major Crops Grown : cereals, pulses, oilseeds  and Sugarcane ";
        document.getElementById("soil").innerHTML = "Types of soil : Medium black Soil, Light Soil, Laterite Soil";
      }
      
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Denver");