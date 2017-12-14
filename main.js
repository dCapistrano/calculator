var ADD = 'add'


var runningTotal = 0
var currentValue = 0


function appendNumberToCurrent(number) {
	var stringifyNumber = number.toString()
	currentValue = currentValue + stringifyNumber
	currentValue = parseInt(currentValue)
	updateResult(currentValue)
}


function updateResult(result) {
	$('#js-result').html(result)
}

function add() {
	console.log('add')
	runningTotal = runningTotal + currentValue
	currentValue = 0
	equals(ADD)
}

function subtract() {

}

function equals(intendedAction) {
	console.log('equal')
	if (intendedAction === ADD) {
		runningTotal = runningTotal + currentValue
	}
	currentValue = 0
	updateResult(runningTotal)
}
