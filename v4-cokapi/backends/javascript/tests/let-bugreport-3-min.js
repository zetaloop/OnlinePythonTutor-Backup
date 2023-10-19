// minimized form of let-bugreport-3.js
// weird things starting in step 3:
// - empty-looking undefined variable above 'arg'
// - 'arg (block 1)' is a duplicate of arg, seems like it should be 'start'
// - all sorts of let-defined vars look way off!
const baseRange = function (...arg) {
    let [start, end, step = 1] = arg;
    let index = -1, length = Math.ceil( (end -start) / step );
    console.log('index:', index);
}

baseRange(4,1,-1);
