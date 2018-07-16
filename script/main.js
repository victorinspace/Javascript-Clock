// ==================================================================
// Making a clock that can be standard or military time.
// ==================================================================


let theTime = function() {
	
	let date = new Date()

	// storing hours, minutes & seconds into variables
	let hours = date.getHours()
	let minutes = date.getMinutes()
	let seconds = date.getSeconds()

	// DOM Clock
	let clock = document.getElementById('clock')
	clock.innerHTML = `${hours}:${minutes}:${seconds}`

}


console.log( theTime() )

