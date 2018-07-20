let clock = document.getElementById('clock')
let button = document.getElementById('military')

let theTime = function() {
	const config = {
		military: false
	}

	function getTime() {
		let date = new Date()

		let hours = date.getHours()
		let minutes = date.getMinutes()
		let seconds = date.getSeconds()

		if (!config.military) {
			hours = hours > 12 ? hours - 12 : hours
		}

		return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
	}

	function switchMilitary() {
		config.military = !config.military
	}

	function pad(num) {
		num = '' + num
		return num.length == 1 ? '0' + num : num
	}

	return {
		switch: switchMilitary,
		getTime: getTime
	}
}

const time = theTime()

button.addEventListener('click', function() {
	time.switch()
})

setInterval(function() {
	clock.innerHTML = time.getTime()
}, 1000)