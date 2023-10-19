// from https://github.com/pgbovine/OnlinePythonTutor/issues/264
// 'e' is duplicated in the loop
const x = ['hello', 'world', 'goodbye'];    
for (const e of x) {    
  console.log('ELEMENT: ' + e);
}
