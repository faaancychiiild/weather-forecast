pop_up = () => 
	navigator.geolocation ? navigator.geolocation.getCurrentPosition(user_loc) :
	alert("Geolocation is not supported by your browser. ");


user_loc = (position) => {
	
	const {latitude, longitude} = position.coords;

	fetch (`http://api.openweathermap.org/data/2.5/forecast?id=524901&lat=${latitude}&lon=${longitude}&appid=df2e5d3ebb614f96fbd0d439ccbf245f`)
	.then(response => response.json())
	.then(data => {
		const forecast = data.list[1];
		const {main, description, icon} = forecast.weather[0];
		const city = data.city.name;

		let temp = `${forecast.main.temp}`;
		let celsius = Math.floor(temp - 273.15);
		let fahr = Math.floor(`${celsius}` * 9/5 + 32);
		let display_temp = celsius;
		let deg_sign = "C";
		document.getElementById("icon").src =`http://openweathermap.org/img/wn/${icon}@2x.png`;
		document.getElementById("city").innerHTML = `<i class="material-icons">place</i><b>Location:</b> &emsp;<span style="font-size: 1.2em; color: red;">${city}(${data.city.country})</span>`;
		document.getElementById("temp").innerHTML = `${display_temp}&deg;${deg_sign}`;
		document.getElementById("sky").innerHTML = `${main}`;
		document.getElementById("description").innerHTML = `<b>&#9732;Detailed:</b>&emsp;${description}`;
		
		const click1 = document.getElementById("cels");
		click1.onclick = function(){
			display_temp = celsius;
			deg_sign = "C";
			document.getElementById("temp").innerHTML = `${display_temp}&deg;${deg_sign}`;
		}
		const click2 = document.getElementById("fahr");
		click2.onclick = function(){
			display_temp = fahr;
			deg_sign = "F";
			document.getElementById("temp").innerHTML = `${display_temp}&deg;${deg_sign}`;
		}

	});


}
default_ = () => {
	let maincity = `Tokyo`;
	fetch (`http://api.openweathermap.org/data/2.5/forecast?id=524901&q=${maincity}&appid=df2e5d3ebb614f96fbd0d439ccbf245f`)
	.then(response => response.json())
	.then(data => {
		const forecast = data.list[1];
		const {main, description, icon} = forecast.weather[0];
		const city = data.city.name;

		let temp = `${forecast.main.temp}`;
		let celsius = Math.floor(temp - 273.15);
		let fahr = Math.floor(`${celsius}` * 9/5 + 32);
		let display_temp = celsius;
		let deg_sign = "C";
		document.getElementById("icon").src =`http://openweathermap.org/img/wn/${icon}@2x.png`;
		document.getElementById("city").innerHTML = `<i class="material-icons">place</i><b>Location:</b> &emsp;<span style="font-size: 1.2em; color: red;">${city}
		(${data.city.country})</span>`;
		document.getElementById("temp").innerHTML = `${display_temp}&deg;${deg_sign}`;
		document.getElementById("sky").innerHTML = `${main}`;
		document.getElementById("description").innerHTML = `<b>&#9732;Detailed:</b>&emsp;${description}`;
		
		const click1 = document.getElementById("cels");
		click1.onclick = function(){
			display_temp = celsius;
			deg_sign = "C";
			document.getElementById("temp").innerHTML = `${display_temp}&deg;${deg_sign}`;
		}
		const click2 = document.getElementById("fahr");
		click2.onclick = function(){
			display_temp = fahr;
			deg_sign = "F";
			document.getElementById("temp").innerHTML = `${display_temp}&deg;${deg_sign}`;
		}

	});
}
append_child = () => {
	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = 'append.css';
	link.type = 'text/css';
	document.getElementsByTagName('head')[0].appendChild(link);
}
append_child();
	fetch('./data.json')
	.then(response => response.json())
	.then(data => {
		let search = document.getElementById("info");
		for(let i = 0; i <= 59; i++){
		const option = document.createElement('option');
	   	option.textContent = data[0].cities[i];
	   	search.appendChild(option);
	   }
	   console.log(search);
	   	let val = document.getElementById("c-search");
	   	val.addEventListener("keypress", function(){
	   		if(val.value != null && event.keyCode===13){
	   			let maincity = val.value;
	   			val.blur();
	   			fetch (`http://api.openweathermap.org/data/2.5/forecast?id=524901&q=${maincity}&appid=df2e5d3ebb614f96fbd0d439ccbf245f`)
	.then(response => response.json())
	.then(data => {
		const forecast = data.list[1];
		const {main, description, icon} = forecast.weather[0];
		const city = data.city.name;
	
		let temp = `${forecast.main.temp}`;
		let celsius = Math.floor(temp - 273.15);
		let fahr = Math.floor(`${celsius}` * 9/5 + 32);
		let display_temp = celsius;
		let deg_sign = "C";
		document.getElementById("icon").src =`http://openweathermap.org/img/wn/${icon}@2x.png`;
		document.getElementById("city").innerHTML = `<i class="material-icons">place</i><b>Location:</b> &emsp;<span style="font-size: 1.2em; color: red;">${city}
		(${data.city.country})</span>`;
		document.getElementById("temp").innerHTML = `${display_temp}&deg;${deg_sign}`;
		document.getElementById("sky").innerHTML = `${main}`;
		document.getElementById("description").innerHTML = `<b>&#9732;Detailed:</b>&emsp;${description}`;
		
		const click1 = document.getElementById("cels");
		click1.onclick = function(){
			display_temp = celsius;
			deg_sign = "C";
			document.getElementById("temp").innerHTML = `${display_temp}&deg;${deg_sign}`;
		}
		const click2 = document.getElementById("fahr");
		click2.onclick = function(){
			display_temp = fahr;
			deg_sign = "F";
			document.getElementById("temp").innerHTML = `${display_temp}&deg;${deg_sign}`;
		}

	});
	   		}
	   	})
});

	
			
