function train(initialCapacity,input){

    let capacity = initialCapacity;
    let wagons = new Array(input.length);

    let totalPassengers = input.reduce((a,b) => a+b);


    for(let i =0; i<wagons.length;i++){
        if(input[i] <= capacity){
           wagons[i] = input[i];
        }
        else{
            wagons[i] = capacity;
            input[i] -=capacity;
            input[i+1] +=input[i];
        }
       
       
    }

    let totalPassengersWagon = wagons.reduce((a,b) => a+b);
   
    if(totalPassengers === totalPassengersWagon){
        console.log(`[ ${wagons.join(', ')} ]`);
        console.log("All passengers aboard");
    }
    else{
        console.log(`[ ${wagons.join(', ')} ]`);
        console.log(`Could not fit ${totalPassengers-totalPassengersWagon} passengers`);
    }

}

train(10, [9, 39, 1, 0, 0]);
train(6, [5, 15, 2]);