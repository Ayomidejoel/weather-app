// const api = {
//     key: "cbf506a493d5bbcbe46f4e6a4ec20850",
//     base: "https://api.openweathermap.org/data/2.5/"
//   }
  
//   const searchbox = document.querySelector('.search-box');
//   searchbox.addEventListener('keypress', setQuery);
  
//   function setQuery(evt) {
//     if (evt.keyCode == " ") {
//       getResults(searchbox.value);
//     }
//   }
  
//   function getResults (query) {
//     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//       .then(weather => {
//         return weather.json();
//       }).then(displayResults);
//   }
  
//   function displayResults (weather) {
//     let city = document.querySelector('.location .city');
//     city.innerText = `${weather.name}, ${weather.sys.country}`;
  
//     let now = new Date();
//     let date = document.querySelector('.location .date');
//     date.innerText = dateBuilder(now);
  
//     let temp = document.querySelector('.current .temp');
//     temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
//     let weather_el = document.querySelector('.current .weather');
//     weather_el.innerText = weather.weather[0].main;
  
//     let hilow = document.querySelector('.hi-low');
//     hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
//   }
  
//   function dateBuilder (d) {
//     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
//     let day = days[d.getDay()];
//     let date = d.getDate();
//     let month = months[d.getMonth()];
//     let year = d.getFullYear();
  
//     return `${day} ${date} ${month} ${year}`;
//   }

const weather = async function(cityName){
const key = "cbf506a493d5bbcbe46f4e6a4ec20850";
const apicall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}`;

var result = await fetch(apicall); 
var data = await result.json(); 
console.log(data);
return data;

 }
 //weather("osogbo");
// var a = "ade"
// console.log(`the sum is ${a}`);

form.addEventListener("submit", function(event){
event.preventDefault();
form.button.addEventListener("click", function(){
  var input = document.getElementById("inputvalue").value.trim();
  //console.log(input);
  weather(input).then((data)=>{
    // console.log(data.name);
    if(input == ""){
      alert ("Input a city name");
    }else{
      let city = document.querySelector('.location .city');
      city.innerText = `${data.name}, ${data.sys.country}`;
    
      let now = new Date();
      let date = document.querySelector('.location .date');
      date.innerText = dateBuilder(now);
    
      let temp = document.querySelector('.current .temp');
      temp.innerHTML = `${Math.round(data.main.temp)}<span>°c</span>`;
    
      let weather_el = document.querySelector('.current .weather');
      weather_el.innerText = data.weather[0].main;
    
      let hilow = document.querySelector('.hi-low');
      hilow.innerText = `${Math.round(data.main.temp_min)}°c / ${Math.round(data.main.temp_max)}°c`;
    
    }
    
  });
  // .catch((error) => {
  //   // console.log(error);
  //   alert("error! This is actuall a wrong city.");
  // });
})
});

// function result(weather)
    
    function dateBuilder (d) {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
    
      return `${day} ${date} ${month} ${year}`;
    }