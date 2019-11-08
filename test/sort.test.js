const sort = require('./../index')
const expect = require('chai').expect;



describe('Sort Funcion', () => {
    // define test specs here
    const arr1 = [1,2,3,4,5,7] 
    const arr = [2, 3, 1, 5, 7, 4]
    const arr2 = (sort(arr))
    

    it('should arrange the array in ascending order correctly', () => {
       expect(arr2).to.eql(arr1)

    })
   
});