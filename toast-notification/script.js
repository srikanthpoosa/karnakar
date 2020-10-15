const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", ()=>{
    createNotification();
})


function createNotification(){
    const notification = document.createElement("div");
    notification.classList.add("toast");
    notification.innerHTML="You have got a friend request"
    container.appendChild(notification);
   setTimeout(() => {
       notification.remove();
   }, 5000);
}