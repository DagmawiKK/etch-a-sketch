let gridButton = document.querySelector("button");
let gridSize = 16

function updateGrid() {
    container.innerHTML = "";

    for (let i = 0; i < gridSize; i++) {
        container.appendChild(createInnerDiv());
    }

    let innerDivs = document.querySelectorAll(".innerDiv");
    innerDivs.forEach(innerDiv => {
        innerDiv.addEventListener('mouseenter', function () {
            innerDiv.style.backgroundColor = "black";
        });
    });
}
gridButton.addEventListener('click', () => {
    gridSize = parseInt(prompt("Please enter the number of your square"));

    if (gridSize > 100 || gridSize < 0 || isNaN(gridSize)) {
        gridSize = prompt("Please Enter an amount no more than 100")
    }

    updateGrid()
})
let container = document.querySelector(".container");

function createInnerDiv() {

    let outerDiv = document.createElement("div");
    outerDiv.classList.add("column");

    for (i = 0; i < gridSize; i++) {
        let innerDiv = document.createElement("div");
        innerDiv.classList.add("innerDiv");
        outerDiv.appendChild(innerDiv);
    }

    return outerDiv;
}

function appendMultipleColumns(num) {

    num = gridSize
    for (let i = 0; i < num; i++) {
        container.appendChild(createInnerDiv());
    }


}


appendMultipleColumns(gridSize);

let innerDivs = document.querySelectorAll(".innerDiv");
innerDivs.forEach(innerDiv => {
    innerDiv.addEventListener('mouseover', function (event) {
        innerDiv.style.backgroundColor = "black";
    });
});
