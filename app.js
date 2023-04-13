// Selecting DOM
const billTotal = document.getElementById('billTotal')
const tipPercentage = document.getElementById('tipPercentage')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const totalPerPerson = document.getElementById('totalAmountPerPerson')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
    //Bill total
    let bill = billTotal.value

    //tip percentage
    tip = Number(tipPercentage.value) / 100
    tipAmount = Number(tip) * bill

    //Update on total per person
    totalAmount = Number(bill) + Number(tipAmount)

    //Number people update
    totalPerPersonAmount = totalAmount / numberOfPeople
    totalPerPerson.innerText = `$${totalPerPersonAmount.toFixed(2)}`
}
calculateBill()

const increasePeople = () => {
    numberOfPeople++
    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
}

const decreasePeople = () => {

    if (numberOfPeople <= 1) {
        return
    }
    numberOfPeople--
    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
    
}