/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.
*/

function cutestCat(cats) {
let cutest;
let least = 0;
//debugger
  // while (i < cats.length) {
  //   let cat = cats[i];
  //   debugger 
  //   if (cat > cutest) {
  //     cutest = cat.cuteness;
  //   }
  //   i++;
  //   debugger
  // }
  for( let obj of cats){
    if( obj.cuteness > least){
      least = obj.cuteness
      cutest = obj
    }
  }
  return cutest;
}

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]
debugger
console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }