import './style.css'
import generateGrassElement from './grass'
import startTimer from './countdown'

function createApp(): void {
	generateGrassElement()
	startTimer()
}

createApp()