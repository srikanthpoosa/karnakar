const imgs = document.querySelector(".images");
const allImages = document.querySelectorAll(".image");
console.log('allImages', allImages.length);
console.log('imgs', imgs);


let idx = 0;

function run(){
    imgs.style.transform = `translateX(${-idx*500}px)`;
    console.log('run -> idx', idx);
    idx++;
    
    if(idx>= allImages.length){
        idx =0;
    }
    
}

run();

setInterval(() => {
    run();
}, 3000);
