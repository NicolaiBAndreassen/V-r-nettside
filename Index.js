window.onload = getapi

async function getapi() 
{
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Oslo&lang=no&units=metric&appid=91a0bf5962afbdd5e4a91bfda5087824");
    var data = await response.json();

    const timezone = data.name
    document.getElementById("sted").innerHTML = timezone

    const d = new Date()
    var dag = d.getDate();
    var måned = 1 + d.getMonth();
    var år = d.getFullYear();
    document.getElementById("dato").innerHTML = dag + "." + måned + "." + år

    var minutter = d.getMinutes();
    var timer = d.getHours();
    document.getElementById("tid").innerHTML = timer + ":" + minutter 

    const temp = data.main.temp
    document.getElementById("temperatur").innerHTML = "Temperatur: " + temp + "℃"

    const følersom = data.main.feels_like
    document.getElementById("følerSom").innerHTML = "Føles som: " + følersom + "℃"

    const tempMin = data.main.temp_min
    const tempMax = data.main.temp_max
    document.getElementById("høyestLavest").innerHTML = "Høyest/Lavest: " + tempMax + "℃" + " / " + tempMin + "℃"

    const vær = data.weather[0].description
    document.getElementById("typeVær").innerHTML = vær

    const vindFart = data.wind.speed
    document.getElementById("vindFart").innerHTML = "Vind: " + vindFart + " km/t"

    const luftTrykk = data.main.pressure
    document.getElementById("luftTrykk").innerHTML = "Trykk: " + luftTrykk + " mb"

    const værBilde = data.weather[0].main
    
    if (værBilde === "Rain") {
        document.body.style.backgroundImage = "url('Regn.png')";
    }
    if (værBilde === "Clouds") {
        document.body.style.backgroundImage = "url('Overskyet.png')";
    }
    if (værBilde === "Clear") {
        document.body.style.backgroundImage = "url('Sol.jpg')";
    }
    if (værBilde ==="Snø") {
        document.body.style.backgroundImage = "url('Snø.jpg)";
    }
}