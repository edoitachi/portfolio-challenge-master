//progress bar data
const progressBar = document.querySelectorAll('.progress-border')
Array.from(progressBar).forEach(bar => {
	const progressData = bar.getAttribute('data-bar-progress')
	bar.children[0].style.width = progressData
})
