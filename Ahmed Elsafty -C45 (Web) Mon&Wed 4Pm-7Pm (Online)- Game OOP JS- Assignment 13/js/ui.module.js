// display and display details

import GameApiService from "./api.module.js"
import { details, header, navbar } from "./main.js"

export const gameContainer = document.getElementById("games-container")

export async function display(game) {
  let temp = ``
  temp += `<div
          class="col-xl-3 col-lg-4 col-md-6 col-12"
        >
          <div class="card position-relative" data-game-id="${game.id}">
              <img
                src="${game.thumbnail}"
                class="card-img-top w-100 p-2"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title d-flex justify-content-between">
                  ${game.title} <span class="badge text-bg-primary p-2">Free</span>
                </h5>
                <p class="card-text text-center">${game.description}</p>
              </div>
                <div class="card-footer d-flex justify-content-between text-white">
                    <span>${game.genre}</span>
                    <span>${game.platform}</span>
                </div>
            </div>
        </div>`

  gameContainer.innerHTML += temp
}

export async function displayDetail(id) {
  details.classList.remove("d-none")
  const api = new GameApiService()
  const data = await api.getGameDetails(id)
  navbar.classList.add("d-none")
  header.classList.add("d-none")
  gameContainer.classList.add("d-none")
  let temp = ``
  const { title, thumbnail, description, game_url, genre, platform, status } =
    data

  temp += `    <div class="container">
      <div class="d-flex justify-content-between mx-5 mb-5">
        <h1 class="text-white h3">Details Game</h1>
        <button class="btn-close btn-close-white"></button>
      </div>
      <div class="row">
        <div class="col-12 col-md-4">
          <img src="${thumbnail}" class="w-100" alt="" />
        </div>
        <div class="col-12 col-md-8">
          <div class="col-md-8 text-white">
            <h3>Title: ${title}</h3>
            <p>Category: <span class="badge text-bg-info"> ${genre}</span></p>
            <p>Platform: <span class="badge text-bg-info"> ${platform}</span></p>
            <p>Status: <span class="badge text-bg-info"> ${status}</span></p>
            <p class="small">
              T${description}
            </p>
            <a
              class="btn btn-outline-warning"
              target="_blank"
              href="${game_url}"
              >Show Game</a
            >
          </div>
        </div>
      </div>
    </div>`

  document.querySelector(".details").innerHTML = temp
}
