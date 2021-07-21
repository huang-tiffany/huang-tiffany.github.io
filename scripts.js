// JavaScript Document

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
		} else if (link === "activities") {
			window.location.href = "activities.html";
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

function leaveHomePage(link) {
	var body = document.getElementById('homebody');
	body.className += " fadeout";
	setTimeout(() => {
		if (link === "introduction") {
			window.location.href = "introduction.html";
		} else if (link === "activities") {
			window.location.href = "activities.html";
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

//function iconHover(id, idFilled) {
//	var icon = document.getElementById(`${id}`);
//	var iconFilled = document.getElementById(`${idFilled}`);
//	if (icon.indexOf("filled") !== -1) {
//		icon.classList.remove("hidden");
//		iconFilled.classList.add("hidden");
//	} else {
//		icon.classList.add("hidden");
//		iconFilled.classList.remove("hidden");
//	}
//}

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

	var projectDescription = document.getElementsByClassName("project-description");
	for (var k = 0; k < projectDescription.length; k++) {
		if (!projectDescription[k].classList.contains("hidden")) {
			projectDescription[k].classList.add("hidden");
		}
	}
	
	var sidebarDescription = document.getElementById('sidebar-description');
	if (!sidebarDescription.classList.contains("hidden")) {
		sidebarDescription.classList.add("hidden");
	}
	var media = document.getElementsByClassName(`${projectName}`);
	for (var j = 0; j < media.length; j++) {
		if (media[j].classList.contains("hidden")) {
			media[j].classList.remove("hidden");
		}
	}
	if (projectName === "ringramen") {
		var iframeContainer = document.getElementByClassName('container-1366-768');
		if (iframeContainer.style.paddingBottom === "0%") {
			iframeContainer.style.paddingBottom = '56.2225476%';
		}	
	}
	window.location.href = `#${id}`;
}

function hide() {
	var placeholder = document.getElementById('col2-3-placeholder');
	if (placeholder.classList.contains("hidden")) {
		placeholder.classList.remove("hidden");
	}
	var sidebarDescription = document.getElementById('sidebar-description');
	if (sidebarDescription.classList.contains("hidden")) {
		sidebarDescription.classList.remove("hidden");
	}
	var magnifiedElements = document.getElementsByClassName('magnified');
	for (var i = 0; i < magnifiedElements.length; i++) {
		if (!magnifiedElements[i].classList.contains("hidden")) {
			magnifiedElements[i].classList.add("hidden");
		}
	}

	var iframeContainer = document.getElementByClassName('container-1366-768');
	if (iframeContainer.style.paddingBottom !== "0%") {
		iframeContainer.style.paddingBottom = '0%';
	}

	var projectDescription = document.getElementsByClassName("project-description");
	for (var k = 0; k < projectDescription.length; k++) {
		if (!projectDescription[k].classList.contains("hidden")) {
			projectDescription[k].classList.add("hidden");
		}
	}
}

$(function() {
	$( ".drag" ).draggable({
		containment : "parent",
		stack: ".drag", 
		scroll: false
	});
});

function randomize(id) {
	var dragElements = document.getElementById(`${id}`);
	var randomNum = Math.random() * 2;
	var randomNum2 = Math.random() * 2;
	if (randomNum < 1) {
		dragElements.style.top = (Math.random() * 120) + "vh";
	} else {
		dragElements.style.bottom = (Math.random() * 120) + "vh";
	}
	if (randomNum2 < 1) {
		dragElements.style.right = (Math.random() * 40) + "vw";
	} else {
		dragElements.style.left = (Math.random() * 40) + "vw";
	}
}