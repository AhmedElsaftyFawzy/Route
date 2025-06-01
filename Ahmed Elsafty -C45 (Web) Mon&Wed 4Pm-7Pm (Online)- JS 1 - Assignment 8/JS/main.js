// first question 1

// var num = Number(window.prompt("Enter A Number"))

// document.getElementById("demo").innerHTML = num
// console.log(num)

// ====================================================================
// second question 2

// var num = Number(window.prompt("Enter A Number"))

// if (num % 3 == 0 && num % 4 == 0) {
//   document.getElementById("demo").innerHTML = "YES"
//   console.log("YES")
// } else {
//   document.getElementById("demo").innerHTML = "NO"
//   console.log("NO")
// }

// ======================================================================
// third question 3

// var num1 = Number(window.prompt("Enter First Number"))
// var num2 = Number(window.prompt("Enter Second Number"))

// if (num1 > num2) {
//   document.getElementById("demo").innerHTML = num1
//   console.log(num1)
// } else {
//   document.getElementById("demo").innerHTML = num2
//   console.log(num2)
// }

// =======================================================================
//  fourth question 4

// var num = Number(window.prompt("Enter A Number"))

// if (num >= 0) {
//   document.getElementById("demo").innerHTML = "Positive"
//   console.log("Positive")
// } else {
//   document.getElementById("demo").innerHTML = "Negative"
//   console.log("Negative")
// }

// =========================================================================
// fiveth question 5

// var num1 = Number(window.prompt("Enter First Number"))
// var num2 = Number(window.prompt("Enter Second Number"))
// var num3 = Number(window.prompt("Enter Third Number"))
// var max
// var min

// if (num1 >= num2 && num1 >= num3) {
//   max = num1
//   if (num2 >= num3) {
//     min = num3
//   } else {
//     min = num2
//   }
// } else if (num2 >= num1 && num2 >= num3) {
//   max = num2
//   if (num1 >= num3) {
//     min = num3
//   } else {
//     min = num1
//   }
// } else {
//   max = num3
//   if (num1 >= num2) {
//     min = num2
//   } else {
//     min = num1
//   }
// }

// document.getElementById("demo").innerHTML =
//   "max element = " + max + ", min element = " + min
// console.log("max element = " + max)
// console.log("min element = " + min)

// ==================================================================
// sixth question 6

// var num = Number(window.prompt("Enter A Number"))

// if (num % 2 == 0) {
//   document.getElementById("demo").innerHTML = "Even"
//   console.log("Even")
// } else {
//   document.getElementById("demo").innerHTML = "Odd"
//   console.log("Odd")
// }

// =======================================================================
//  seventh question 7

// var char = window.prompt("Enter A Character")

// if (
//   char == "a" ||
//   char == "A" ||
//   char == "e" ||
//   char == "E" ||
//   char == "o" ||
//   char == "O" ||
//   char == "i" ||
//   char == "I" ||
//   char == "u" ||
//   char == "U"
// ) {
//   document.getElementById("demo").innerHTML = "Vowel"
//   console.log("Vowel")
// } else {
//   document.getElementById("demo").innerHTML = "Consonant"
//   console.log("Consonant")
// }

// ==========================================================================
// eighth question 8

// var num = Number(window.prompt("Enter A Number"))

// for (let i = 1; i <= num; i++) {
//   if (i < num) {
//     document.getElementById("demo").innerHTML += i + ", "
//   } else {
//     document.getElementById("demo").innerHTML += i
//   }
//   console.log(i)
// }

// ================================================================================
// nineth question 9

// var num = Number(window.prompt("Enter A Number"))

// for (let i = 1; i <= 12; i++) {
//   if (i < 12) {
//     document.getElementById("demo").innerHTML += i * num + ", "
//   } else {
//     document.getElementById("demo").innerHTML += i * num
//   }
//   console.log(i * num)
// }

// ==================================================================================
// tenth question 10

// var num = Number(window.prompt("Enter A Number"))

