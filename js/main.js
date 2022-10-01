console.log("file loaded");

const container = document.querySelector("#container");

const generateRandomNumber = function() {
	return Math.floor(Math.random() * 3);
}

const generateMap = function() {
		fetch("/maps/small.json")
			.then((response) => response.json())
			.then((json) => {
				console.log(json.tiles)
				json.tiles.forEach(
					(row) => {
						for (let i = 0; i < row.length; i++){
							const tileElement = document.createElement("div");
						tileElement.className = "tile-class-" + row[i];

						container.appendChild(tileElement);
						}
					}
				)
			});
}

generateMap();