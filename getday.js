// const getDay = (dateVal) => {
// switch (dateVal) {
//     case 0:
//         console.log("this is Sunday")
//         break;
//     case 1:
//         console.log("this is Monday")
//         break;
//     case 2:
//         console.log("this is Tuesday")
//         break;
//     case 3:
//         console.log("this is Wednesday")
//     case 4:
//         console.log("this is Thursday")
//         break;
//     case 5:
//         console.log("this is Friday")
//         break;
//     case 6:
//         console.log("this is Saturday")
// }
// };

// getDay(new Date().getDay());

// const maxNumber = (arrVal) => {
//    if(arrVal.length) {return Math.max(arrVal.length)}
// };

// console.log(maxNumber([1, 5, 3, 2, 8]));

// const maxNumber = (arrVal) => {
//     const Max = Math.max(...arrVal);
//     const Min = Math.min(...arrVal);
//     return [Min, Max];
// };

// console.log(maxNumber([1, 5, 3, 2, 8]));

// var myGlobal = 10;

// function fun1() {
//   oopsGlobal = 5;
// }

// // Only change code above this line
// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// }.

// fun2(10)

let ket = ""

function kelulusan(nama, nilai) {
    if(nilai > 70){
        ket = "lulus";
    } else {ket = "Tidak Lulus"};

    console.log(`Nama: ${nama}, Nilai: ${nilai}, Keterangan: ${ket}`)
};

kelulusan("Rizky", 75);