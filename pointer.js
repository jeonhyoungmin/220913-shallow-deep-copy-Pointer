// let a = 1;
// let b = a;
// console.log(b);
// console.log( b === a )

// let a = [1,2,3];
// let b = a;
// console.log( b === a )

// let a = [1,2,3];
// let b = [1,2,3];
// let c = 1;
// let d = 1
// console.log( b === a )
// console.log( c === d )

// let a = [1,2,3]
// let b = a;
// b.push(4);
// console.log(a);
// console.log(b);

// let a = [1,2,3]
// let b = [1,2,3];
// b.push(4);
// console.log(a);
// console.log(b);







let a = [2,3,4];
let b = a.map(value => value);

a.map(function(value){
  return value;
})

function cmdMap(arr) {
  let temp = [];
  arr.forEach(function(value){
    temp.push(value);
  })
  return temp;
}

function cmdMapTwo (arr) {
  let temp = [];
  for(let i = 0; i < arr.length; i++){
    temp[temp.length] = arr[i];
  }
  return temp;
}

console.log(a === b)
// * 깊은 복사