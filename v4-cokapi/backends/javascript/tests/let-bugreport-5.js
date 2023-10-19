// from https://github.com/pgbovine/OnlinePythonTutor/issues/251
// "I don't know what "trie (block 1)" is (it looks like it might be a
// duplicate of "i (block 2)"), "i (block 2)" should be named "i", "i
// (block 3)" should be named "node", "node (block 3)" should be named
// "starting", and "starting (block 4)" should be named "char". I don't
// know where all these "(block #)" are coming from..."
function buildTrie (text) {
  const trie = {};
  text = text.toLowerCase();
  
  for (let i = 0; i < text.length; i++) {
    let node = trie;
    const starting = i;
    
    while (text[i] && text[i] !== ' ' && text[i] !== ',' && text[i] !== '.') {
      const char = text[i];
      node[char] = node[char] || {indexes: []};
      node[char].indexes.push(starting);
      node = node[char];
      i++;
    }
  }
  
  return trie;
}

buildTrie('what');
