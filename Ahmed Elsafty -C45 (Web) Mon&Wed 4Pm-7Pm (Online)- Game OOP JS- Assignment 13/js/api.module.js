const loader = document.getElementById("loader")

export default class GameApiService {
  constructor() {
    this.baseUrl = "https://free-to-play-games-database.p.rapidapi.com/api"
    this.headers = {
      "x-rapidapi-key": "61a86a197emsh17733ae5a73f67bp1640bejsn8bdf80fba31a",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    }
  }

  async getGames(category = "mmorpg") {
    loader.classList.remove("d-none")
    const url = `${this.baseUrl}/games?category=${category}`
    const response = await fetch(url, {
      method: "GET",
      headers: this.headers,
    })
    const data = await response.json()
    loader.classList.add("d-none")
    return data
  }

  async getGameDetails(id) {
    loader.classList.remove("d-none")
    const url = `${this.baseUrl}/game?id=${id}`
    const response = await fetch(url, {
      method: "GET",
      headers: this.headers,
    })
    const data = await response.json()
    loader.classList.add("d-none")
    return data
  }
}
