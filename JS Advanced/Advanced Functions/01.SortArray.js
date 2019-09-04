function sort(input,initialParam){

    if(initialParam==="asc"){

       return input.sort((a,b) => a-b)
    }
    else if(initialParam=== "desc"){
        return input.sort((a,b)=> b-a);
    }
}
