const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '630d306b66msh211ec05dfee82f5p1b7f99jsnb401f94c9421',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));