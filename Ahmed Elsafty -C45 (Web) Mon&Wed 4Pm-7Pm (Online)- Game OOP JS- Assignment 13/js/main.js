import GameApiService from "./api.module.js"
import { Game } from "./games.module.js"
import { display, displayDetail, gameContainer } from "./ui.module.js"

export const navbar = document.getElementById("navbar")
export const header = document.querySelector("header")
export const details = document.querySelector(".details")
let active = document.querySelector(".active")
const navLinks = document.querySelectorAll(".nav-link")
const loader = document.querySelector(".loader")


document.addEventListener("DOMContentLoaded", () => {
  loader.classList.add("d-none")
})

window.addEventListener("scroll", function () {
  if (window.scrollY > 180) {
    navbar.classList.replace("position-absolute", "position-fixed")
    navbar.classList.add("top-0")
  } else {
    navbar.classList.replace("position-fixed", "position-absolute")
    navbar.classList.remove("top-0")
  }
})
document.body.addEventListener("click", async (e) => {
  // Handle close button clicks
  if (e.target.classList.contains("btn-close")) {
    closeDetails()
  }
})
document.getElementById("games-container").addEventListener("click", (e) => {
  const card = e.target.closest(".card")
  if (card) {
    const id = card.getAttribute("data-game-id")
    displayDetail(id)
  }
})

navLinks.forEach((el) =>
  el.addEventListener("click", (e) => {
    gameContainer.innerHTML = ""
    active.classList.remove("active")
    e.target.classList.add("active")
    active = document.querySelector(".active")
    init(active)
  })
)

function closeDetails() {
  header.classList.remove("d-none")
  navbar.classList.remove("d-none")
  gameContainer.classList.remove("d-none")
  details.classList.add("d-none")
}

async function init() {
  let api = new GameApiService()
  const data = await api.getGames(active.innerHTML)
  data.forEach((element) => {
    const { id, title, thumbnail, short_description, genre, platform } = element
    let game = new Game(
      id,
      title,
      thumbnail,
      short_description,
      genre,
      platform
    )
    display(game)
  })
}

init()
