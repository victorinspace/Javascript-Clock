// ==================================================================
// 	Making a clock that can be standard or military time.
// ==================================================================


let theTime = function() {

	let date = new Date()

	let hours = date.getHours() - 12
	let minutes = date.getMinutes()
	let seconds = date.getSeconds()

	let clock = document.getElementById('clock')

	// Checks for single for single digits
	function isDigit(val) {
		return String(val).length === 1
	}

	// Is the variable a single digit? Okay, add a 0 in front
	if ( isDigit(hours) ) {
		hours = `0${hours}`
	} else if ( isDigit(minutes) ) {
		minutes = `0${minutes}`
	} else if ( isDigit(seconds) ) {
		seconds = `0${seconds}`
	}

	dofunction changeMilitary() {
		if (!changeTime.military) {
			console.log('military')
		}
	}

	// Print to the page
	clock.innerHTML = `${hours}:${minutes}:${seconds}`

}


// setInterval(timer.increment, 1000)
setInterval(theTime, 1000)



// var timer = thetime()
// Module
	// let config = {
	// 	military: false
	// }

	// let changeTimeFormat = function() {
	// 	clock.innerHTML = `${hours}:${minutes}:${seconds}`
	// 	console.log(`${config.hours}:${config.minutes}:${config.seconds}`)
	// }

	// function changeMiliary() {
	// 	config.military = !config.miltary
	// 	console.log('hey')
	// }

	// return {
	// 	changeMiliary: changemiliary
	// }