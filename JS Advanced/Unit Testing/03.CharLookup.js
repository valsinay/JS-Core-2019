const expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('lookupChar', function() {
    it('should return undefined with a non string first parameter', function(){
        let expected = lookupChar(13, 2);
        expect(expected).to.equal(undefined, "First parameter is not correct!")
    })
    it('should return undefined with a non number second parameter', function(){
        let expected = lookupChar("Pesho", "tramvai");
        expect(expected).to.equal(undefined, "First parameter is not correct!")
    })
    it('should return undefined with a non number second parameter', function(){
        let expected = lookupChar("Pesho", 3.12);
        expect(expected).to.equal(undefined, "First parameter is not correct!")
    })
    it('should return incorrect index if index more  or negative than first parameter length ', function(){
        let expected = lookupChar("Pesho", 7);
        expect(expected).to.equal("Incorrect index", "First parameter is not correct!")
    })  
    it('should return incorrect index if index more  or negative than first parameter length ', function(){
        let expected = lookupChar("Pesho", -5);
        expect(expected).to.equal("Incorrect index", "First parameter is not correct!")
    })  
    it('should return character at correct index ', function(){
        let expected = lookupChar("Pesho", 3);
        expect(expected).to.equal('h', "First parameter is not correct!")
    })  
})