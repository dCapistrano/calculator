const ADD = 'add'


let runningTotal = 0
let currentValue = 0


function appendNumberToCurrent(number) {
	let stringifyNumber = number.toString()
	currentValue = currentValue + stringifyNumber
	currentValue = parseInt(currentValue)
	updateResult(currentValue)
}

function equals(intendedAction) {
	if (intendedAction === ADD) {
		runningTotal = runningTotal + currentValue
	}
	currentValue = 0
	updateResult(runningTotal)
}

function add() {
	runningTotal = runningTotal + currentValue
	currentValue = 0
	equals(ADD)
}
