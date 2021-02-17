const Calculator = require('../src/Calculator');
const Calculation = require("../src/Models/Calculation");

test('Calculator adding two numbers', () => {
    let result = Calculator.Sum(1,2);
    expect(result).toBe(3);
});
test('Calculator difference between two numbers', () => {
    let result = Calculator.Difference(1,2);   
    expect(result).toBe(-1);
});
test('Calculator product of two numbers', () => {
    let result = Calculator.Product(1,2);
    expect(result).toBe(2);
});
test('Calculator quotient of two numbers', () => {
    let result = Calculator.Quotient(1,2);
    expect(result).toBe(.5);
});
test('Calculator power of two numbers', () => {
    let result = Calculator.Power(2,3);
    expect(result).toBe(8);
});
test('Calculator root of two numbers', () => {
    let result = Calculator.Root(4,2);
    expect(result).toBe(2);
});
test('Calculator square of a number', () => {
    let result = Calculator.Square(8);
    expect(result).toBe(64);
});
test('Calculator square root of a number', () => {
    let result = Calculator.SquareRoot(16);
    expect(result).toBe(4);
});
test('Calculator adding to calculations', () => {
    Calculator.clearList();
    let result = Calculator.Quotient(1,2);
    let result2 = Calculator.Power(1,2);
    let calculations = Calculator.Calculations
    expect(Calculator.Calculations.length).toBe(2);
    calculations.forEach(function (calc) {
       console.log(calc.GetResults())
       expect(calc).toBeInstanceOf(Calculation)
    });
});

