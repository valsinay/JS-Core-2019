const expect = require('chai').expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('isOddOrEven', function() {
    it('should return undefined', function() {
        let expected = isOddOrEven(100);
        expect(expected).to.equal(undefined, "Function did not return the correct result!")
    })
    it('should return even if number is even', function() {
        let expected = isOddOrEven("kola");
        expect(expected).to.equal( "even" , "Function did not return the correct result!")
    })
    it('should return odd if number is odd', function() {
        let expected = isOddOrEven("kolad");
        expect(expected).to.equal( "odd" , "Function did not return the correct result!")
    })
})