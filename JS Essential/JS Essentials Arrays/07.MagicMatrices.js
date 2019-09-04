function magic(matrix){

     let sum=0;

    for(let i=0; i< matrix[0].length;i++){
         sum += matrix[0][i]; 

         }
        

    for(let row=0; row< matrix.length;row++){
         let currentSum =0;

         for(let col=0; col< matrix[row].length;col++){
        
            currentSum+=matrix[row][col];
        }

        if(currentSum!==sum){
            return false;
        }
    }

    for(let row=0; row< matrix.length;row++){
        let currentSum =0;

        for(let col=0; col< matrix.length;col++){
       
           currentSum+=matrix[row][col];
        }
       if(currentSum!==sum){
           return false;
       }
   }
return true;
}
   magic([[11, 32, 45],
          [21, 0, 1],
          [21, 1, 1]]
   );

