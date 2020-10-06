//const apikey = '4f0c5f237b428cfe861db9dc06e5875a';
const apikey = "3265874a2c77ae4a04bb96236a642d2f";
const form = document.getElementById("form");
const search = document.getElementById("search");
const report = document.getElementById("report");
let weatherRecord;

const url = (location) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;

async function getweatherByLocation(location) {
    const resp = await fetch(url(location), { origin: "cors" });
    const respData = await resp.json();
    // console.log(weatherRecord);

    return respData;
}

//getweatherByLocation("London");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const loc = search.value;
    console.log("loc", loc);
    const data = await getweatherByLocation(loc);
    console.log("data", data);
    const weather = document.createElement("div");
    weather.innerHTML = `
    <div class="image_container">
    <img src="https://openweathermap.org/img/wn/${
        data.weather[0].icon
        }@2x.png" /><h1 class="desc">${
        data.weather[0].description
        }</h1><img src="https://openweathermap.org/img/wn/${
        data.weather[0].icon
        }@2x.png" />
    </div>
    <h1>Temp - ${kToC(data.main.temp)} degrees</h1>
    <h1>Feels like - ${kToC(data.main.feels_like)} degrees</h1>
    <h1>Max.Temp - ${kToC(data.main.temp_max)} degrees</h1>
    <h1>Min.Temp - ${kToC(data.main.temp_min)} degrees</h1>
    `;
    report.innerHTML = "";
    report.appendChild(weather);
});

function kToC(temp) {
    return Math.ceil(temp - 273.15);
}
