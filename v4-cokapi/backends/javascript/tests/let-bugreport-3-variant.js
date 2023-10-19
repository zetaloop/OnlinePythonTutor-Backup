// variant of let-bugreport-3.js
// test '...' thing, which leads to a spurious extra unnamed ''
// variable, which we should ignore
function baseRange(x, y, ...arg) {
  let start = arg[0];
  let end = arg[1];
  let step = arg[2];
  console.log(step);
}

baseRange(10, 20, 4,1,-100);
