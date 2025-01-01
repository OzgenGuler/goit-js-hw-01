function makeTransaction (quantity,pricePerDroid){
    let totalPrice = quantity * pricePerDroid 
    return `You Ordered ${quantity} Droids Worth ${totalPrice} Credits!`
}

console.log(makeTransaction(5,3000));
console.log(makeTransaction(3,1000));
console.log(makeTransaction(10,500));


