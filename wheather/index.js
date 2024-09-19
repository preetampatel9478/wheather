
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd30d596bccmsh1342d42800ae123p1fdca4jsn98d98703f07f',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// fetch ('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle',options);
//       then(response => response.json())
// 	  .then(response => console.log(response))
// 	  .catch(err => console.error(err));

const apikey = "027f0432840d0817c59a6a3238a39530";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
async function checkWeather(){
	const response = await fetch(apiurl +'&appid=${apikey}');
    var data = await response.json();
    console.log(data);
}
checkWeather();