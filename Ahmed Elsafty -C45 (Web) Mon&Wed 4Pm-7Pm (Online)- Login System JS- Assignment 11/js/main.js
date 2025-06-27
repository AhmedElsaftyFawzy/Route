let loginEmail = document.getElementById("loginEmail")
let loginPassword = document.getElementById("loginPassword")
let signupName = document.getElementById("signupName")
let signupEmail = document.getElementById("signupEmail")
let signupPassword = document.getElementById("signupPassword")
let username = document.getElementById("username")
let signupWarning = document.getElementById("signupWarning")
let loginWarning = document.getElementById("loginWarning")

if (document.title == "Home") {
  if (localStorage.getItem("existingUser") != null) {
    username.innerHTML = `Welcome ${localStorage.getItem("existingUser")}`
  } else {
    window.open("./index.html", "_self")
  }
}

let maybeName = ""

let userlist = []
if (localStorage.getItem("user") != null) {
  userlist = JSON.parse(localStorage.getItem("user"))
}

function signup() {
  signupWarning.innerHTML = ""
  signupWarning.classList.remove("success")
  signupWarning.classList.add("text-danger")
  if (validateName() && validateEmail() && validatePassword()) {
    let capitalizeName =
      signupName.value.trim()[0].toUpperCase() +
      signupName.value.trim().slice(1).toLowerCase()
    let user = {
      name: capitalizeName,
      email: signupEmail.value,
      password: signupPassword.value,
    }
    for (let i = 0; i < userlist.length; i++) {
      if (userlist[i].email == user.email) {
        signupWarning.innerHTML = "This Email Already Exists"
        return
      }
    }
    userlist.push(user)
    localStorage.setItem("user", JSON.stringify(userlist))
    signupWarning.classList.remove("text-danger")
    signupWarning.classList.add("success")
    signupWarning.innerHTML = "Success"
  }
}

function login() {
  localStorage.removeItem("existingUser")
  loginWarning.innerHTML = ""
  loginWarning.classList.remove("success")
  loginWarning.classList.add("text-danger")
  if (validateLogin()) {
    loginWarning.classList.remove("text-danger")
    loginWarning.classList.add("success")
    loginWarning.innerHTML = "Success"
    localStorage.setItem("existingUser", maybeName)
    window.open("./home.html", "_self")
  }
}

function logout() {
  localStorage.removeItem("existingUser")
}

function validateName() {
  let reg = /^[a-zA-Z]{3,25}$/
  let isValid = reg.test(signupName.value.trim())
  if (isValid) {
    return true
  } else if (signupName.value.trim() == "") {
    signupWarning.innerHTML = "All inputs are required"
    return false
  } else {
    signupWarning.innerHTML = "The Name need to have at least 3 letters"
    return false
  }
}
function validateEmail() {
  let reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  let isValid = reg.test(signupEmail.value.trim())
  if (isValid) {
    return true
  } else if (signupEmail.value.trim() == "") {
    signupWarning.innerHTML = "All inputs are required"
    return false
  } else {
    signupWarning.innerHTML = "Email Example : example@example.com"
    return false
  }
}
function validatePassword() {
  let reg = /^[a-zA-Z0-9!@#$%^&*]{8,}$/
  let isValid = reg.test(signupPassword.value.trim())
  if (isValid) {
    return true
  } else if (signupPassword.value.trim() == "") {
    signupWarning.innerHTML = "All inputs are required"
    return false
  } else {
    signupWarning.innerHTML = "The Passward need to have at least 8 character"
    return false
  }
}

function validateLogin() {
  for (let i = 0; i < userlist.length; i++) {
    if (
      userlist[i].email === loginEmail.value.trim() &&
      userlist[i].password === loginPassword.value.trim()
    ) {
      maybeName = userlist[i].name
      return true
    }
  }
  if (loginEmail.value.trim() === "" || loginPassword.value.trim() === "") {
    loginWarning.innerHTML = "All Inputs Are Required"
  } else {
    loginWarning.innerHTML = "Email Or Password Is Incorrect"
  }
  return false
}
