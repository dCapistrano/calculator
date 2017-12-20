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
	}, Error)
})

test('equal', t => {
	cal.runningTotal = 3
	cal.currentValue = 1
	cal.currentIntention = 'add'
	cal.equal()
	t.is(cal.runningTotal, 4)
	t.is(cal.currentIntention, null)
	cal.clear()
	cal.runningTotal = 3
	cal.currentValue = 1
	cal.currentIntention = 'random'
	let error = t.throws(() => {
		cal.equal()
	}, Error)
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

test('multiply', t => {
	cal.appendNumberToCurrent(1)
	cal.multiply()
	t.is(cal.currentIntention, 'multiply')
})

test('basic multiplication', t => {
	cal.appendNumberToCurrent(9)
	cal.multiply()
	cal.appendNumberToCurrent(1)
	cal.equal()
	t.is(cal.runningTotal, 9)
	cal.appendNumberToCurrent(8)
	cal.multiply()
	t.is(cal.runningTotal, 72)
})

test('divide', t => {
	cal.appendNumberToCurrent(1)
	cal.divide()
	t.is(cal.currentIntention, 'divide')
})

test('basic division', t => {
	cal.appendNumberToCurrent(9)
	cal.divide()
	cal.appendNumberToCurrent(1)
	cal.equal()
	t.is(cal.runningTotal, 9)
	cal.appendNumberToCurrent(8)
	cal.divide()
	t.is(cal.runningTotal, 1.125)
})
