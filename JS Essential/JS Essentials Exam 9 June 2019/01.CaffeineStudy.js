function caffeine(input){


    let drinks = {
        'coffee' : 150,
         'cola' : 250,
         'tea':350,
         'energyDrink':500
    };
    let totalCaffeine = 0;
    let dayConsumption = 0;

    for(let i=1; i<= input;i++){
       if(i % 9 ==0){
           totalCaffeine +=80 + 300;
       }
       
        if(i % 5 ===0){
            totalCaffeine += +450;
            
        }
       totalCaffeine+=180 + 40 + 210;   

    }

    console.log(`${totalCaffeine} milligrams of caffeine were consumed`);
}
caffeine(8);