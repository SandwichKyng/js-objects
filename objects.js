

const button = document.getElementById("firstButton")
const text1 = document.getElementById("firstInput")
const text2 = document.getElementById("secondInput")

// let myDocument = {
// name: "DOM is a tree",
// getElementById: someFunctionName
// addEventListener:
// }

// function someFunctionName(para1){
// console.log(`Called with argument: ${para1} `)
// }

// console.log(myDocument)

button.addEventListener("click", Output)

function Output() {
const number1 = Number(text1.value);
const number2 = Number(text2.value);

for (let i = number1; i <= number2; i++) {
console.log(i);
}
}
