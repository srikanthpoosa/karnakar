const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const sizeEl = document.querySelector(".size");
const colorEl = document.getElementById("color");
const clearBtn = document.querySelector(".clear");

let size = 5;
sizeEl.innerHTML = `${size}`;
let clicked = false;
let color = "black";
let x = undefined;
let y = undefined;

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  //ctx.stroke();
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

canvas.addEventListener("mousemove", (e) => {
  const x2 = e.offsetX;
  const y2 = e.offsetY;
  if (clicked) {
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

canvas.addEventListener("mousedown", (e) => {
  clicked = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
  clicked = false;
  x = undefined;
  y = undefined;
});

increaseBtn.addEventListener("click", () => {
  size = size + 5;
  if (size > 50) {
    size = 50;
  }
  sizeEl.innerHTML = `${size}`;
});

decreaseBtn.addEventListener("click", () => {
  size = size - 5;
  if (size < 5) {
    size = 5;
  }

  sizeEl.innerHTML = `${size}`;
});

colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

//drawCircle(100,100);

// function draw(){
//     ctx.clearRect(0,0, canvas.width, canvas.hieght)
//     drawCircle(x++,y++);
//     const id = requestAnimationFrame(draw);
//     console.log('draw -> id', id);

// }
// draw();
