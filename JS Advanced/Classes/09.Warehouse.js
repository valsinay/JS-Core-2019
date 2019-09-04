var assert = require('Chai').assert;



class Warehouse {

    get capacity() {
        return this._capacity;
    }

    set capacity(givenSpace) {

        if (typeof givenSpace === 'number' && givenSpace > 0) {
            return this._capacity = givenSpace;
        } else {
            throw `Invalid given warehouse space`;
        }
    }

    constructor(capacity) {
        this.capacity = capacity;
        this.availableProducts = {'Food': {}, 'Drink': {}};
    }

    addProduct(type, product, quantity) {

        let addedQuantity = ((this.capacity - this.occupiedCapacity()) - quantity);
        let output;

        if (addedQuantity >= 0) {

            if (this.availableProducts[type].hasOwnProperty(product) === false) {
                this.availableProducts[type][product] = 0;
            }

            this.availableProducts[type][product] += quantity;
            output = this.availableProducts[type];

        } else {
            throw `There is not enough space or the warehouse is already full`;
        }

        return output;
    }

    orderProducts(type) {

        let output;
        let sortedKeys = Object.keys(this.availableProducts[type])
            .sort((a, b) => this.availableProducts[type][b] - this.availableProducts[type][a]);

        let newObj = {};

        for (let product of sortedKeys) {

            if (newObj.hasOwnProperty(product) === false) {
                newObj[product] = 0;
            }

            newObj[product] += this.availableProducts[type][product];
        }

        this.availableProducts[type] = newObj;
        output = this.availableProducts[type];

        return output;
    }

    occupiedCapacity() {

        let output = 0;
        let productsCount = Object.keys(this.availableProducts['Food']).length +
            Object.keys(this.availableProducts['Drink']).length;

        if (productsCount > 0) {

            let quantityInStock = 0;

            for (let type of Object.keys(this.availableProducts)) {

                for (let product of Object.keys(this.availableProducts[type])) {

                    quantityInStock += this.availableProducts[type][product];
                }
            }

            output = quantityInStock;
        }

        return output;
    }

    revision() {

        let output = "";

        if (this.occupiedCapacity() > 0) {

            for (let type of Object.keys(this.availableProducts)) {
                output += `Product type - [${type}]\n`;
                for (let product of Object.keys(this.availableProducts[type])) {
                    output += `- ${product} ${this.availableProducts[type][product]}\n`;
                }
            }
        } else {
            output = 'The warehouse is empty';
        }

        return output.trim();
    }

    scrapeAProduct(product, quantity) {

        let type = Object.keys(this.availableProducts).find(t =>          Object.keys(this.availableProducts[t]).includes(product));
        let output;

        if (type !== undefined) {

            if (quantity <= this.availableProducts[type][product]) {
                this.availableProducts[type][product] -= quantity;
            } else {
                this.availableProducts[type][product] = 0;
            }

            output = this.availableProducts[type];

        } else {
            throw `${product} do not exists`;
        }

        return output;
    }
}


describe('Basic Mocha String Test', function () {

    let warehouse;

    beforeEach(function(){
         warehouse = new Warehouse(10);
    })

    it("constructor should throw string when the value is invalid", function () {
        assert.throws(() => warehouse = new Warehouse(""), `Invalid given warehouse space`);
        assert.throws(() => warehouse = new Warehouse(0), `Invalid given warehouse space`);
        assert.throws(() => warehouse = new Warehouse(-10), `Invalid given warehouse space`);
    });   
    
    it('addProduct should throw string when there is not enough place for the product', function (){
        assert.throws(()=> warehouse.addProduct("Drink","Pepsi",15),`There is not enough space or the warehouse is already full`)
    });

    
    it('orderProducts should sort all products of a given type in descending order by the quantity', function () {

        warehouse.addProduct("Drink", "Fanta",2);
        warehouse.addProduct("Drink", "Cola", 3);
        warehouse.addProduct("Drink", "Pepsi", 1);
        warehouse.orderProducts('Drink')

        let expected = '{"Cola":3,"Fanta":2,"Pepsi":1}';
        let actual = JSON.stringify(warehouse.availableProducts.Drink);
        assert.equal(actual,expected)
    })

    it('orderProducts should sort all products of a given type in descending order by the quantity', function () {

        warehouse.addProduct("Drink", "Fanta",2);
        warehouse.addProduct("Drink", "Cola", 3);
        warehouse.addProduct("Drink", "Pepsi", 1);
        warehouse.orderProducts('Drink')

      let expected = 6;
      assert.equal(warehouse.occupiedCapacity(),expected)
    })

    it('revision should return the correct string when there are no products in the warehouse', function () {

        
        assert.equal(warehouse.revision(),'The warehouse is empty')
    })

    it('scrapeAProduct should return the correct string when the searched product does not exist', function () {
        assert.throws(() => warehouse.scrapeAProduct(undefined,5), 'undefined do not exists');
    })

    it('revision should return the correct string when there are no products in the warehouse', function () {
        warehouse.addProduct('Drink', 'Cola', 2);
        warehouse.addProduct('Food', 'Tomatoes', 5);

        const expected = 'Product type - [Food]\n- Tomatoes 5\nProduct type - [Drink]\n- Cola 2';
        const actual = warehouse.revision();

        assert.equal(actual, expected);
    });
    
    it('scrapeAProduct should reduce products\' quantity when the product exists', function () {
        warehouse.addProduct('Drink', 'Sprite', 7);

        const expected = '{"Sprite":2}';
        const actual = JSON.stringify(warehouse.scrapeAProduct('Sprite', 5));

        assert.equal(actual, expected);
    });

    it('scrapeAProduct should reset products\' quantity when the product\'s quantity is less than the searched one', function () {
        warehouse.addProduct('Drink', 'Sprite', 3);

        const expected = '{"Sprite":0}';
        const actual = JSON.stringify(warehouse.scrapeAProduct('Sprite', 5));

        assert.equal(actual, expected);
    });

});