// JavaScript Document

//window.onload = () => {
//	var navDiv = document.getElementById('nav-divider');
//	if (navDiv.classList.indexOf(" exit") !== -1) {
//		navDiv.classList.remove(" exit");
//	}
//}

function leavePage(link) {
	var navDiv = document.getElementById('nav-divider');
	navDiv.className += " exit";
	var vl = document.getElementById('vl');
	vl.className += " exit";
	var body = document.getElementById('body');
	body.className += " fadeout";
	setTimeout(() => {
		if (link === "introduction") {
			window.location.href = "introduction.html";
		} else if (link === "resumes") {
			window.location.href = "resumes.html";
		} else if (link === "work") {
			window.location.href = "work.html";
		} else if (link === "play") {
			window.location.href = "play.html";
		} else if (link === "archive") {
			window.location.href = "archive.html";
		} else if (link === "home") {
			window.location.href = "index.html";
		} else {
			location.reload();
		}
	}, 600);
}

function reveal(id, projectName) {
	var magnifiedElements = document.getElementsByClassName('magnified');
	for (var i = 0; i < magnifiedElements.length; i++) {
		if (!magnifiedElements[i].classList.contains("hidden")) {
			magnifiedElements[i].classList.add("hidden");
		}
	}
	var placeholder = document.getElementById('col2-3-placeholder');
	if (!placeholder.classList.contains("hidden")) {
		placeholder.classList.add("hidden");
	}
	var media = document.getElementsByClassName(`${projectName}`);
	for (var j = 0; j < media.length; j++) {
		if (media[j].classList.contains("hidden")) {
			media[j].classList.remove("hidden");
		}
	}
	window.location.href = `#${id}`;
}