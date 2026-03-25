function reverseEachWord(str) {
  return str
    .split(" ")                
    .map(word => 
      word.split("").reverse().join("")  
    )
    .join(" ");                
}

console.log(reverseEachWord("hello world"));

<<<<<<< HEAD
function RCB(){
  console.log("Bengalur");
}

function DC(){
  console.log("Delhi");
}

function KKR(){
  console.log("Kolkata");
=======
function MI(){
  console.log("Mumbai Indians");
}

function CSK(){
  console.log("Chennai Super Kings");
}

function KXIP(){
  console.log("Punjab");
>>>>>>> ff92460e07c6298120cb1102700d90f62b5f73fa
}