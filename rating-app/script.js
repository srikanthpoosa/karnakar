const rateEl = document.getElementById("rate");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
//console.log('five', five);
const stars = [one, two, three, four, five];

let starting;
let ending;
var select = false;
stars.forEach((star) => {
  star &&
    star.addEventListener("click", () => {
      let val = star.id;
      console.log("val", val);
      for (var i = 0; i < val; i++) {
        stars[i].classList.add("rated");
      }
      for (var i = 4; i >= val; i--) {
        stars[i].classList.remove("rated");
      }
    });

  star &&
    star.addEventListener("mousemove", (e) => {
        //e.preventDefault();
      let x = star.id;
      console.log("x", x);
      for (var i = 0; i < x; i++) {
        stars[i].classList.add("rated");
      }

      for (var i = 4; i >= x; i--) {
        stars[i].classList.remove("rated");
      }
    });

// star && star.addEventListener("mousedown", (e)=>{
//     let starting = star.id;
//     console.log('starting', starting);
// })
// star && star.addEventListener("mouseup", (e)=>{
//     let ending = star.id;
//     console.log('ending', ending);
// })

// console.log('check', starting);

// if(starting){
//     for (var i = starting; i < ending; i++) {
//         console.log(i);
        
//          stars[i].classList.add("rated");
//       }
// }
})


