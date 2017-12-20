const ADD = 'add'
const SUBTRACT = 'subtract'
const MULTIPLY = 'multiply'
const DIVIDE = 'divide'


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
			throw new Error(`Can't append more than one number at a time.`)
			return
		}

		this.currentValue = `${this.currentValue}${number}`
		this.currentValue = parseInt(this.currentValue)
	},

	_doMath() {
		if (!this.currentIntention) {
			return
		}
		if (this.runningTotal > 0) {
			if (this.currentIntention === ADD) {
				this.runningTotal = this.runningTotal + this.currentValue
			} else if (this.currentIntention === SUBTRACT) {
				this.runningTotal = this.runningTotal - this.currentValue
			} else if (this.currentIntention === MULTIPLY) {
				this.runningTotal = this.runningTotal * this.currentValue
			} else if (this.currentIntention === DIVIDE) {
				this.runningTotal = this.runningTotal / this.currentValue
			} else {
				throw new Error('Intention Type Unknown')
				return
			}
		} else {
			this.runningTotal = this.currentValue
		}
	},

	equal() {
		this._doMath()
		this.currentIntention = null
		this.currentValue = 0
	},

	add() {
		this.currentIntention = ADD
		this._doMath()
		this.currentValue = 0
	},

	subtract() {
		this.currentIntention = SUBTRACT
		this._doMath()
		this.currentValue = 0
	},

	multiply() {
		this.currentIntention = MULTIPLY
		this._doMath()
		this.currentValue = 0
	},

	divide() {
		this.currentIntention = DIVIDE
		this._doMath()
		this.currentValue = 0
	},
}
