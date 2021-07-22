function getAdd() {
  let foo = 1;

  return function () {
    foo = foo + 1;
    return foo;
  };
}
const add = getAdd();
console.log(add());
console.log(add());
foo = 999;
console.log(add());
console.log(add());
