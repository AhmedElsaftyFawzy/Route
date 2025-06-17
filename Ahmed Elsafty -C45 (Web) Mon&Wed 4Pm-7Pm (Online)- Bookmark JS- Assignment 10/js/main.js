var siteNameInput = document.getElementById("siteName")
var siteURLInput = document.getElementById("siteURL")
var searchInput = document.getElementById("searchInput")
var siteNameIcon = document.getElementById("siteNameIcon")
var siteURLIcon = document.getElementById("siteURLIcon")
var currentIndex

var siteList = []
if (localStorage.getItem("site") != null) {
  siteList = JSON.parse(localStorage.getItem("site"))
  display()
}

function addSite() {
  var isNameValid = validateSiteName()
  var isUrlValid = validateSiteURL()

  if (!isNameValid || !isUrlValid) {
    callError()
    return
  }
  
  var site = {
    name: siteNameInput.value,
    url: siteURLInput.value,
  }
  if (!/^https?:\/\//i.test(site.url)) {
    site.url = "https://" + site.url
  }
  siteList.push(site)
  localStorage.setItem("site", JSON.stringify(siteList))
  display()
  clearInput()
}
function display() {
  var temp = ""
  for (var i = 0; i < siteList.length; i++) {
    temp += `   <tr>
            <td>${i + 1}</td>
            <td class='text-capitalize'>${siteList[i].name}</td>
            <td><a href="${siteList[i].url}" target="_blank">
              <button class="btn btn-visit">
                <i class="fa-solid fa-eye pe-2"></i>Visit
              </button></a>
            </td>
            <td>
              <button onClick="updateSite(${i})" class="btn btn-edit pe-2">
                <i class="fa-solid fa-pen-to-square"></i>
                Edit
              </button>
            </td>
            <td>
              <button onClick="deleteSite(${i})" class="btn btn-delete pe-2">
                <i class="fa-solid fa-trash-can"></i>
                Delete
              </button>
            </td>
          </tr>`
  }
  document.getElementById("tableContent").innerHTML = temp
}

function deleteSite(index) {
  siteList.splice(index, 1)
  localStorage.setItem("site", JSON.stringify(siteList))
  display()
}

function clearInput() {
  siteNameInput.value = ""
  siteURLInput.value = ""
  siteNameIcon.classList.add("d-none")
  siteNameInput.classList.remove("valid", "invalid")
  siteURLIcon.classList.add("d-none")
  siteURLInput.classList.remove("valid", "invalid")
}

function handleSearch() {
  var searchValue = searchInput.value.toLowerCase()
  var temp = ""
  for (var i = 0; i < siteList.length; i++) {
    if (siteList[i].name.toLowerCase().startsWith(searchValue)) {
      temp += `   <tr>
            <td>${i + 1}</td>
            <td class='text-capitalize'>${siteList[i].name}</td>
            <td><a href="${siteList[i].url}" target="_blank">
              <button class="btn btn-visit">
                <i class="fa-solid fa-eye pe-2"></i>Visit
              </button></a>
            </td>
            <td>
              <button onClick="updateSite(${i})" class="btn btn-edit pe-2">
                <i class="fa-solid fa-pen-to-square"></i>
                Edit
              </button>
            </td>
            <td>
              <button onClick="deleteSite(${i})" class="btn btn-delete pe-2">
                <i class="fa-solid fa-trash-can"></i>
                Delete
              </button>
            </td>
          </tr>`
    }
  }
  document.getElementById("tableContent").innerHTML = temp
}

function updateSite(index) {
  currentIndex = index
  siteNameInput.value = siteList[index].name
  siteURLInput.value = siteList[index].url

  document.getElementById("submit").classList.add("d-none")
  document.getElementById("edit").classList.remove("d-none")
}

function editSite() {
  siteList[currentIndex].name = siteNameInput.value
  siteList[currentIndex].url = siteURLInput.value

  display()
  localStorage.setItem("site", JSON.stringify(siteList))
  document.getElementById("edit").classList.add("d-none")
  document.getElementById("submit").classList.remove("d-none")
  clearInput()
}

