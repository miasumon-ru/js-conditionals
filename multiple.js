var sallary = 25000;
var isBcs = false;
var height = 64;
var hasCar= false;


// if (sallary>20000 && height >56){
//     console.log('kobul');
// }
// else{
//     console.log('vag');
// }




// if (sallary>20000 || height >56){
//     console.log('kobul');
// }
// else{
//     console.log('vag');
// }



// if (sallary>20000 || height >56 || isBcs == true  ) {
//     console.log('kobul');
// }
// else{
//     console.log('vag');
// }




// if (sallary>20000 && height >56 && isBcs == true  ) {
//     console.log('kobul');
// }
// else{
//     console.log('vag');
// }



// complex condition

// if ((sallary>20000 && height >56 && isBcs == true) || hasCar == true) {
//     console.log('kobul');
// }
// else{
//     console.log('vag');
// }




// if ((sallary>20000 || height >56 || isBcs == true) && hasCar == false) {
//     console.log('kobul');
// }
// else{
//     console.log('vag');
// }


var price = 1000;

if (price>=5000){
    // 10% discount

    const discount = price*10/100;
    const payAmount = price - discount;
    console.log(payAmount);

}
else if (price>=2500){


     // 5% discount

     const discount = price*5/100;
     const payAmount = price - discount;
     console.log(payAmount);

}

else{
    console.log(price);
}

