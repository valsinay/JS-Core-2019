class Kitchen{
    constructor(budget){
     this.budget=+budget;
     this.menu ={};
     this.productsInStock = {};
     this.actionsHistory=[];
    }

    

    loadProducts(products){
 
        for(let product of products){
            let [fruit,quantity,price] = product.split(" ");
            quantity = +quantity;
            price= +price;
            

            if(this.budget >=price){

                if(!this.productsInStock[fruit]){
                 this.productsInStock[fruit] = 0;
                }
                this.productsInStock[fruit]+=quantity
                this.budget-=price;
              this.actionsHistory.push(`Successfully loaded ${quantity} ${fruit}`)
            }
            else{
                this.actionsHistory.push(`There was not enough money to load ${quantity} ${fruit}`)
            }

        }
        return `${this.actionsHistory.join("\n")}`
    }

    addToMenu(meal,neededProducts,price){

       
        for(let product of neededProducts){
            let [fruit,quantity] = product.split(" ");
            quantity=+quantity;

            if(!this.menu[meal]){
              this.menu[meal] ={
                  products: neededProducts,
                  price : +price
              }
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
            }
            return `The ${meal} is already in our menu, try something different.`;
        }

    }

    showTheMenu(){

        if(Object.keys(this.menu).length===0){
             return "Our menu is not ready yet, please come later...";
        }
        
        let output = "";

        for(let meal of Object.keys(this.menu)){
         output+= `${meal} - $ ${this.menu[meal].price}\n`
        }

        return output
    }

    makeTheOrder(mealName){

        if(!Object.keys(this.menu).includes(mealName)){
             return `There is not ${mealName} yet in our menu, do you want to order something else?`
        }   
        const meal = this.menu[mealName];

        for(let product of meal.products){
            const info = product.split(' ');
            const productName = info[0];
            const productQuantity = +info[1];

            if(!this.productsInStock[mealName] 
                || this.productsInStock[mealName] < productQuantity){
                    return `For the time being, we cannot complete your order (${mealName}), we are very sorry...`;
            }
            else if(this.productsInStock[mealName] 
                && this.productsInStock[mealName] >= productQuantity){

                    this.productsInStock[productName] -= productQuantity;
                }
        }
        this.budget +=meal.price;
        return `Your order (${mealName}) will be completed in the next 30 minutes and will cost you ${meal.price}.`;
     }
}
