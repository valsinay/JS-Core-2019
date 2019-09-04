function info(){

    let typeCounts ={};

    for(let arg of arguments){
        let type = typeof arg;
        console.log(`${type}: ${arg}`);

       if(!typeCounts[type]){
        typeCounts[type] = 1;
       }
       else{
           typeCounts[type]++;
       }
    }

   Object.keys(typeCounts).sort((a,b) => typeCounts[b] - typeCounts[a])
   .forEach(x=>console.log(`${x} = ${typeCounts[x]}`));

}

info(42, 'cat', 15, 'kitten', 'tomcat');
