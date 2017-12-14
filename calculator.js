module.exports = {
	currentValue: 0,
	runningTotal: 0,

	appendNumberToCurrent(number) {
		let stringifyNumber = number.toString()
		this.currentValue = this.currentValue +
		stringifyNumber
		this.currentValue = parseInt(this.currentValue)
	},

	add() {
		return this.runningTotal
	},

	equal() {
		return this.runningTotal
	}
}
