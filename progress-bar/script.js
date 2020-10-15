const innerContainerEl = document.querySelector(".inner-container");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const returnBtn = document.querySelector(".return");
//const blockEl = document.getElementById("matter");

createBlock();

function createBlock() {
    const block = document.createElement("div");
    block.classList.add("block");
    innerContainerEl.appendChild(block);
    startBtn.addEventListener("click", () => {
        //startProgressing()
        block.classList.remove("reversing");
        block.classList.remove("stopping");
        block.classList.add("starting");
    })

    resetBtn.addEventListener("click", () => {
        block.classList.remove("reversing");
        block.classList.remove("stopping");
        block.classList.remove("starting");
    })

    returnBtn.addEventListener("click", () => {
        block.classList.remove("starting");
        block.classList.remove("stopping");
        block.classList.add("reversing");
    })

    stopBtn.addEventListener("click", () => {
        block.classList.add("stopping");
    })
}




