// from https://github.com/pgbovine/OnlinePythonTutor/issues/285
// Step 9: "index shows as 3 in python tutor, but prints as -1 in // console.log()"
const baseRange = function (...arg) {

    let [start, end, step = 1] = arg;
    let index = -1,
        length = Math.ceil( (end -start) / step ),
        result = Array(length);
    console.log('index:', index);
    while ( length--) {
        result[ ++index ] = start;
        start += step;
    }
    return result;
}
//baseRange(1,4);
//baseRange(1,4,2);
baseRange(4,1,-1);
