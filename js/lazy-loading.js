const videos = document.querySelectorAll(".lazy-video");

videos.forEach(el => {
	const videoId = el.dataset.id;
	const playButton = el.querySelector(".play-button");

	el.style.backgroundImage = `url(https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg)`;

	playButton.addEventListener("click", () => {
		el.innerHTML = `
			<iframe
				src="https://www.youtube.com/embed/${videoId}?autoplay=1"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		`;

		el.classList.add("ready");
	})
})