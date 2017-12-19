const ADD = 'add'


module.exports = {
	currentValue: 0,
	runningTotal: 0,
	currentIntention: null,

	clear() {
		this.currentValue = 0
		this.runningTotal = 0
		this.currentIntention = null
	},

	appendNumberToCurrent(number) {
		if (number > 9) {
			throw new TypeError(`Can't append more than one number at a time.`)
			return
		}

		this.currentValue = `${this.currentValue}${number}`
		this.currentValue = parseInt(this.currentValue)
	},

	equal() {
		if (this.currentIntention === ADD) {
			this.runningTotal = this.runningTotal + this.currentValue
		} // TODO: Else
	},

	add() {
		this.currentIntention = ADD
		this.equal()
		this.currentValue = 0
	},
}
