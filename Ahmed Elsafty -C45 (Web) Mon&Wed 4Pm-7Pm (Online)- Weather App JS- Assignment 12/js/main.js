const parent = document.querySelector(".parent")
const locationInput = document.getElementById("location")

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

async function display(currentCity) {
  let city = ""
  if (currentCity == undefined) {
    city = (await getCity()) || "Cairo"
  } else {
    city = currentCity
  }

  const weather = await getWeather(city)

  let temp = ""
  let date = new Date()
  let month = months[date.getMonth()]
  let currentDayIndex = date.getDay()

  let daysOfWeek = [
    days[currentDayIndex],
    days[(currentDayIndex + 1) % 7],
    days[(currentDayIndex + 2) % 7],
  ]
  let dayOfMonth = date.getDate()

  temp += `<div class="div1 d-flex justify-content-between px-4">
            <div>${daysOfWeek[0]}</div>
            <div>${dayOfMonth} ${month}</div>
          </div>
          <div class="div2 text-center">${daysOfWeek[1]}</div>
          <div class="div3 text-center">${daysOfWeek[2]}</div>
          <div class="div4 ps-4 pt-4">
            <p class="text-secondary">${weather.location.name}</p>
            <p class="text-white degree">${weather.current.temp_c}<span>o</span>C</p>
            <p class="text-primary">
              <img src="https:${weather.current.condition.icon}" alt="" /> ${weather.current.condition.text}
            </p>
            <div class="row">
              <div class="col-4">
                <p class="text-secondary">
                  <img src="assets/icon-umberella@2x.png" alt="" />${weather.current.humidity}%
                </p>
              </div>
              <div class="col-4">
                <p class="text-secondary">
                  <img src="assets/icon-wind@2x.png" alt="" />${weather.current.wind_kph}km/h
                </p>
              </div>
              <div class="col-4">
                <p class="text-secondary">
                  <img src="assets/icon-compass@2x.png" alt="" />${weather.current.wind_dir}
                </p>
              </div>
            </div>
          </div>
          <div class="div5 d-flex flex-column justify-content-center align-items-center">
            <img src="https:${weather.forecast.forecastday[1].day.condition.icon}" alt="" />
            <p class="text-white num">${weather.forecast.forecastday[1].day.maxtemp_c}<span>o</span>C</p>
            <p class="text-secondary">${weather.forecast.forecastday[1].day.mintemp_c}<span>o</span></p>
            <p class="text-primary">${weather.forecast.forecastday[1].day.condition.text}</p>
          </div>
          <div class="div6 d-flex flex-column justify-content-center align-items-center">
            <img src="https:${weather.forecast.forecastday[2].day.condition.icon}" alt="" />
            <p class="text-white num">${weather.forecast.forecastday[2].day.maxtemp_c}<span>o</span>C</p>
            <p class="text-secondary">${weather.forecast.forecastday[2].day.mintemp_c}<span>o</span></p>
            <p class="text-primary">${weather.forecast.forecastday[2].day.condition.text}</p>
          </div>`

  parent.innerHTML = temp
}

display()

async function getLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation not supported")
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        resolve({ latitude, longitude })
      },
      (error) => {
        reject("Error getting location: " + error.message)
      }
    )
  })
}

async function getCityFromCoordinates(lat, lng) {
  const apiKey = "e69d29d26a1c49b2975c8b31cae5e8bd"
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`

  const response = await fetch(url)
  const data = await response.json()

  if (data.results.length > 0) {
    return (
      data.results[0].components.city ||
      data.results[0].components.town ||
      data.results[0].components.village
    )
  }

  throw new Error("City not found")
}

async function getCity() {
  try {
    const { latitude, longitude } = await getLocation()
    const city = await getCityFromCoordinates(latitude, longitude)

    return city
  } catch (error) {
    console.error(error)
    return null
  }
}

async function getWeather(city) {
  const key = "bfe6835c749b48c680f121021250307"
  let api = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=3`
  const response = await fetch(api)
  const data = await response.json()

  return data
}

function searchLocation() {
  let locationInputValue = locationInput.value
  display(locationInputValue)
  locationInput.value = ""
}
