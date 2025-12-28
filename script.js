


const container = document.getElementById("container");

function createGrid(size) {
  container.innerHTML = ""; // clear old grid

  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    container.appendChild(square);
// element hovering effect draws!
    square.addEventListener("mouseover", () => {
  square.style.backgroundColor = "black";
});
  }
}

// default grid
createGrid(16);

// use button to resize the shape of grid.
const resizeBtn = document.getElementById("resizeBtn");

resizeBtn.addEventListener("click", () => {
  let newSize = prompt("Enter grid size (max 100):");

  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a number between 1 and 100");
  }
});


