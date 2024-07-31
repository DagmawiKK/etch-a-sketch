let container = document.querySelector(".container");

function createInnerDiv() {

    let outerDiv = document.createElement("div");
    outerDiv.classList.add("column");

    for (i = 0; i < 16; i++) {
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
let div5 = createInnerDiv();
let div6 = createInnerDiv();
let div7 = createInnerDiv();
let div8 = createInnerDiv();
let div9 = createInnerDiv();
let div10 = createInnerDiv();
let div11 = createInnerDiv();
let div12 = createInnerDiv();
let div13 = createInnerDiv();
let div14 = createInnerDiv();
let div15 = createInnerDiv();
let div16 = createInnerDiv();

container.appendChild(div1);
container.appendChild(div2);
container.appendChild(div3);
container.appendChild(div4);
container.appendChild(div5);
container.appendChild(div6);
container.appendChild(div7);
container.appendChild(div8);
container.appendChild(div9);
container.appendChild(div10);
container.appendChild(div11);
container.appendChild(div12);
container.appendChild(div13);
container.appendChild(div14);
container.appendChild(div15);
container.appendChild(div16);

let innerDivs = document.querySelectorAll(".innerDiv");
innerDivs.forEach(innerDiv => {
    innerDiv.addEventListener('mouseenter', function (event) {
        innerDiv.style.backgroundColor = "white";
    });
    innerDiv.addEventListener('mouseleave', function (event) {
        innerDiv.style.backgroundColor = "blueviolet";
    });
});
