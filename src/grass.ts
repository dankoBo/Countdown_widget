let grassContainer = document.querySelector('.grass') as HTMLInputElement

let generateGrassElement = function(): void {
	let grass = ""
	for (let index = 0; index < 32; index++) {
		grass += `<div class="grass__element">1</div>`;
	}

	grassContainer.insertAdjacentHTML('afterbegin',grass)
}

export default generateGrassElement