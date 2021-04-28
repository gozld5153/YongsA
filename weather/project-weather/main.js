window.addEventListener('load', ()=>{
    let long; 
    let lat;
    let tempDesc = document.querySelector('.description');
    let degree = document.querySelector('.degree');
    let location = document.querySelector('.timezone');
    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=322ee858bb4f985316e29e4f5561d18e`;
            

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const temp = (data.main.temp - 273.15).toFixed(1);;
                const name = data.name; 
                const {description, main} = data.weather[0];

                degree.textContent = temp;
                tempDesc.textContent = description;
                location.textContent = name;

                setIcons(main, document.getElementById('icon2'));
            })
        });
    }

    function setIcons(icon, iconID){
        const skycons = new Skycons({"color": "white"});
        const currentIcon = icon.toUpperCase();

        skycons.set(iconID, Skycons[currentIcon]);
        skycons.play();
    }

});



//https://api.openweathermap.org/data/2.5/weather?lat=35.140&lon=126.890&appid=322ee858bb4f985316e29e4f5561d18e