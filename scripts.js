function version(inout) {
	var versions = document.getElementsByClassName("ver");
	for (var i = 0; i < versions.length; i++) {
		if (inout === "hover") {
			versions[i].classList.remove("hidden");
		} else {
			versions[i].classList.add("hidden");
		}
	}
}

