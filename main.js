var intervalId;
var myBox = document.getElementById("box");
var counter = 0;
function startFunc() {
  intervalId = setInterval(() => {
    myBox.style.height = counter++ + "vh";
  }, 10);
}

function stopFunc() {
  clearInterval(intervalId);
}
function printKey(e) {
  if (e.key == "Enter"){
    clearInterval(intervalId)
  }
}
