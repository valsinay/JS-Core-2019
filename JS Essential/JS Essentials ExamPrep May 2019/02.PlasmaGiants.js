function plasma(input,number){

    let damagePerHit = Math.min(...input);
    let biggestNumber= Math.max(...input);

    let rounds=1;

    let firstPart = input.slice(0,input.length/2);
    let secondPart = input.slice(input.length/2);

    let firstGiant=0;
    let secondGiant =0;

while(firstPart.length>0 && secondPart.length >0){
 firstGiant += firstPart.splice(0,number).reduce((a,b)=> a*b);
 secondGiant+=secondPart.splice(0,number).reduce((a,b)=> a*b);
}

while(firstGiant > biggestNumber && secondGiant > biggestNumber && damagePerHit !==0){
 firstGiant-=damagePerHit;
 secondGiant-=damagePerHit;

 rounds++;

}
if(secondGiant === firstGiant){
    console.log(`Its a draw ${firstGiant} - ${secondGiant}`)
}
else if(firstGiant< secondGiant){
    console.log(`Second Giant defeated First Giant with result ${secondGiant} - ${firstGiant} in ${rounds} rounds`);
}
else if(secondGiant <firstGiant){
    console.log(`First Giant defeated Second Giant with result ${firstGiant} - ${secondGiant} in ${rounds} rounds`);       
}

}
plasma([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2);