let container = document.querySelector(".container");

function createInnerDiv() {

    let outerDiv = document.createElement("div");
    outerDiv.classList.add("column");

    for (i = 0; i < 4; i++) {
        let innerDiv = document.createElement("div");
        innerDiv.classList.add("innerDiv");
        outerDiv.appendChild(innerDiv);
    }
    return outerDiv;
}

let div1 = createInnerDiv();
let div2 = createInnerDiv();
let div3 = createInnerDiv();
let div4 = createInnerDiv();

container.appendChild(div1);
container.appendChild(div2);
container.appendChild(div3);
container.appendChild(div4);