$.get("sidebar.html", function(data) {
	$("#sidebar-placeholder").replaceWith(data);
});

$.get("sidebar.html", function(data) {
	$("#sidebar-placeholder2").replaceWith(data);
});

$.get("work index view.html", function(data) {
	$("#work-view").replaceWith(data);
});

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
	var vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var workPage = "index"; //can change to "featured" for featured landing page
var x = window.matchMedia("(min-width: 768px)");
screenSize(x);
x.addListener(screenSize);

function checkHash(pieces) {
	if (window.location.hash.includes("year-")) {
		filter('year', window.location.hash.substring(6));
	} else if (window.location.hash.includes("tag-")) {
		filter('tag', window.location.hash.substring(5));
	} else if (window.location.hash.includes("medium-")) {
		location.href = "#" + window.location.hash.substring(1);
	} else {
		for (var i = 0; i < pieces.length; i++) {
			if (window.location.hash.substring(1) === pieces[i].string) {
				pieceView(pieces[i], pieces[i].string);
			}
		}
	}
}

function screenSize(x) {
	if (x.matches) {
		if (workPage === "featured") {
			$.get("work featured view.html", function(data){
				$("#work-view").replaceWith(data);
			});
		}
	} else {
		if (workPage === "index" || workPage === "featured") {
			$.get("work index view.html", function(data){
				$("#work-view").replaceWith(data);
			});
		}
	}
}

function indexView() {
	workPage = "index";
	$.get("work index view.html", function(data){
		$("#work-view").replaceWith(data);
	});
	var footer = document.querySelector("footer");
	var back2 = document.getElementById("back2");
	if (!footer.classList.contains("filterHidden")) {
		footer.classList.add("filterHidden");
	}
	if (!back2.classList.contains("filterHidden")) {
		back2.classList.add("filterHidden");
	}
}

function featuredView() {
	workPage = "featured";
	$.get("work featured view.html", function(data){
		$("#work-view").replaceWith(data);
	});
	var footer = document.querySelector("footer");
	var back2 = document.getElementById("back2");
	if (!footer.classList.contains("filterHidden")) {
		footer.classList.add("filterHidden");
	}
	if (!back2.classList.contains("filterHidden")) {
		back2.classList.add("filterHidden");
	}
}

function goBack() {
	history.back();
}

window.addEventListener('popstate', function(event) {
	if (workPage == "piece" || workPage == false) {
		indexView();
		history.replaceState(null, "", "work.html");
	} else if (anchorLink != null) {
		anchor(anchorLink);
	} else if (prevWhich != null) {
		filter(prevWhich, prevTag);
	} else if (prevPiece != null) {
		pieceView(prevPiece, prevPieceString);
	}
}, false);

window.onbeforeunload = function(e) {
	history.replaceState(null, "", "work.html");
}

var anchorLink;
function anchor(tag) {
	anchorLink = tag;
	prevPiece = null;
	prevPieceString = null;
	prevWhich = null;
	prevTag = null;
}

var prevPiece;
var prevPieceString;
function pieceView(piece, pieceString) {
	anchorLink = null;
	prevPiece = piece;
	prevPieceString = pieceString;
	prevWhich = null;
	prevTag = null;
	workPage = "piece";
	var footer = document.querySelector("footer");
	footer.classList.remove("filterHidden");
	var back2 = document.getElementById("back2");
	back2.classList.remove("filterHidden");
	$.get("work piece view.html", function(data){
		$("#work-view").replaceWith(data);
	});
	var year = document.getElementsByClassName("piece-year");
	var title = document.getElementsByClassName("piece-title");
	var size = document.getElementsByClassName("piece-size");
	var medium = document.getElementsByClassName("piece-medium");
	var statement = document.getElementsByClassName("statement");
	var url = document.getElementsByClassName("piece-url");
	year[0].innerHTML = piece.year;
	title[0].innerHTML = piece.title;
	size[0].innerHTML = piece.size;
	medium[0].innerHTML = piece.medium;
	statement[0].innerHTML = piece.statement;
	url[0].innerHTML = piece.url;
	pieceImages(pieceString);
	history.pushState(null, "", "work.html#" + pieceString);
}

function pieceImages(pieceString) {
	$.get("slides.html", function(data) {
		data = $('<div>', {
			html: data
		});
		var elem = data.find(`#${pieceString}`);
		$(".piece-slides").replaceWith(elem);
		var slides = document.getElementsByClassName("slide");
		if (slides.length < 1) {
			pieceImages(pieceString);
		} else {
			var slideTotal = document.getElementById("slide-total");
			slideTotal.innerHTML = slides.length;
			if (slides.length < 10) {
				slideTotal.innerHTML = "0" + slides.length;
			}
		}
	});	
}

