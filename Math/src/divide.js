var correct = new Audio('./sounds/correct.mp3')
var wrong = new Audio('./sounds/wrong.mp3')
var one = document.getElementById("one")
var two = document.getElementById("two")
var num1, num2, value, ans;

window.addEventListener('load', (event) => {
  Generate()
});

function Generate() {
  num2 = Math.floor(Math.random() * 9)
  num1 = num2 * Math.floor(Math.random() * 9)
  ans = num1 / num2
  one.innerHTML = num1
  two.innerHTML = num2
}

function answer() {
  value = document.getElementById("ans").value
  if (value == ans) {
    correct.play()
    alert("correct")
  } 
  else if(value == ""){
    alert("answer can't be empty!")
  }
  else {
    wrong.play()
    alert("wrong")
  }
  document.getElementById("ans").value = "";
}