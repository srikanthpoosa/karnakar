const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");
const pwEl = document.getElementById("pw");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_+=-";

function getupperCase() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getlowerCase() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getnumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbols() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const len = lenEl.value;
  password = "";
  for (i = 0; i < len; i++) {
    password += generateX();
  }
  pwEl.innerHTML = `<span id="pwd">${password}</span> <button class="copy" id="copy" >copyto clipboard</button>`;
  const copyEl = document.getElementById("copy");
  copyEl.addEventListener("click", copyToClip);
}

function generateX() {
  const xs = [];
  if (upperEl.checked) {
    xs.push(getupperCase());
  }
  if (lowerEl.checked) {
    xs.push(getlowerCase());
  }
  if (symbolEl.checked) {
    xs.push(getSymbols());
  }
  if (numberEl.checked) {
    xs.push(getnumbers());
  }

  console.log("xs==", xs);

  return xs[Math.floor(Math.random() * xs.length)];
}

function copyToClip() {
  const copy = document.createElement("textarea");
  const password = pwd.innerText;
  copy.value = password;
  document.body.appendChild(copy);
  copy.select();
  document.execCommand("copy");
  copy.remove();
  alert("password copied to clipboard");
}

generateEl.addEventListener("click", generatePassword);
