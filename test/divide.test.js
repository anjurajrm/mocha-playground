const divide =require('./../index')
const expect = require('chai').expect;


describe('Divide Funcion', () => {
    // define test specs here
    it('should divide positive integers correctly',()=>{
        const a=8
        const b=4
        const expectedAnswer=2
        const actualAnwser =divide(a,b)
        expect(actualAnwser).to.equal(expectedAnswer)

    })
    it('should throw an error when divide by zero', () => {
        // spec code here
        const a = 8
        const b = 0
        const fn = () => { divide(a, b) };

        expect(fn).to.throw();
    });
});