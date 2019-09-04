    function atm(input){

        let array =[];
        let initialArray =[];
        let balance=0;
        let totalBalance=0;
        let banknotes=[];

        for(var i = 0; i<input.length; i++) {
        array = input[i];
        
        if(array.length > 2){
            balance =array.reduce((a,b) => a+b);
            initialArray.push(array);
            totalBalance+=balance
            console.log(`Service Report: ${balance}$ inserted. Current balance: ${totalBalance}$.`)
            }

        else if(array.length == 2){
            let currentBalance = array[0];
            let withdrawAmount = array[1];
            
            if(currentBalance<withdrawAmount){
                console.log(`Not enough money in your account. Account balance: ${currentBalance}$.`)
            }
            else if(totalBalance <= withdrawAmount){
            console.log(`ATM machine is out of order!`);
            break;
            }
            else{

                for(let i = 0; i<initialArray.length; i++) {
                let amount = withdrawAmount;
                    banknotes = initialArray[i];
                    banknotes = banknotes.sort((a,b) => b-a);
                    for(let i=0;i<banknotes.length;i++){
                        if(banknotes[i]<=amount){
                            amount-=banknotes[i];
                            banknotes[i]=0;
                        }
                    }

                }
            totalBalance-=withdrawAmount;
            console.log(`You get ${withdrawAmount}$. Account balance: ${currentBalance-withdrawAmount}$. Thank you!`)
            }
        }
        else if(array.length== 1){
            let banknote = array[0];
            let count = 0;
            if (banknotes.length !== 0)
            for (let j = 0; j < banknotes.length; j++) {
                if (banknotes[j] === banknote) {
                    count++;
                }
            }
        console.log(`Service Report: Banknotes from ${banknote}$: ${count}.`)
        }
        } 
    }

atm([[20, 5, 100, 20, 1],
    [457, 25],
    [1],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20, 85],
    [5000, 4500],
   ]
   );