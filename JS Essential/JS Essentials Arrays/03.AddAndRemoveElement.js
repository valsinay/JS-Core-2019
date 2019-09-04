function main(input){

    let initialNumber = 0;
    let array = [];

    for(let i=0; i<=input.length-1; i++){
        initialNumber+=1;
        if(input[i] === 'add'){
            array.push(initialNumber);
        }
        else{
            array.pop();
        }
    }

    if(array.length ===0){
        console.log("Empty");
    }
    for(let i=0; i<=array.length-1; i++){
        console.log(array[i]);
    }
}