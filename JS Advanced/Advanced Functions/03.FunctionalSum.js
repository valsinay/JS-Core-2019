function solve(number){

    let sum = number;

     function add(anotherNumber){
        
         sum+=anotherNumber;
        return add;
    }
       add.toString = function(){
       return sum;
    }

    return add;
}
solve(1)(3)(-5);