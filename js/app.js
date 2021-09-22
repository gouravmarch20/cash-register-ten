const billAmount = document.querySelector('#bill-amount')
const givenAmount = document.querySelector('#given-amount')
const calculateAmount = document.querySelector('#calculate-amount')
const errorMessage = document.querySelector('#error-message')
const noOfNotes = document.querySelectorAll('.no-of-notes')

const cashTypeAvalible = [2000, 500, 200, 100, 10]
function validateBillAndCashAmount () {
  if (billAmount.value > 0) {
    if (Number(givenAmount.value) > Number(billAmount.value)) {
      const amountToBeReturned = givenAmount.value - billAmount.value
      calculateChange(amountToBeReturned)
    } else {
      showMessage('Invalid bill  , require more amount ')
    }
  } else {
    showMessage('Invalid bill amount , bill amount must greater than zero')
  }
}
function calculateChange (amountToBeReturned) {
  for (let i = 0; i < cashTypeAvalible.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / cashTypeAvalible[i])
    amountToBeReturned %= cashTypeAvalible[i]
    noOfNotes[i].innerText = numberOfNotes
  }
}
function showMessage (message) {
  errorMessage.style.display = 'block'
  errorMessage.innerText = message
}

calculateAmount.addEventListener('click', validateBillAndCashAmount)
