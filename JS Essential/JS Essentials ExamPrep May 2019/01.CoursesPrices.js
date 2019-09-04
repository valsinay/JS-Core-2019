function solve(JSFundamentals,JSAdvanced,JSApps,educationForm){

    let totalPrice=0;

    let courses = {
        JSFundamentals:170,
        JSAdvanced : 180,
        JSApps:190
    };

    if(JSFundamentals && JSAdvanced){
        courses.JSAdvanced-=courses.JSAdvanced*0.1;
        if(JSAdvanced && JSFundamentals && JSApps){

            totalPrice = courses.JSAdvanced + courses.JSFundamentals + courses.JSApps;
            totalPrice-=totalPrice*0.06;
        }
        else{
            totalPrice += courses.JSAdvanced + courses.JSFundamentals;
           
        }
    }
    else{
        totalPrice += JSFundamentals ? courses.JSFundamentals : 0;
        totalPrice += JSAdvanced ? courses.JSAdvanced : 0;
        totalPrice += JSApps ? courses.JSApps : 0;
    

    }
    if(educationForm === "online"){
       
        totalPrice-=totalPrice*0.06;
    }
    console.log(Math.round(totalPrice));
}
