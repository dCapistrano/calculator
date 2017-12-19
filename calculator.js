module.exports = {
	currentValue: 0,
	runningTotal: 0,

	appendNumberToCurrent(number) {
		this.currentValue = `${this.currentValue}${number}`
		this.currentValue = parseInt(this.currentValue)
	},

	add() {
		return this.runningTotal
	},

	equal() {
		return this.runningTotal
	}
}
