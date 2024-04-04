const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
const body = document.querySelector("body");
const html = document.querySelector("html");
const close = document.querySelector(".header__close");
const nav = document.querySelector(".header__nav");

burger.addEventListener("click", () => {
	console.log(1)
	header.classList.toggle("menu-open");
	body.classList.toggle("lock");
})

close.addEventListener("click", () => {
	header.classList.remove("menu-open");
	body.classList.remove("lock");
})

nav.addEventListener("click", function (e) {
	let clickedLink = e.target.closest(".header__link");
	if (clickedLink) {
		header.classList.remove("menu-open");
		body.classList.remove("lock");
	}
});