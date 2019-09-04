function main(input){

    let step = +input.pop();
    for(let i=0; i<=input.length-1; i+=step){
     console.log(input[i]);
   }
}

