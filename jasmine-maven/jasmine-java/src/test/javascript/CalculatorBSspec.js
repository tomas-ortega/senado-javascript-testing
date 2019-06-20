describe("Test: CalculatorBS", function () {
    describe("Method: sum", function() {
        var calculatorBS = null;

        beforeAll(function(pako) {
            console.log("BEFORE ALL TEST!");
            calculatorBS = new CalculatorBS();
            pako();
        });

        beforeEach(function(done) {
            console.log("BEFORE EACH TEST!");
            done();
        });

        it("Test sum two integer numbers", function() {
            var number1 = 5;
            var number2 = 3;
            var expectedValue = 8;
            var sumResult = null;

            sumResult = calculatorBS.sum(number1, number2);

            expect(expectedValue).toBe(sumResult);
        });

        afterEach(function(done) {
            console.log("AFTER EACH TEST!");
            done();
        });

        afterAll(function(done) {
            console.log("AFTER ALL TEST!");
            done();
        });
    });
});