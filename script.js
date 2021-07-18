const btn = document.querySelector(".btn");
const body = document.querySelector(".body");
let a = "a varibale";
let b = "b variable";
btn.addEventListener("click", function () {
  console.log("javascript code is running perfectly.!!");
  btn.textContent = "JavaScript Code is running.";
  body.style.backgroundColor = "red";
});
console.log(a);
console.log("second change");
