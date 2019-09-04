function coffee(input){

    let caffeineCoffee = "caffeine"
    let decafCoffee =0.90;
    let tea =0.80;

    let total = 0;
    let change=0;

    for(var i = 0; i<input.length; i++) {
       let array = input[i].split(", ");

        let coins =array[0];
        let product = array[1];
        let milk;
        let sugar;
        let type;
        let milkPrice =0;
        let price = 0;
        if(product==="coffee"){
             type = array[2];
            if(type === "caffeine"){
                price+=0.8;
                if(array.length ==5){
                    let milkPrice = Math.round(price)*0.1;
                    price += milkPrice
                     sugar = array[4];
                }
                else if(array.length == 4){
                    sugar=array[3];
    
                }
            }
            else if(type === "decaf"){
                price+=0.9;
                if(array.length ==5){
                    let milkPrice = Math.round(price)*0.1;
                    price += milkPrice;
                     sugar = array[4];
                     
                }
                else if(array.length == 4){
                    sugar=array[3];

                }
            }
           
        }
        else if(product === "tea"){
            price+=tea;
            if(array.length == 4){
                let milkPrice = Math.round(price)*0.1
                price+=milkPrice;
                sugar = array[3];
            }
            else if(array.length=3){
                sugar = array[2];
            }
        }
        if(sugar>0 && sugar <=5){
            price += 0.10;
        
        }
        if(coins >= price){
        change = coins-price;
        total+=price;

            console.log(`You ordered ${product}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`)
        }
        else{
          change = price-coins;
           console.log(`Not enough money for ${product}. Need ${change.toFixed(2)}$ more.`)
        }
    }
    console.log(`Income Report: ${total.toFixed(2)}$`);
}

