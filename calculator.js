const ADD = 'add'
const SUBTRACT = 'subtract'


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

	_equal() {
		if (!this.currentIntention) {
			return
		}
		if (this.runningTotal > 0) {
			if (this.currentIntention === ADD) {
				this.runningTotal = this.runningTotal + this.currentValue
			} else if (this.currentIntention === SUBTRACT) {
				this.runningTotal = this.runningTotal - this.currentValue
			}
		} else {
			this.runningTotal = this.currentValue
		}
	},

	equal() {
		this._equal()
		this.currentIntention = null
		this.currentValue = 0
	},

	add() {
		this.currentIntention = ADD
		this._equal()
		this.currentValue = 0
	},

	subtract() {
		this.currentIntention = SUBTRACT
		this._equal()
		this.currentValue = 0
	}
}
