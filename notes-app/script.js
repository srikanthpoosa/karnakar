const noteEle = document.querySelector(".note");
const body = document.querySelector("body");
const addEle = document.querySelector(".addNote");
const notesData = JSON.parse(localStorage.getItem('notes'));
console.log('notesData', notesData);

if(notesData){
    notesData.forEach((note)=> {
        addNote(note)
    })
}

addEle.addEventListener("click", () => {
  addNote();
});


function addNote(text='') {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="tools">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash"></i></button>
    </div>
    <div class="main hidden"></div>
  <textarea class="textarea"></textarea>`;

  const deleteBtn = note.querySelector(".delete");
  const editBtn = note.querySelector(".edit");
  const textareaEle = note.querySelector("textarea");
  const mainEle = note.querySelector(".main");
  textareaEle.value = text;
  mainEle.innerHTML = marked(text);
 

  deleteBtn.addEventListener("click", () => {
    note.remove();
    updateLS();
  });

  editBtn.addEventListener("click", () => {
    textareaEle.classList.toggle("hidden");
    mainEle.classList.toggle("hidden");
    console.log("hidden class is added");
  });

  textareaEle.addEventListener("input", (e) => {
    const { value } = e.target;
    console.log("inputText", value);
    mainEle.innerHTML = marked(value);
    updateLS();
  });

  document.body.appendChild(note);
}

function updateLS() {
    const notes = [];
    const notesTexts = document.querySelectorAll('textarea');
    notesTexts.forEach((note)=> {
        notes.push(note.value);
    });
    localStorage.setItem('notes', JSON.stringify(notes))
}