function hoverMenu(inout, menu) {
	var menus = document.getElementsByClassName(menu);
	for (var i = 0; i < menus.length; i++) {
		if (inout === "hover") {
			menus[i].classList.remove("hidden");
			if (menu.includes("featured")) {
				menus[i].classList.add("hover");
			}
		} else {
			if (menus[i].classList.contains("spotlight")) {
				menus[i].classList.remove("hidden");
			} else {
				menus[i].classList.add("hidden");
				if (menu.includes("featured")) {
					menus[i].classList.remove("hover");
				}
			}
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

var prevWhich;
var prevTag;
function filter(which, tag) {
	workPage = false;
	anchorLink = null;
	prevWhich = which;
	prevTag = tag;
	prevPiece = null;
	prevPieceString = null;
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
		if (tags[n].classList.contains("extra")) {
			tags[n].style.display = "flex";
		}
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
	history.pushState(null, "", "work.html#" + which + "-" + tag);
//	var tagTop = document.getElementById("tag-top");
//	tagTop.classList.remove("filterHidden");
//	var url = location.href;
//    location.href = "#tag-top";
//    history.replaceState(null, null, url);
}

function expand(plusminus, medium, id) {
	workPage = false;
	var pieces = document.getElementsByClassName(medium);
	var link = document.getElementById(id);
	if (plusminus === "plus") {
		for (var i = 0; i < pieces.length; i++) {
			if (pieces[i].classList.contains("extra")) {
				pieces[i].style.display = "flex";
			}
		}
	} else {
		for (var j = 0; j < pieces.length; j++) {
			if (pieces[j].classList.contains("extra")) {
				pieces[j].style.display = "none";
			}
		}	
	}
	if (link.innerHTML === "+") {
		link.innerHTML = "-";
		link.setAttribute( "onclick", `expand('minus', '${medium}', '${medium}-expand')`);
	} else {
		link.innerHTML = "+";
		link.setAttribute( "onclick", `expand('plus', '${medium}', '${medium}-expand')`);
	}
}

function back() {
	var allImgs = document.getElementsByClassName("col-md-4");
	var headers = document.getElementsByClassName("category-name");
	var anchors = document.getElementsByClassName("anchor");
	var expands = document.getElementsByClassName("expand");
	for (var i = 0; i < allImgs.length; i++) {
		if (allImgs[i].classList.contains("filterHidden")) {
			allImgs[i].classList.remove("filterHidden");
		}
		if (allImgs[i].classList.contains("extra")) {
			allImgs[i].style.display = "none";
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
	for (var l = 0; l < expands.length; l++) {
		if (expands[l].innerHTML === "-") {
			var medium = expands[l].id.substr(0, expands[l].id.length - 7);
			expands[l].innerHTML = "+";
			expands[l].setAttribute( "onclick", `expand('plus', '${medium}', '${medium}-expand')`);
		}
	}
	var tagYearHeaderContainer = document.getElementById("tagyear-header-container");
	tagYearHeaderContainer.classList.add("filterHidden");
	var back = document.getElementById("back");
	back.classList.add("filterHidden");
	var view = document.getElementById("view");
	view.classList.remove("filterHidden");
	var med = document.getElementById("med");
	med.classList.remove("filterHidden");
	var tagsMenu = document.getElementById("tag-menu");
	var yearsMenu = document.getElementById("year-menu");
	if (!yearsMenu.classList.contains("filterHidden")) {
		yearsMenu.classList.add("filterHidden");
	}
	if (!tagsMenu.classList.contains("filterHidden")) {
		tagsMenu.classList.add("filterHidden");
	}
//	var url = location.href;
//    location.href = "#tag-top";
//    history.replaceState(null,null,url);
}

var slideIndex = 0;
var change = false;
var slides = document.getElementsByClassName("slide");
var featNum = document.getElementsByClassName("feat-num");
var feat = document.getElementsByClassName("feat");
var piece = document.getElementsByClassName("featured-pieces");
var myTimeout;

function slideshow() {
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	showSlides(slideIndex);
//	if (change) {
//		change = false;
//		setTimeout(slideshow, 3500);
//	} else {
//		setTimeout(slideshow, 3500);
//	}
	myTimeout = setTimeout(slideshow, 3500);
}

function showSlides(num) {
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.opacity = "0";
		slides[i].style.visibility = "hidden";
		featNum[i].classList.remove("spotlight");
		featNum[i].style.pointerEvents = "all";
		feat[i].classList.remove("spotlight");
		piece[i].classList.add("hidden");
		if (!feat[i].classList.contains("hover")) {
			feat[i].classList.add("hidden");
		}
	}
	slides[num - 1].style.opacity = "1";
	featNum[num - 1].classList.add("spotlight");
	feat[num - 1].classList.add("spotlight");
	featNum[num - 1].style.pointerEvents = "none";
	feat[num - 1].classList.remove("hidden");
	piece[num - 1].classList.remove("hidden");
	slides[num - 1].style.visibility = "visible";
	if (feat[num - 1].classList.contains("hover")) {
		feat[num - 1].classList.remove("hover");
	}
}

var slideIndexPiece = 1;
function showPieceSlides(plus) {
	var slideTotal = document.getElementById("slide-total");
	slideTotal.innerHTML = slides.length;
	if (slides.length < 10) {
		slideTotal.innerHTML = "0" + slides.length;
	}
	if (plus) {
		slideIndexPiece++;	
	} else {
		slideIndexPiece--;
	}
	if (slideIndexPiece > slides.length) {
		slideIndexPiece = 1;
	}
	if (slideIndexPiece < 1) {
		slideIndexPiece = slides.length;
	}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.opacity = "0";
		slides[i].style.visibility = "hidden";
		slides[i].classList.remove("spotlight");
	}
	slides[slideIndexPiece - 1].classList.add("spotlight");
	slides[slideIndexPiece - 1].style.opacity = "1";
	slides[slideIndexPiece - 1].style.visibility = "visible";
	var pieceslideIndexPiece = document.getElementById("slide-index");
	pieceslideIndexPiece.innerHTML = slideIndexPiece;
	if (slideIndexPiece < 10) {
		pieceslideIndexPiece.innerHTML = "0" + slideIndexPiece;
	}
}

function changeIndex(n) {
	showSlides(n);
	n--;
	slideIndex = n;
//	change = true;
}

function advanceSlide() {
	slideIndex++;
	showSlides(slideIndex);
	slideIndex--;
}