// for (let i = 1; i < num; i++) {
//   if (i % 2 == 0) {
//     document.getElementById("demo").innerHTML += i + " "
//     console.log(i)
//   }
// }

// =====================================================================================
// eleventh question 11

// var num1 = Number(window.prompt("Enter First Number"))
// var num2 = Number(window.prompt("Enter Second Number"))

// document.getElementById("demo").innerHTML = num1 ** num2
// console.log(num1 ** num2)

// ======================================================================================
// tewelveth question 12

// var num1 = Number(window.prompt("Enter First Number"))
// var num2 = Number(window.prompt("Enter Second Number"))
// var num3 = Number(window.prompt("Enter Third Number"))
// var num4 = Number(window.prompt("Enter Fourth Number"))
// var num5 = Number(window.prompt("Enter Fiveth Number"))

// var total = num1 + num2 + num3 + num4 + num5
// var average = total / 5
// var percentage = (total / 500) * 100

// document.getElementById("demo").innerHTML =
//   "Total marks = " +
//   total +
//   ", Average Marks = " +
//   average +
//   ", Percentage = " +
//   percentage
// console.log("Total marks = " + total)
// console.log("Average Marks = " + average)
// console.log("Percentage = " + percentage)

// ============================================================================================
// thirteenth question 13

// var num = Number(window.prompt("Enter The Month Number"))

// if (
//   num == 1 ||
//   num == 3 ||
//   num == 5 ||
//   num == 7 ||
//   num == 8 ||
//   num == 10 ||
//   num == 12
// ) {
//   document.getElementById("demo").innerHTML = "Days in Month: 31"
//   console.log("Days in Month: 31")
// } else if (num == 2) {
//   document.getElementById("demo").innerHTML = "Days in Month: 28"
//   console.log("Days in Month: 28")
// } else {
//   document.getElementById("demo").innerHTML = "Days in Month: 30"
//   console.log("Days in Month: 30")
// }

// ===============================================================================================
// fourteenth question 14

// var num1 = Number(window.prompt("Enter First Mark Of 100"))
// var num2 = Number(window.prompt("Enter Second Mark Of 100"))
// var num3 = Number(window.prompt("Enter Third Mark Of 100"))
// var num4 = Number(window.prompt("Enter Fourth Mark Of 100"))
// var num5 = Number(window.prompt("Enter Fiveth Mark Of 100"))

// var total = num1 + num2 + num3 + num4 + num5
// var percentage = (total / 500) * 100

// if (percentage >= 90) {
//   document.getElementById("demo").innerHTML = "Grade A"
//   console.log("Grade A")
// } else if (percentage >= 80) {
//   document.getElementById("demo").innerHTML = "Grade B"
//   console.log("Grade B")
// } else if (percentage >= 70) {
//   document.getElementById("demo").innerHTML = "Grade C"
//   console.log("Grade C")
// } else if (percentage >= 60) {
//   document.getElementById("demo").innerHTML = "Grade D"
//   console.log("Grade D")
// } else if (percentage >= 40) {
//   document.getElementById("demo").innerHTML = "Grade E"
//   console.log("Grade E")
// } else {
//   document.getElementById("demo").innerHTML = "Grade F"
//   console.log("Grade F")
// }

// ===================================================================
// fiveteenth question 15

// var num = Number(window.prompt("Enter The Month Number"))

// switch (true) {
//   case num == 1 ||
//     num == 3 ||
//     num == 5 ||
//     num == 7 ||
//     num == 8 ||
//     num == 10 ||
//     num == 12:
//     document.getElementById("demo").innerHTML = "Days in Month: 31"
//     console.log("Days in Month: 31")
//     break
//   case num == 2:
//     document.getElementById("demo").innerHTML = "Days in Month: 28"
//     console.log("Days in Month: 28")
//     break
//   default:
//     document.getElementById("demo").innerHTML = "Days in Month: 30"
//     console.log("Days in Month: 30")
//     break
// }

