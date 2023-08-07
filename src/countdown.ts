let hoursInput = document.querySelector('.timer__hour') as HTMLInputElement;
let minutesInput = document.querySelector('.timer__minute') as HTMLInputElement;
let secondsInput = document.querySelector('.timer__second') as HTMLInputElement;
let startButton = document.querySelector('.owl__button') as HTMLElement;

let timerTimeout: number | undefined;

function startTimer(): void {
	startButton.addEventListener('click', () => {
		const hours = parseInt(hoursInput.value);
		const minutes = parseInt(minutesInput.value);
		const seconds = parseInt(secondsInput.value);
		updateTimer(seconds, minutes, hours)
	})
}

function updateTimer(seconds: number, minutes: number, hours: number ): void {
	// Зменшуємо значення секунд
	seconds--;
	if (seconds < 0) {
		seconds = 59;
		// Зменшуємо значення хвилин, якщо секунд дорівнює 0
		minutes--;
		if (minutes < 0) {
			minutes = 59;
			// Зменшуємо значення годин, якщо хвилин дорівнює 0
			hours--;
			if (hours < 0) {
				// Зупиняємо таймер, якщо всі значення дорівнюють 0
				clearTimeout(timerTimeout);
				return;
			}
		}
	}

	//Виводимо значення у відповідні інпути з додаванням нуля перед однозначним числом
	hoursInput.value = hours.toString().padStart(2, '0')
	minutesInput.value = minutes.toString().padStart(2, '0')
	secondsInput.value = seconds.toString().padStart(2, '0')
	timerTimeout = setTimeout(() => updateTimer(seconds, minutes, hours), 1000);
}

export default startTimer