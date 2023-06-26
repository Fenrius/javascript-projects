function oddNumbers(Start, End) {
  let oddN = "";
  for (let index = Start; index <= End; index++) {
    if (index % 2 !== 0 && index !== -Math.abs(index)) {
      if (oddN === "") {
        oddN += index;
      } else {
        oddN += "," + index;
      }
    }
  }

  return oddN;
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

function charCount(a, b) {
  if (b.length !== 1) {
    return;
  }
  let result = 0;

  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    element.toLowerCase;
    if (element === b) {
      ++result;
    }
  }

  return result;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