// switch (num) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     document.getElementById("demo").innerHTML = "Days in Month: 31"
//     console.log("Days in Month: 31")
//     break
//   case 2:
//     document.getElementById("demo").innerHTML = "Days in Month: 28"
//     console.log("Days in Month: 28")
//     break
//   default:
//     document.getElementById("demo").innerHTML = "Days in Month: 30"
//     console.log("Days in Month: 30")
//     break
// }

// =====================================================================
// sixteenth question 16

// var char = window.prompt("Enter A Character")

// switch (true) {
//   case char == "a" ||
//     char == "A" ||
//     char == "e" ||
//     char == "E" ||
//     char == "o" ||
//     char == "O" ||
//     char == "i" ||
//     char == "I" ||
//     char == "u" ||
//     char == "U":
//     document.getElementById("demo").innerHTML = "Vowel"
//     console.log("Vowel")
//     break

//   default:
//     document.getElementById("demo").innerHTML = "Consonant"
//     console.log("Consonant")
//     break
// }

// switch (char) {
//   case "a":
//   case "A":
//   case "e":
//   case "E":
//   case "o":
//   case "O":
//   case "i":
//   case "I":
//   case "u":
//   case "U":
//     document.getElementById("demo").innerHTML = "Vowel"
//     console.log("Vowel")
//     break

//   default:
//     document.getElementById("demo").innerHTML = "Consonant"
//     console.log("Consonant")
//     break
// }

// =============================================================================
// seventeenth question 17

// var num1 = Number(window.prompt("Enter First Number"))
// var num2 = Number(window.prompt("Enter Second Number"))

// switch (true) {
//   case num1 > num2:
//     document.getElementById("demo").innerHTML = "max element = " + num1
//     console.log("max element = " + num1)
//     break

//   default:
//     document.getElementById("demo").innerHTML = "max element = " + num2
//     console.log("max element = " + num2)
//     break
// }

// =================================================================================
// eighteenth question 18

// var num = Number(window.prompt("Enter A Number"))

// switch (true) {
//   case num % 2 == 0:
//     document.getElementById("demo").innerHTML = "Even"
//     console.log("Even")
//     break

//   default:
//     document.getElementById("demo").innerHTML = "Odd"
//     console.log("Odd")
//     break
// }

// switch (num % 2) {
//   case 0:
//     document.getElementById("demo").innerHTML = "Even"
//     console.log("Even")
//     break

//   default:
//     document.getElementById("demo").innerHTML = "Odd"
//     console.log("Odd")
//     break
// }

// ====================================================================================
// nineteenth question 19

// var num = Number(window.prompt("Enter A Number"))

// switch (true) {
//   case num > 0:
//     document.getElementById("demo").innerHTML = "Positive"
//     console.log("Positive")
//     break

//   case num == 0:
//     document.getElementById("demo").innerHTML = "Zero"
//     console.log("Zero")
//     break

//   default:
//     document.getElementById("demo").innerHTML = "Negative"
//     console.log("Negative")
//     break
// }

// =========================================================================================
// twentyth question 20

// var num1 = Number(window.prompt("Enter First Number"))
// var operator = window.prompt("Enter An Operator")
// var num2 = Number(window.prompt("Enter Second Number"))

// switch (operator) {
//   case "+":
//     document.getElementById("demo").innerHTML = num1 + num2
//     console.log(num1 + num2)
//     break
//   case "-":
//     document.getElementById("demo").innerHTML = num1 - num2
//     console.log(num1 - num2)
//     break
//   case "*":
//     document.getElementById("demo").innerHTML = num1 * num2
//     console.log(num1 * num2)
//     break
//   case "/":
//     document.getElementById("demo").innerHTML = num1 / num2
//     console.log(num1 / num2)
//     break
//   case "**":
//     document.getElementById("demo").innerHTML = num1 ** num2
//     console.log(num1 ** num2)
//     break
//   case "%":
//     document.getElementById("demo").innerHTML = num1 % num2
//     console.log(num1 % num2)
//     break
//   default:
//     document.getElementById("demo").innerHTML =
//       "The Calculator Can't Do This Operation"
//     console.log("The Calculator Can't Do This Operation")
//     break
// }

// =========================================================================================
