 const sentence = "My name is karunakar reddy!";
 const word = document.getElementById("word");
 let idx = 1;
 autowrite();
 function autowrite(){
  let pos = sentence.slice(0, idx)
  console.log('autowrite -> pos', pos);
  word.innerHTML = `${pos}`;
   idx = idx+1;
   if(idx > sentence.length){
       idx = 0;
   }
 }

 setInterval(() => {
     autowrite();
 }, 300);

