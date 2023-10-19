// minimized form of let-bugreport-7.js
//
// well-actually make it a bit more complex since put both a global and
// a local version so we can handle both cases ...

// global version:
let cur = 42;
for (let i = 100; i < 101; i++) {
  let aLetGlobal = 1234;
  console.log(i);
}

// local version:
function foo() {
  let cur = 42;
  for (let i = 200; i < 201; i++) {
    let anotherLocal = 4242;
    console.log(i);
  }
}

foo()
