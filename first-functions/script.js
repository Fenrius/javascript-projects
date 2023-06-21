function welcomeMsg(a) {
  return console.log("Welcome " + a + "!");
}

console.log(welcomeMsg("Kristof"));

function calcGrossPrice(a, b) {
  return b * a + a;
}

console.log(calcGrossPrice(40, 0.16));

function addPositive(a, b) {
  return Math.abs(a) + Math.abs(b);
}

console.log(addPositive(-8, 7));
