/* const size = 25;
let result;

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result); */
// Returns Greater than 10 but should return Greater than 20

/* function oddEven(n) {
  let result;
  if (Math.floor(n / 2) * 2 === n) {
    result = "Number is even";
  } else if (Math.floor(n / 2) * 2 !== n) {
    result = "Number is odd";
  }
  return result;
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even */

function oldYoung(n) {
  let result;

  switch (n) {
    /* case typeof n === "string":
      result = "invalid parameter";
      break; */
    case n <= 0:
      result = "invalid parameter";
      break;
    default:
      if (n <= 16 && n >= 0) {
        result = "children";
      } else if (n <= 50 && n > 0) {
        result = "young person";
      } else if (n > 0) {
        result = "elder person";
      }
  }
  return result;
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
