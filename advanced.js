export class AdvancedCalculatior {
    constructor() {
        this.factorialResult = 0;
    }
    factorial(number) {
        var value = 1;
        for (var i = 2; i <= number; i += 1) {
            value *= i;
        }
        return value;

    }
    fibonacciNumbers(number) {
        var current = 1;
        var previus = 1;
        for (var i = 1; i < +number; i += 1) {
            var temp = previus;
            previus = current;
            current = current + temp;
        }
        return current;
    }

}