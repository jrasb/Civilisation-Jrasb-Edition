// CONST VARIABLES
const container = document.querySelector("#container");

//LET VARIABLES

// FUNCTIONS

const generateMap = function() {
	let x = -1;
	let y = 0;

	fetch("/maps/small.json")
		.then((response) => response.json())
		.then((json) => {
			json.tiles.forEach(
				(row) => {
					for (let i = 0; i < row.length; i++){
						const tileElement = document.createElement("div");
						if (x == 40) {
							x = 0;
							y += 1;
						} else {
							x += 1;
						}
						tileElement.id = x + "." + y;
						tileElement.className = "tile-class-" + row[i];

						container.appendChild(tileElement);
					}
				}
			)
		});
}

generateMap();