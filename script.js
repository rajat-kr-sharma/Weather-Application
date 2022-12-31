const GetInfo = () => {
  var newName = document.getElementById("cityInput");
  var cityName = document.getElementById("cityName");
  cityName.innerHTML = "Weather of " + newName.value;
  fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + newName.value + '&appid=32ba0bfed592484379e51106cef3f204')
    .then(response => response.json())
    .then(data => {
      //Getting the min and max values for each day
      for (let i = 0; i < 5; i++) {
        document.getElementById("temp" + (i + 1)).innerHTML = (data.list[i].main.temp - 273.15).toFixed(2) + " °C";
        document.getElementById("desc" + (i + 1)).innerHTML = "Description : " + data.list[i].weather[0].description;
        document.getElementById("windSpeed" + (i + 1)).innerHTML = "Wind Speed : " + data.list[i].wind.speed + " km/h";
        document.getElementById("humidity" + (i + 1)).innerHTML = "Humidity : " + data.list[i].main.humidity + " %";
        console.log(data)
      }
    })
    .catch(err => alert("Invalid city name OR Check your Internet connection"))
}
const DefaultScreen = () => {  
  document.getElementById("cityInput").defaultValue = "Kanpur";
GetInfo();
}
//Getting and displaying the text for the upcoming five days
let d = new Date();
setInterval(time = () => {
  var d1 = new Date();
  let hours,minutes,seconds;
  let am_pm ="am"
  if(d1.getHours()>11) 
    am_pm = "pm"
  if (d1.getHours() > 12) {
    hours = d1.getHours() % 12
  }
  else{
    hours = d1.getHours()
  }
  hours = ('0'+ (hours)).slice(-2);
  minutes = ('0'+ d1.getMinutes()).slice(-2)
  seconds = ('0'+ d1.getSeconds()).slice(-2)
  document.getElementById("timeDisplay").innerHTML = "Time - " + hours + ":" + minutes + ":" + seconds +" "+am_pm;

}, 1000)
let year = d.getFullYear();
let month = d.getMonth()+1;
let date = d.getDate();
let day1date = date + "/" + month + "/" + year;
let day2date = (date + 1) + "/" + month + "/" + year;
let day3date = (date + 2) + "/" + month + "/" + year;
let day4date = (date + 3) + "/" + month + "/" + year;
let day5date = (date + 4) + "/" + month + "/" + year;
document.getElementById("day1").innerHTML = day1date + " (Today)";
document.getElementById("day2").innerHTML = day2date;
document.getElementById("day3").innerHTML = day3date;
document.getElementById("day4").innerHTML = day4date;
document.getElementById("day5").innerHTML = day5date
