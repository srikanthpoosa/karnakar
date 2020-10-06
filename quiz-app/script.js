const quizData = [
  {
    question: "What is my iPhone version?",
    a: "x",
    b: "xr",
    c: "xs",
    d: "xs Max",
    answer: "b",
  },
  {
    question: "What is my bottles color?",
    a: "Black",
    b: "White",
    c: "Pink",
    d: "Red",
    answer: "a",
  },
  {
    question: "Where is TajMahal located?",
    a: "USA",
    b: "India",
    c: "Russia",
    d: "China",
    answer: "b",
  },
  {
    question: "How far is my office?",
    a: "5 miles",
    b: "10 miles",
    c: "3 miles",
    d: "8 miles",
    answer: "c",
  },
  {
    question: "what is my managers name?",
    a: "Manoj Tiwari",
    b: "Mahatma Gandhi",
    c: "Amitab bachhan",
    d: "igor Kichenyk",
    answer: "d",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit_button = document.getElementById("s_button");
const answer_eles = document.querySelectorAll(".answer");
const quizEl = document.getElementById("quiz");

let currentQuestion = 0;
let score = 0;
loadquiz();

function loadquiz() {
  deSelectAnswers();
  const currentQuizData = quizData[currentQuestion];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answer_eles.forEach((answer_ele) => {
    if (answer_ele.checked) {
      answer = answer_ele.id;
    }
  });
  return answer;
}

function deSelectAnswers() {
  answer_eles.forEach((answer_ele) => {
    answer_ele.checked = false;
  });
}

submit_button.addEventListener("click", () => {
  // check to see the answer;
  const answer = getSelected();
  console.log("answer", answer);

  if (answer) {
    if (answer === quizData[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadquiz();
    } else {
      quizEl.innerHTML = `<h2>you have correctly answered ${score}/${quizData.length} questions</h2> 
      <button onClick= location.reload()>Reload</button>`;
    }
  }
});
