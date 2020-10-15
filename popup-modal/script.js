const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const container = document.getElementById("popup-container");

openBtn.addEventListener("click", ()=>{
    container.classList.add("active");
    openBtn.classList.add("disable");
    console.log('container', container);
    console.log('open');
    
})

closeBtn.addEventListener("click", ()=>{
    container.classList.remove("active");
    openBtn.classList.remove("disable");
})