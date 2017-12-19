import test from 'ava'

const cal = require('./calculator.js')

test.beforeEach(t => {
	cal.clear()
})

test.todo('clear')

test('appendNumberToCurrent', t => {
	cal.appendNumberToCurrent(1)
	t.is(cal.currentValue, 1)
	cal.appendNumberToCurrent(3)
	t.is(cal.currentValue, 13)

	cal.clear()
	let error = t.throws(() => {
		cal.appendNumberToCurrent(11)
	}, TypeError)
})

test('equal', t => {
	cal.runningTotal = 3
	cal.currentValue = 1
	cal.currentIntention = 'add'
	cal.equal()
	t.is(cal.runningTotal, 4)
	t.is(cal.currentIntention, null)
})

test('add', t => {
	cal.appendNumberToCurrent(1)
	cal.add()
	t.is(cal.currentIntention, 'add') // TODO: import consts?
})

test('basic addition', t => {
	// Basic
	t.is(cal.runningTotal, 0)
	cal.appendNumberToCurrent(1)
	cal.add()
	cal.appendNumberToCurrent(1)
	cal.equal()
	t.is(cal.runningTotal, 2)

	cal.clear()
	cal.appendNumberToCurrent(1)
	cal.appendNumberToCurrent(1)
	cal.add()
	cal.appendNumberToCurrent(1)
	cal.equal()
	t.is(cal.runningTotal, 12)
})

test('add complex', t => {
	cal.appendNumberToCurrent(1)
	cal.add()
	cal.appendNumberToCurrent(1)
	cal.add()
	cal.appendNumberToCurrent(4)
	cal.equal()
	t.is(cal.runningTotal, 6)
	cal.add()
	cal.appendNumberToCurrent(1)
	cal.equal()
	t.is(cal.runningTotal, 7)
	cal.add()
	cal.add()
	t.is(cal.runningTotal, 7)
	cal.appendNumberToCurrent(6)
	cal.add()
	t.is(cal.runningTotal, 13)
})

test('subtract', t => {
	cal.appendNumberToCurrent(1)
	cal.subtract()
	t.is(cal.currentIntention, 'subtract')
})

test('basic subtraction', t => {
	cal.appendNumberToCurrent(9)
	cal.subtract()
	cal.appendNumberToCurrent(1)
	cal.equal()
	t.is(cal.runningTotal, 8)
})

test('complex subtraction', t => {
	cal.appendNumberToCurrent(9)
	cal.subtract()
	cal.appendNumberToCurrent(1)
	cal.subtract()
	cal.appendNumberToCurrent(4)
	cal.equal()
	t.is(cal.runningTotal, 4)
	cal.subtract()
	cal.appendNumberToCurrent(1)
	cal.equal()
	t.is(cal.runningTotal, 3)
	cal.subtract()
	cal.subtract()
	t.is(cal.runningTotal, 3)
	cal.appendNumberToCurrent(4)
	cal.subtract()
	t.is(cal.runningTotal, -1)
})
