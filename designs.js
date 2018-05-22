let color = document.querySelector('#colorPicker').value;
let theCanvas = document.querySelector("#pixelCanvas");

// When size is submitted by the user, call makeGrid()
function makeGrid(height,width) {
	// erase any previous instance of a canvas
	while(theCanvas.firstChild){
		theCanvas.removeChild(theCanvas.firstChild);
	}
	// create new elements and append
	for(let i=0; i<height; i++){
		let newTR = document.createElement('tr');
		//newTR.setAttribute('style', 'height: 20px;');
		theRow = theCanvas.appendChild(newTR);
		for(let j=0; j<width; j++){
			let newTD = document.createElement('td');
			//newTD.setAttribute('style', 'height: 20px;');
			theRow.appendChild(newTD);
		}
	}

	// Event handler for color in the cells 
	document.querySelector('#colorPicker').addEventListener('change', function(e) {
		e.preventDefault(); //this prevents the page from re-loading
		color = document.querySelector('#colorPicker').value;
	});
	// Event handler for the cells to have color
	document.querySelector("#pixelCanvas").addEventListener("click", function(e) {
		e.preventDefault(); //this prevents the page from re-loading
		e.target.style.backgroundColor = color;
	});
} 

// Event handler
document.querySelector("#sizePicker").addEventListener('submit', function(e) {
	e.preventDefault(); //this prevents the page from re-loading
	console.log("In the event handler!");
	let height = document.getElementById('inputHeight').value;
	let width = document.getElementById('inputWidth').value;
	//now call makeGrid();
	makeGrid(height, width);
});