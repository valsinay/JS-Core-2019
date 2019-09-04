function filter(input, commands){
 
    let parameters = input[0];
    let tokens = commands.split(" ");
    let command = tokens[0];
    let parameter = tokens[1];

    let matrix =[];
    let elements = [];

    if(command ==="sort"){

        let parameterIndex = parameters.indexOf(parameter);
        console.log(parameters.join(" | "));

       
            for(let row=1; row<input.length;row++){
               matrix = input[row][parameterIndex];
               elements.push(matrix);
               elements.sort((a,b)=> a.localeCompare(b));
               
            }
            
        
    }
   
}

filter([['name', 'age', 'grade'],
['Peter', '25', '5.00'],
['George', '34', '6.00'],
['Marry', '28', '5.49']],
'sort name'
);