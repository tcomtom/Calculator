// Global variable to show total
let total = document.querySelector('#display')
let firstNum = ""
let secondNum = ""

// Check to see if operator was clicked
let op = ""

// To keep track of how many numbers were clicked
let count = 0

// clear the total
function clr() {
  // Reset everything
  total.innerText = "0";
  count = 0
  firstNum = ""
  secondNum = ""
}

// Button pressed
function press(value) {

  // Check to see if display is 0 only.
  if(count === 0 && total.innerText === "0" && value !== ".") {
    total.innerText = value
  } else if(firstNum === "" && op === "") {
    // To concatenate numbers if 1st number is not set and the operator is not clicked.
    total.innerText = total.innerText.concat(value)
  } else if(count === 0 && firstNum !== "" && op !== "") {
    // To replace display number 
    total.innerText = value
  } else if(count > 0 && firstNum !== "" && op !== "") {
    // to concantenate to set second number
    total.innerText = total.innerText.concat(value)
  }

  count++

}

function setOP(operator) {
  // When operator is clicked set the operator being clicked
  op = operator
  // set the first number 
  firstNum = total.innerText

  // reset the count for the second number
  count = 0
}

// calcuate the total
function calculate() {
  secondNum = total.innerText
  
  // All calculations based on operator
  // Using float for decimals.
  switch(op) {
    case '/':
      total.innerText = parseFloat(firstNum) / parseFloat(secondNum)
      break;
    case '+':
      total.innerText = parseFloat(firstNum) + parseFloat(secondNum)
      break;
    case '-':
      total.innerText = parseFloat(firstNum) - parseFloat(secondNum)
      break;
    case '*':
      total.innerText = parseFloat(firstNum) * parseFloat(secondNum)
      break;
    default:
      break;
  }

  // Reset the operator after calculation
  op = ""

}