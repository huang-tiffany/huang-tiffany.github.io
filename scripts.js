// JavaScript Document

$.get("navigation1.html", function(data){
	$("#nav1-placeholder").replaceWith(data);
});

$.get("navigation2.html", function(data){
	$("#nav2-placeholder").replaceWith(data);
});

$.get("sidebar.html", function(data){
	$("#sidebar-placeholder").replaceWith(data);
});

$.get("work sidebar.html", function(data){
	$("#work-sidebar-placeholder").replaceWith(data);
});

function leavePage(link) {
	var navDiv = document.getElementById('nav-divider');
	navDiv.className += " exit";
	var vl = document.getElementById('vl');
	vl.className += " exit";
	var body = document.getElementById('body');
	body.className += " fadeout";
	setTimeout(() => {
		if (link === "about") {
			window.location.href = "about.html";
		} else if (link === "activities") {
			window.location.href = "activities.html";
		} else if (link === "work") {
			window.location.href = "work.html";
		} else if (link === "play") {
			window.location.href = "play.html";
		} else if (link === "contact") {
			window.location.href = "contact.html";
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
		if (link === "about") {
			window.location.href = "about.html";
		} else if (link === "activities") {
			window.location.href = "activities.html";
		} else if (link === "work") {
			window.location.href = "work.html";
		} else if (link === "play") {
			window.location.href = "play.html";
		} else if (link === "contact") {
			window.location.href = "contact.html";
		} else if (link === "home") {
			window.location.href = "index.html";
		} else {
			location.reload();
		}
	}, 600);
}

function reveal(id, projectName) {
	var col23 = document.getElementById('mobile2-3');
	if (col23.classList.contains("hidden")) {
		col23.classList.remove("hidden");
	}
	
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
	var col23 = document.getElementById('mobile2-3');
	if (!col23.classList.contains("hidden")) {
		col23.classList.add("hidden");
	}
	
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

function activities(id) {
	var years = document.getElementsByClassName("year");
	var element = document.getElementById(`${id}`);
	if (element.style.width === "calc(100% - 1em)") {
		for (var i = 0; i < years.length; i++) {
			if (years[i].style.width === "calc(100% - 1em)") {
				years[i].style.width = "";		
			}
		}
	} else {
		for (var j = 0; j < years.length; j++) {
			if (years[j].style.width === "calc(100% - 1em)") {
				years[j].style.width = "";		
			}
		}
		element.style.width = "calc(100% - 1em)";
	}
}

function collapseNav(word) {
	var nav = document.querySelector("nav");
	var collapsibleNav = document.getElementById("collapsible-nav");
	var menu = document.getElementById("burger-menu");
	var close = document.getElementById("close");
	var homeMenu = document.getElementById("home-burger-menu");
	var homeClose = document.getElementById("home-close");
	var homeNav = document.getElementById("home-collapsible-nav");
	var homeNavDivider = document.getElementById("home-nav-divider")
	if (word === "close") {
		collapsibleNav.classList.add("hidden");
		nav.style.height = "5.5em";
		close.classList.add("hidden");
		menu.classList.remove("hidden");
	} else if (word === "homeClose") {
		homeNav.style.visibility = "hidden";
		homeNav.style.height = "0";
		homeClose.classList.add("hidden");
		homeMenu.classList.remove("hidden");
		homeNavDivider.classList.add("hidden");
	} else if (word === "open") {
		collapsibleNav.classList.remove("hidden");
		nav.style.height = "100vh";
		close.classList.remove("hidden");
		menu.classList.add("hidden");
	} else {
		homeNav.style.visibility = "visible";
		homeNav.style.height = "100vh";
		homeNav.style.width = "100vw";
		homeClose.classList.remove("hidden");
		homeMenu.classList.add("hidden");
		homeNavDivider.classList.remove("hidden");
	}
}