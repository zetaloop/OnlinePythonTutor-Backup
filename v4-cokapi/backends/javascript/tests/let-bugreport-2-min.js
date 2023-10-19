// minimized form of let-bugreport-2.js
function multiply(arr, n) {
  if (n<=0) {
    return arr[0];
  } else {
    let result = multiply(arr, n-1) * arr[n];
    return result;
  }
}

multiply([2,3], 1);
