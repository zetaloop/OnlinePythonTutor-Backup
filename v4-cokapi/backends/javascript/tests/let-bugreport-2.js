// from https://github.com/pgbovine/OnlinePythonTutor/issues/283
// step 14: "instead of having the result variable, there is n (block 1)"
function multiply (arr, n) {
  if (n<=0) {
    return arr[0];
  } else {
    let result = multiply(arr, n-1) * arr[n];
    console.log(result);
    return result;
  }
}

multiply([2,3,4,5,6,7,8,9],4);
