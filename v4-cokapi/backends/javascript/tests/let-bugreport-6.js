// https://github.com/pgbovine/OnlinePythonTutor/issues/192
// see below for user report ...
let categoryList = ['tiger', 'lion', 'house']
  
categoryList.forEach(c => {
  console.log('outside of if', c)
})

if (categoryList){
  // user: "changing the let to a var on [the next line] makes the script work as expected."
  let categories = 'our categories are:'
  
  console.log('inside of the if')
  
  categoryList.forEach(c => {
    console.log('in if', c)
    categories += `${c}, `
  })
  
  console.log(categories)
}
