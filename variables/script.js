let userName = "Brad";
userName = "Jenna";

function getUserNameLength() {
  return (result = userName.length);
}

console.log(getUserNameLength(userName) > 4);
// ^______________ Should log true

let isString = function (a) {
  return typeof a == "string";
};

console.log(isString("Hello"));