// validation

siteNameInput.addEventListener("input", validateSiteName)
siteURLInput.addEventListener("input", validateSiteURL)

function validateSiteName() {
  const value = siteNameInput.value.trim()
  const isValid = /^[A-Za-z0-9 ]{3,}$/.test(value)

  if (isValid) {
    siteNameIcon.innerHTML = `<svg fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 20 20"><path d="M16.6667 5L7.5 14.1667L3.33337 10"/></svg>`
    siteNameIcon.classList.remove("d-none")
    siteNameInput.classList.add("valid")
    siteNameInput.classList.remove("invalid")
  } else if (value !== "") {
    siteNameIcon.innerHTML = `<svg fill="none" stroke="#F44336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 20 20"><path d="M5 5L15 15M5 15L15 5"/></svg>`
    siteNameIcon.classList.remove("d-none")
    siteNameInput.classList.add("invalid")
    siteNameInput.classList.remove("valid")
  } else {
    siteNameIcon.classList.add("d-none")
    siteNameInput.classList.remove("valid", "invalid")
  }
  return isValid
}

function validateSiteURL() {
  const value = siteURLInput.value.trim()
  const pattern =
    /^(https:\/\/)?(www\.)?[\w-]+(\.[\w-]+)*\.(com|org|net|edu|gov|info|site|biz|io|co|me|[a-z]{2,})(\/[\w\-\/]*)?$/i
  const isValid = pattern.test(value)

  if (isValid) {
    siteURLIcon.innerHTML = `<svg fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 20 20"><path d="M16.6667 5L7.5 14.1667L3.33337 10"/></svg>`
    siteURLIcon.classList.remove("d-none")
    siteURLInput.classList.add("valid")
    siteURLInput.classList.remove("invalid")
  } else if (value !== "") {
    siteURLIcon.innerHTML = `<svg fill="none" stroke="#F44336" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 20 20"><path d="M5 5L15 15M5 15L15 5"/></svg>`
    siteURLIcon.classList.remove("d-none")
    siteURLInput.classList.add("invalid")
    siteURLInput.classList.remove("valid")
  } else {
    siteURLIcon.classList.add("d-none")
    siteURLInput.classList.remove("valid", "invalid")
  }
  return isValid
}

// messsage
function callError() {
  Swal.fire({
    html: `
  <div style="position: relative;">
      <!-- Three colored dots -->
      <div style="position: absolute; top: -70px; left: 0px; display: flex; gap: 4px;">
        <div style="width: 20px; height: 20px; border-radius: 50%; background-color: #ff5f56;"></div>
        <div style="width: 20px; height: 20px; border-radius: 50%; background-color: #ffbd2e;"></div>
        <div style="width: 20px; height: 20px; border-radius: 50%; background-color: #27c93f;"></div>
      </div>
    <div style="text-align: left; margin-top: 75px">
      <p style="font-weight:500;  font-family: 'Bree Serif', serif; font-size: 20px"> Site Name or Url is not valid, Please follow the rules below : </p>
      <ul style="padding-left: 20px; margin-top: 5px; list-style:none;">
        <li style="margin-bottom: 8px">
          <i class="fa-regular fa-circle-right" style="color: #ff0000;"></i>
          Site name must contain at least 3 characters
        </li>
        <li>
          <i class="fa-regular fa-circle-right" style="color: #ff0000;"></i>
          Site URL must be a valid one
        </li>
      </ul>
    </div>
  `,
    showCloseButton: true,
    showConfirmButton: false,
    customClass: {
      content: "sweet-alert-validation",
    },
    didOpen: () => {
      // Target close button and remove border
      const closeButton = document.querySelector(".swal2-close")
      if (closeButton) {
        closeButton.style.color = "black"
        closeButton.style.border = "0"
        closeButton.style.boxShadow = "none"
      }
    },
  })
}
