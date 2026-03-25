function reverseEachWord(str) {
  return str
    .split(" ")                
    .map(word => 
      word.split("").reverse().join("")  
    )
    .join(" ");                
}

console.log(reverseEachWord("hello world"));

function MI(){
  console.log("Mumbai Indians");
}

function CSK(){
  console.log("Chennai Super Kings");
}

function KXIP(){
  console.log("Punjab");
}