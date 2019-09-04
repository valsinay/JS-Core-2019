const expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


   describe('mathEnforcer', function() {
it("Add-Five with positive number", function() {
    expect(mathEnforcer.addFive(5)).to.equal(10,"Result  is not correct");
})

it("Add-Five with string parameter", function() {
  let number = mathEnforcer.addFive("10");
  expect(number).to.equal(undefined, "Result should return undefined if parameter is not a number");
})

it("Add-Five with negative number", function() {
    let number = mathEnforcer.addFive(-10);
  expect(number).to.equal(-5, "Result  is not correct");
  })

it("Add-Five with negative number", function() {
    let number = mathEnforcer.addFive(5.5);
  expect(number).to.equal(10.5, "Result  is not correct");
  })

 it("should return number", function() {
    let number = mathEnforcer.addFive(-10);
  expect(number).to.equal(-5, "Result  is not correct");
  })

it("Add-Five with string parameter", function() {
    let number = mathEnforcer.subtractTen(20.5);
    expect(number).to.equal(10.5, "Result should return undefined if parameter is not a number");
  })
  it("Add-Five with string parameter", function() {
    let number = mathEnforcer.subtractTen("10");
    expect(number).to.equal(undefined, "Result should return undefined if parameter is not a number");
  })

it("Add-Five with negative number", function() {
      let number = mathEnforcer.subtractTen(-15);
    expect(number).to.equal(-25, "Result  is not correct");
    })
  
it("should return number", function() {
      let number = mathEnforcer.subtractTen(20);
    expect(number).to.equal(10, "Result  is not correct");
    })
it("Add-Five with string parameter", function() {
        let number = mathEnforcer.sum("10", 5);
        expect(number).to.equal(undefined, "Result should return undefined if parameter is not a number");
      })
 it("Add-Five with negative number", function() {
          let number = mathEnforcer.sum(5, "6");
        expect(number).to.equal(undefined, "Result  is not correct");
        })
      
it("should return number", function() {
          let number = mathEnforcer.sum(5,5);
        expect(number).to.equal(10, "Result  is not correct");
        }) 
it("should return number", function() {
            let number = mathEnforcer.sum(-5,-5);
          expect(number).to.equal(-10, "Result  is not correct");
        })
it("should return number", function() {
            let number = mathEnforcer.sum(-5, {name:'pesho'});
          expect(number).to.equal(undefined, "Result  is not correct");
          })
it("should return number", function() {
            let number = mathEnforcer.sum({name:'pesho'}, 8);
          expect(number).to.equal(undefined, "Result  is not correct");
    })

it("should return number", function() {
        let number = mathEnforcer.sum(5.5,4.5);
      expect(number).to.equal(10, "Result  is not correct");
      })
  })
