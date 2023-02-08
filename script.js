/* Constants */
const inputDisplay = document.getElementById("input-display-container")
const calculationDisplay = document.getElementById("calculation-display-container")

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')

console.table(numberButtons, operatorButtons)

let firstNumber 
let secondNumber
let currentOperation = null

/* Events */

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.id))
)


/* Functions */

function appendNumber(number) {
    inputDisplay.textContent += number;
}

function setOperation(operation) {
    if (currentOperation !== null) evaluate()
    firstOperand = inputDisplay.textContent
    currentOperation = operation
    calculationDisplay.textContent = `${firstOperand} ${currentOperation}`

    console.table(firstNumber, secondNumber, currentOperation )
}