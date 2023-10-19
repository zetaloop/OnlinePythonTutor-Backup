// minimized form of let-bugreport-1.js
function stringPermutations(str) {
    let letters = str.split('');
    let results = [[letters.shift()]]
    while (letters.length) {
        // in step 5 when you step into here, 'results' is duplicated as 'results (block 1)'
        const currLetter = letters.shift()
        let tmpResults = []
        results = tmpResults
    }
}

stringPermutations('ca');
