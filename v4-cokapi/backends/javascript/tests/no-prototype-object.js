// 2020-02-10: almost works properly now, but there's a mysterious
// "TypeError: value.valueOf is not a function" error when running
// console.log() ... weird! anyhow, punt for now.
var y = Object.create(null);
console.log(y);
