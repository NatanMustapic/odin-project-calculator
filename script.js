/* Constants */
const inputDisplay = document.getElementById("input-display-container")
const calculationDisplay = document.getElementById("calculation-display-container")

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const clearButton = document.getElementById("clear")
const deleteButton = document.getElementById("delete")
const decimalButton = document.getElementById("decimal")

console.table(numberButtons, operatorButtons)

let firstNumber = ""
let secondNumber = ""
let currentOperation = null
let resetScreenToggle = false

/* Events */
clearButton.addEventListener('click', clear)
deleteButton.addEventListener('click', deleteNumber)
decimalButton.addEventListener('click', appendPoint)

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
)


/* Functions */
function appendNumber(number) {
  if (inputDisplay.textContent === "0" || resetScreenToggle){
    resetScreen();
  }
    inputDisplay.textContent += number;
}

function resetScreen() {
  inputDisplay.textContent = "";
  resetScreenToggle = false;
}

function setOperation(operation) {
    if (currentOperation === null && firstNumber === "") {  /*kada nemamo prvi broj i operaciju*/
      firstNumber = inputDisplay.textContent
      console.log(firstNumber)
      currentOperation = operation
      calculationDisplay.textContent = `${firstNumber} ${currentOperation}`
      resetScreenToggle = true;

    } else if (currentOperation === "÷" && inputDisplay.textContent === "0") { /*djeljenje sa nulom*/
        alert("You can't divide by 0!")
        return
    } else if (operation === "=" && firstNumber != "") {
      secondNumber = inputDisplay.textContent
      console.log(secondNumber)
      inputDisplay.textContent = calculate(firstNumber, secondNumber, currentOperation)
      calculationDisplay.textContent = `${firstNumber} ${currentOperation} ${secondNumber} =`
      currentOperation = null
    }
}

function calculate(a, b, operation) {
  a = Number(a)
  b = Number(b)
  switch (operation) {
    case "+" :
      console.log(`${a} + ${b} = ${a+b}`)
      return a + b
    case "-":
      console.log(`${a} - ${b} = ${a-b}`)
      return a - b
    case "×":
      console.log(`${a} * ${b} = ${a*b}`)
      return a * b
    case "÷":
      console.log(`${a} / ${b} = ${a/b}`)
      if (b === 0) return null
      else return a / b
    default:
      return null
  }
}

function clear() {
  inputDisplay.textContent = "0"
  calculationDisplay.textContent = ""
  firstNumber = ""
  secondNumber = ""
  currentOperation = null
}

function deleteNumber() {
  inputDisplay.textContent = inputDisplay.textContent.toString().slice(0,-1)
}

function appendPoint() {
  if (resetScreenToggle) resetScreen()
  if (inputDisplay.textContent === "")
    inputDisplay.textContent = "0"
  if (inputDisplay.textContent.includes(".")) return
  inputDisplay.textContent += "."
}