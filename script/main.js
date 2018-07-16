// ==================================================================
// 	Making a clock that can be standard or military time.
// ==================================================================


let theTime = function() {
	// Creating new Date variable
	let date = new Date()

	// Storing hours, minutes & seconds into variables
	let hours = date.getHours()
	let minutes = date.getMinutes()
	let seconds = date.getSeconds()

	// Check if the number is a single digit by first converting 
	// it to a string, then checking if the length is 
	// equal to 1.
	function isDigit(val) {
		return String(val).length === 1
	}

	// If hours, minutes or seconds is equal to one digit
	// then add a zero before the number
	if ( isDigit(hours) ) {
		hours = `0${hours}`
	} else if ( isDigit(minutes) ) {
		minutes = `0${minutes}`
	} else if ( isDigit(seconds) ) {
		seconds = `0${seconds}`
	}

	// DOM Clock
	let clock = document.getElementById('clock')
	clock.innerHTML = `${hours}:${minutes}:${seconds}`
}

setInterval(theTime, 1000)
