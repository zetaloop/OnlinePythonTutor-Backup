// from https://github.com/pgbovine/OnlinePythonTutor/issues/145
// "There's an extra "cur" block variable created and set to 0 (initial value of i) displayed in the visualizer, which is mysterious!"
function foo() {
  let cur = 42;
  for (let i = 0; i < 10; i++)
    console.log(i);
}

foo()
