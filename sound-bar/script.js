const sounds = ["dream", "inspiring", "epic","jef1", "jef2","jef3"];

sounds.forEach((sound)=>{
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;
    document.body.appendChild(btn);
    btn.addEventListener("click", ()=> {
        stopSongs();
        document.getElementById(sound).play();
    })
})

function stopSongs(){
    sounds.forEach((sound)=>{
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}