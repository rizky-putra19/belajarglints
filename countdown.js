// function countdown(val) {
//     let result = [ ];
//     if(val<1) {
//         return [];
//     } 
//     else {
//         result = countdown(val-1)
//         result.unshift(val)
//     }
//     return result
// };

// console.log(countdown(10));

// function berhitung(n) {
//     console.log(n);

//     const newNum = n - 1;
//     if(n > 1) {berhitung(newNum)}
// };

// berhitung(5);

function find(a) {
    if (a === 0) {
      return 1;
    } else {
      return a * find(a - 1);
    }
  }
  
  const num = 3
  
  if(num > 0){
    let result = find(num)
    console.log(`Hasil dari faktorial ${num} adalah ${result}`)
  }
  