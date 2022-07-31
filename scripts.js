$.get("sidebar.html", function(data){
	$("#sidebar-placeholder").replaceWith(data);
});

$.get("sidebar.html", function(data){
	$("#sidebar-placeholder2").replaceWith(data);
});

function hoverMenu(inout, menu) {
	var menus = document.getElementsByClassName(menu);
	for (var i = 0; i < menus.length; i++) {
		if (inout === "hover") {
			menus[i].classList.remove("hidden");
		} else {
			menus[i].classList.add("hidden");
		}
	}
}

function leavePage(link) {
	var body = document.getElementById('body');
	body.className += " fadeout";
	setTimeout(() => {
		if (link === "work") {
			window.location.href = "work.html";
		} else if (link === "home") {
			window.location.href = "index.html";
		} else {
			location.reload();
		}
	}, 600);
}

function filter(which, tag) {
	var allImgs = document.getElementsByClassName("col-md-4");
	var headers = document.getElementsByClassName("category-name");
	var anchors = document.getElementsByClassName("anchor");
	for (var l = 0; l < allImgs.length; l++) {
		allImgs[l].classList.add("filterHidden");
	}
	for (var m = 0; m < headers.length; m++) {
		headers[m].classList.add("filterHidden");
		anchors[m].classList.add("filterHidden");
	}
	var back = document.getElementById("back");
	back.classList.remove("filterHidden");
	var view = document.getElementById("view");
	view.classList.add("filterHidden");
	var medium = document.getElementById("med");
	medium.classList.add("filterHidden");
	var tags = document.getElementsByClassName(tag);
	for (var n = 0; n < tags.length; n++) {
		tags[n].classList.remove("filterHidden");
	}
	var tagYearHeaderContainer = document.getElementById("tagyear-header-container");
	tagYearHeaderContainer.classList.remove("filterHidden");
	var tagYearHeader = document.getElementById("tagyear-header");
	tagYearHeader.innerHTML = tag;
	var tagsMenu = document.getElementById("tag-menu");
	var yearsMenu = document.getElementById("year-menu");
	if (which === "tag") {
		if (!yearsMenu.classList.contains("filterHidden")) {
			yearsMenu.classList.add("filterHidden");
		}
		tagsMenu.classList.remove("filterHidden");
	} else {
		if (!tagsMenu.classList.contains("filterHidden")) {
			tagsMenu.classList.add("filterHidden");
		}
		yearsMenu.classList.remove("filterHidden");
	}
	var tagTop = document.getElementById("tag-top");
	tagTop.classList.remove("filterHidden");
	var url = location.href;
    location.href = "#tag-top";
    history.replaceState(null,null,url);
}

function back() {
	var allImgs = document.getElementsByClassName("col-md-4");
	var headers = document.getElementsByClassName("category-name");
	var anchors = document.getElementsByClassName("anchor");
	for (var i = 0; i < allImgs.length; i++) {
		if (allImgs[i].classList.contains("filterHidden")) {
			allImgs[i].classList.remove("filterHidden");
		}
	}
	for (var k = 0; k < headers.length; k++) {
		if (headers[k].classList.contains("filterHidden")) {
			headers[k].classList.remove("filterHidden");
		}
	}
	for (var j = 0; j < anchors.length; j++) {
		if (anchors[j].classList.contains("filterHidden")) {
			anchors[j].classList.remove("filterHidden");
		}
	}
	var tagYearHeaderContainer = document.getElementById("tagyear-header-container");
	tagYearHeaderContainer.classList.add("filterHidden");
	var back = document.getElementById("back");
	back.classList.add("filterHidden");
	var view = document.getElementById("view");
	view.classList.remove("filterHidden");
	var medium = document.getElementById("med");
	medium.classList.remove("filterHidden");
	var tagsMenu = document.getElementById("tag-menu");
	var yearsMenu = document.getElementById("year-menu");
	if (!yearsMenu.classList.contains("filterHidden")) {
		yearsMenu.classList.add("filterHidden");
	}
	if (!tagsMenu.classList.contains("filterHidden")) {
		tagsMenu.classList.add("filterHidden");
	}
	var url = location.href;
    location.href = "#tag-top";
    history.replaceState(null,null,url);
}