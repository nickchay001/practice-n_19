import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const iconMenu = document.querySelector('.menu__icon');
if(iconMenu){
	const headerMenu = document.querySelector('.header__menu');
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		headerMenu.classList.toggle('_active');
	})
}

