function main(input){

    let array = [];

    let currentNumber = input[0];

    for(let i=0; i<= input.length;i++){
      let nextElement = input[i];
      if(nextElement>=currentNumber){
        array.push(nextElement);
        currentNumber=nextElement;
      }
    }
    console.log(array.join('\n'));
}
