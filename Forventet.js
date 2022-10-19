window.onload = getapi

async function getapi() 
{
    const response = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=59.913868&lon=10.752245&units=metric&lang=no&appid=18dede3a5891aa7f0c4f991203e451c0");
    var data = await response.json();

    const d = new Date()
    var dag = d.getDate();
    var måned = 1 + d.getMonth();
    var år = d.getFullYear();

    const dato1 = dag + 1 + "." + måned + "." + år
    document.getElementById("dato1").innerHTML = dato1
    const temp1 = data.daily[1].temp.day
    document.getElementById("temp1").innerHTML = temp1 + "℃"
    const vær1 = data.daily[1].weather[0].description
    document.getElementById("vær1").innerHTML = vær1

    const dato2 = dag + 2 + "." + måned + "." + år
    document.getElementById("dato2").innerHTML = dato2
    const temp2 = data.daily[2].temp.day
    document.getElementById("temp2").innerHTML = temp2 + "℃"
    const vær2 = data.daily[2].weather[0].description
    document.getElementById("vær2").innerHTML = vær2

    const dato3 = dag + 3 + "." + måned + "." + år
    document.getElementById("dato3").innerHTML = dato3
    const temp3 = data.daily[3].temp.day
    document.getElementById("temp3").innerHTML = temp3 + "℃"
    const vær3 = data.daily[3].weather[0].description
    document.getElementById("vær3").innerHTML = vær3

    const dato4 = dag + 4 + "." + måned + "." + år
    document.getElementById("dato4").innerHTML = dato4
    const temp4 = data.daily[4].temp.day
    document.getElementById("temp4").innerHTML = temp4 + "℃"
    const vær4 = data.daily[4].weather[0].description
    document.getElementById("vær4").innerHTML = vær4

    const dato5 = dag + 5 + "." + måned + "." + år
    document.getElementById("dato5").innerHTML = dato5
    const temp5 = data.daily[5].temp.day
    document.getElementById("temp5").innerHTML = temp5 + "℃"    
    const vær5 = data.daily[5].weather[0].description
    document.getElementById("vær5").innerHTML = vær5

    const dato6 = dag + 6 + "." + måned + "." + år
    document.getElementById("dato6").innerHTML = dato6
    const temp6 = data.daily[6].temp.day
    document.getElementById("temp6").innerHTML = temp6 + "℃"
    const vær6 = data.daily[6].weather[0].description
    document.getElementById("vær6").innerHTML = vær6

    const dato7 = dag + 7 + "." + måned + "." + år
    document.getElementById("dato7").innerHTML = dato7
    const temp7 = data.daily[7].temp.day
    document.getElementById("temp7").innerHTML = temp7 + "℃"
    const vær7 = data.daily[7].weather[0].description
    document.getElementById("vær7").innerHTML = vær7

    const værBilde = data.daily[0].weather[0].main
    
    if (værBilde === "Rain") {
        document.body.style.backgroundImage = "url('Regn.png')";
        console.log("1")
    }
    if (værBilde === "Clouds") {    
        document.body.style.backgroundImage = "url('Overskyet.png')";
        console.log("2")
    }
    if (værBilde === "Clear") {
        document.body.style.backgroundImage = "url('Sol.jpg')";
        console.log("3")
    }
    if (værBilde ==="Snø") {
        document.body.style.backgroundImage = "url('Snø.jpg)";
        console.log("4")
    }
}