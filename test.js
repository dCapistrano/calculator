import test from 'ava'

const cal = require('./calculator.js')

test('appendNumberToCurrent', t => {
	cal.appendNumberToCurrent(1)
	t.is(cal.currentValue, 1)
	cal.appendNumberToCurrent(3)
	t.is(cal.currentValue, 13)
})

test('add basic', t => {
	// Basic
	cal.appendNumberToCurrent(1)
	cal.add()
	cal.appendNumberToCurrent(1)
	cal.equal()
	t.is(cal.runningTotal, 2)
})

test('add complex', t => {
	cal.appendNumberToCurrent(1)
	cal.add()
	cal.appendNumberToCurrent(1)
	cal.add()
	cal.appendNumberToCurrent(4)
	cal.equal()
	t.is(cal.runningTotal, 6)
})
