// Example of a WORKING PizzUni Class

let assert = require('chai').assert;

class PizzUni {
    constructor() {
        this.registeredUsers = [];
        this.availableProducts = {
            pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
            drinks: ['Coca-Cola', 'Fanta', 'Water']
        };
        this.orders = [];
    }

    registerUser(email) {

        const user = this.doesTheUserExist(email);

        if (user) {
            throw new Error(`This email address (${email}) is already being used!`)
        }

        const currentUser = {
            email,
            orderHistory: []
        };

        this.registeredUsers.push(currentUser);

        return currentUser;
    }

    makeAnOrder(email, orderedPizza, orderedDrink) {

        const user = this.doesTheUserExist(email);

        if (!user) {
            throw new Error(`You must be registered to make orders!`);
        }

        const isThereAPizzaOrdered = this.availableProducts.pizzas.includes(orderedPizza);

        if (!isThereAPizzaOrdered) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        }

        let userOrder = {
            orderedPizza
        };

        const isThereADrinkOrdered = this.availableProducts.drinks.includes(orderedDrink);

        if (isThereADrinkOrdered) {
            userOrder.orderedDrink = orderedDrink;
        }

        user.orderHistory.push(userOrder);

        const currentOrder = {
            ...userOrder,
            email,
            status: 'pending'
        };
        this.orders.push(currentOrder);

        return this.orders.length - 1;
    }

    detailsAboutMyOrder(id) {
        if (this.orders[id]) {
            return `Status of your order: ${this.orders[id].status}`;
        }
    }

    doesTheUserExist(email) {
        return this.registeredUsers.filter((user) => user.email === email)[0];
    }

    completeOrder() {
        if (this.orders.length > 0) {
            const index = this.orders.findIndex((o) => o.status === "pending");
            this.orders[index].status = 'completed';

            return this.orders[index];
        }
    }
}
let pizza = new PizzUni();
console.log(pizza.registerUser('pesho'))
console.log(pizza.makeAnOrder('pesho', 'Barbeque Classic', "Fanta"));

describe('Testing', function () {
    it('should check constructor', function () {
        let pizzuni = new PizzUni();

        assert.deepEqual(pizzuni.registeredUsers, [], "Testing registered users is empty array")
    })
    it('should check constructor', function () {
        let pizzuni = new PizzUni();
        let expected = {
            pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
            drinks: ['Coca-Cola', 'Fanta', 'Water']
        };
        assert.deepEqual(pizzuni.availableProducts, expected, "Testing registered users is empty array")
    })
    it('should check constructor', function () {
        let pizzuni = new PizzUni();

        assert.deepEqual(pizzuni.registeredUsers, [], "Testing registered users is empty array")
    })
    it('should check email address', function () {
        let pizzuni = new PizzUni();
        pizzuni.registerUser("pesho")
        assert.throws(() => {
            pizzuni.registerUser("pesho")
        }, `This email address (pesho) is already being used!`)
    })
    it('should check for registered user', function () {
        let pizzuni = new PizzUni();
        
        let expected = {
            email: 'pesho',
            orderHistory: []
        };
        assert.deepEqual(pizzuni.registerUser('pesho'),expected)

    })
    it('should check for correct order', function () {
        let pizzuni = new PizzUni();
        
      assert.throws(() => {
        pizzuni.makeAnOrder("pesho",'Barbeque Classic', 'Fanta')
      }, "You must be registered to make orders!")

    })
    it('should check for registered user', function () {
        let pizzuni = new PizzUni();
        pizzuni.registerUser('pesho');
      assert.throws(() => {
        pizzuni.makeAnOrder("pesho",'Barbeque ', 'Fanta')
      }, "You must order at least 1 Pizza to finish the order.")

    })
   
    it('should check for registered user', function () {
        let pizzuni = new PizzUni();
        pizzuni.registerUser('pesho');
     assert.equal(pizzuni.makeAnOrder("pesho",'Barbeque Classic', 'Fanta'),0)

    })
    it('should check for registered user', function () {
        let pizzuni = new PizzUni();
        pizzuni.registerUser('pesho');
        let expected  =[
            {
               email: "pesho",
              orderHistory : []
              }
        ];
      assert.deepEqual(pizzuni.registeredUsers, expected)
    })
    it('should check for registered user', function () {
        let pizzuni = new PizzUni();
        pizzuni.registerUser('pesho');
        let expected = {
            userOrder:"Barbeque Classic",
            email:'pesho',
            status: 'pending'
        };
     assert.equal(pizzuni.makeAnOrder("pesho",'Barbeque Classic'),0)

    })
    it('change order status', function () {
        let pizzuni = new PizzUni();
        pizzuni.registerUser('pesho');
        pizzuni.makeAnOrder("pesho",'Barbeque Classic');
       
        let expected = {
           orderedPizza:  "Barbeque Classic",
            email:"pesho",
            status:'completed'
        }
     assert.deepEqual(pizzuni.completeOrder(),expected)

    })
    it('should check for registered user', function () {
        let pizzuni = new PizzUni();
        pizzuni.registerUser('pesho');
        pizzuni.makeAnOrder("pesho",'Barbeque Classic');

     assert.equal(pizza.detailsAboutMyOrder(0),"Status of your order: pending")

    })
    it('should check for registered user', function () {
        let pizzuni = new PizzUni();
        pizzuni.registerUser('pesho');
        pizzuni.registerUser('ivan')
        let expected ={
            email : "ivan",
            orderHistory: []
        };

     assert.deepEqual(pizzuni.doesTheUserExist('ivan'),expected)

    })
    
})

module.exports = PizzUni; // This piece of code exports the PizzUni Class, so it could be accessed in other files.