const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const todosEl = document.getElementById("todos");
const lsTasks = JSON.parse(localStorage.getItem("tasks"));

console.log("lsTasks", lsTasks);

if (lsTasks) {
    lsTasks.forEach((task) => {
        addToList(task);
    });
}

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const todos = inputEl.value;
    addToList(todos);
    inputEl.value = "";
});

function addToList(todos) {
    if (todos) {
        const task = document.createElement("li");

        task.classList.add("todo");
        // task.addEventListener('click', ()=> {
        //     task.classList.toggle("completed");
        // })

        // task.addEventListener('contextmenu', (e)=> {
        //     e.preventDefault();
        //     task.remove();
        //     updateLS();
        // })

        task.innerHTML = `
<button class="checkbtn">
<input id="checkbox" class="checkbx" type="checkbox">
</button>
<span class="task">${todos}</span>
<button class="deleteBtn">
<i class="far fa-trash-alt"></i>
</button>
`;
        // task.innerText = todos;
        todosEl.appendChild(task);

        const deleteBtn = task.querySelector(".deleteBtn");
        console.log("addToList -> deleteBtn", deleteBtn);
        deleteBtn.addEventListener("click", () => {
            task.remove();
            updateLS();
        });

        const checkBtn = task.querySelector(".checkbtn");
        const checkboxEl = task.querySelector(".checkbx");
        console.log("checkBtn", checkBtn);
        if (checkBtn) {
            checkBtn.addEventListener("click", () => {
                if (checkboxEl.checked) {
                    task.classList.add("completed");
                } else {
                    task.classList.remove("completed");
                }
            });
        }
    }
    updateLS();
}

function updateLS() {
    const tasksEle = todosEl.querySelectorAll(".todo");
    console.log("updateLS -> tasksEle", tasksEle);
    const tasks = [];
    if (tasksEle) {
        tasksEle.forEach((task) => {
            console.log("updateLS -> task", task);
            tasks.push(task.innerText);
        });
    }
    console.log("Tasks gathered", tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
