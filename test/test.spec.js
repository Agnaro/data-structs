const { flatten, someRecursive } = require('../src/algorithms');
const { expect } = require('chai') 

it('flatten', () => {
    expect(flatten([1, 2, 3, [4, 5] ])).to.eql([1,2,3,4,5]) // [1, 2, 3, 4, 5]
    expect(flatten([1, [2, [3, 4], [[5]]]])).to.eql([1,2,3,4,5]) // [1, 2, 3, 4, 5]
    expect(flatten([[1],[2],[3]])).eql([1,2,3]) // [1,2,3]
    expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).eql([1,2,3]) // [1,2,3
})

it('some', () => {
    var isOdd = val => val % 2 !== 0;

    expect(someRecursive([1,2,3,4], isOdd)).to.eql(true) // true
    expect(someRecursive([4,6,8,9], isOdd)).to.eql(true) // true
    expect(someRecursive([4,6,8], isOdd)).to.eql(false) // false
    expect(someRecursive([4,6,8], val => val > 10)).to.eql(false) // false
})