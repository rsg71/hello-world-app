const { sum } = require("./myModule");

describe('Sum function', () => {
    it('should return the sum of two numbers', () => {
        let a = 5;
        let b = 6;

        let result = sum(a, b);

        expect(result).toBe(11);
    })
})