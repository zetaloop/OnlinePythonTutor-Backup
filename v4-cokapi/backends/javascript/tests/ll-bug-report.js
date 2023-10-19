// https://github.com/pgbovine/OnlinePythonTutor/issues/244
// bug: execution terminates after 2 steps
class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString() {
        return `->${this.value.age}`;
    }

}
const F = Symbol("femmme");
const H = Symbol("homme");
const listPers = new LinkedListNode({name: "gag",age: 12,sex: F});

console.log(listPers.toString());
