console.log("file loaded");

const tiles = [
				2, 1, 0, 0, 
				0, 2, 1, 1,
				1, 0, 2, 0,
				2, 0, 1, 0 ];

const changeClass = function() {
	document.querySelectorAll(".container > div").forEach(
		(element, index) => {
			element.className = "tile-class-" + tiles[index];
		}
	)
	return 0;
}

changeClass();