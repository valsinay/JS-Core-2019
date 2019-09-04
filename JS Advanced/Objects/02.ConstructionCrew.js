function work(params){

    if(params.dizziness ===true){
        params.levelOfHydrated += (0.1*params.weight)*params.experience;
        params.dizziness =false
    }
    params = {
        weight: params.weight,
        experience:+params.experience,
        levelOfHydrated:+params.levelOfHydrated,
        dizziness:params.dizziness
    };

     return params;
};

console.log(work({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  
  
  ));