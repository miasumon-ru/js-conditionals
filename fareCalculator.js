var age 
var student =  true;
var price = 800;

if(age <10){
    console.log('your price is free');
}
else if (student===true){

    // 50% discount

    var discunt = price*50/100;
    var payAmount = price - discunt;
    console.log(payAmount);
}
else if (age<=60){
    // 15% discount for senior citizen

    var discunt = price*15/100;
    var payAmount = price - discunt;
    console.log(payAmount);

}

else{
    console.log('your price is 800tk');
}