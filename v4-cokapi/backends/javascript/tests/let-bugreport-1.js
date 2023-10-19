// user bug report from: https://github.com/pgbovine/OnlinePythonTutor/issues/288
// step 14: "rIdx is actually showing tmpResults. Everything seems to be one off."
function stringPermutations(str) {
    let letters = str.split('');
    let results = [[letters.shift()]] 
    while (letters.length) {
        const currLetter = letters.shift()
        let tmpResults = []
        // results.forEach((result) => {
        for(let result of results){
            let rIdx = 0
            while (rIdx <= result.length) {
                const tmp = [...result]
                tmp.splice(rIdx, 0, currLetter)
                tmpResults.push(tmp)
                rIdx++
            }
        }
        results = tmpResults
    }
    return results
      .map(letterArray => letterArray.join(''))
      .filter((el, idx, self) => (self.indexOf(el) === idx))
      .sort()
}

console.log(stringPermutations('cat'));
