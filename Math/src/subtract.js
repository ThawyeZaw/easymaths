var correct = new Audio("./sounds/correct.mp3");
var wrong = new Audio("./sounds/wrong.mp3");
var one = document.getElementById("one");
var two = document.getElementById("two");
var num1, num2, value, ans;

window.addEventListener("load", (event) => {
  Generate();
});

function Generate() {
  num1 = Math.floor(Math.random() * 100);
  num2 = Math.floor(Math.random() * 50);

  if (num1 > num2) {
    ans = eval(num1 - num2);
    document.getElementById("one").innerHTML = num1;
    document.getElementById("two").innerHTML = num2;
  } else {
    ans = eval(num2 - num1);
    document.getElementById("one").innerHTML = num2;
    document.getElementById("two").innerHTML = num1;
  }
}

function answer() {
  value = document.getElementById("ans").value;
  if (value == ans) {
    correct.play();
    alert("correct");
  } else {
    wrong.play();
    alert("wrong");
  }
  document.getElementById("ans").value = "";
}
