describe("Calculator", function() {
    var calculator;

    beforeEach(function() {
        calculator = new Calculator();
    });

    it("validate simple 1", function() {
        calculator.addToInput('7');
        calculator.addToInput('5');
        calculator.addToInput('+');
        calculator.addToInput('5');
        calculator.addToInput('+');
        calculator.addToInput('/');
        expect(calculator.validate()).toEqual(false);
    });

    it("validate simple 2", function() {
        calculator.addToInput('(');
        calculator.addToInput('5');
        calculator.addToInput('+');
        calculator.addToInput('6');
        calculator.addToInput(')');
        expect(calculator.validate()).toEqual(true);
    });

    it("validate parenthesis", function() {
        calculator.addToInput('(');
        calculator.addToInput('7');
        calculator.addToInput('+');
        expect(calculator.validate()).toEqual(false);
        calculator.addToInput('5');
        calculator.addToInput(')');
        expect(calculator.validate()).toEqual(true);
    });

    it("validate parenthesis complicated", function() {
        calculator.addToInput('(');
        calculator.addToInput('7');
        calculator.addToInput('+');
        calculator.addToInput('(');
        calculator.addToInput('4');
        calculator.addToInput('*');
        calculator.addToInput('3');
        calculator.addToInput(')');
        expect(calculator.validate()).toEqual(false);
        calculator.addToInput(')');
        expect(calculator.validate()).toEqual(true);
    });

    it("take characters", function() {
        calculator.addToInput('2');
        expect(calculator.getRawInput()).toEqual('2');
        calculator.addToInput('7');
        calculator.addToInput('3');
        expect(calculator.getRawInput()).toEqual('273');
        calculator.addToInput('+');
        calculator.addToInput('3');
        expect(calculator.getRawInput()).toEqual('273+3');
    
    });

    it("evaluate simple addition", function() {
        calculator.addToInput('2');
        calculator.addToInput('+');
        calculator.addToInput('3');
        calculator.addToInput('=');
        expect(calculator.getResult()).toEqual(5);
        calculator.addToInput('+');
        calculator.addToInput('1');
        calculator.addToInput('0');
        calculator.addToInput('=');
        expect(calculator.getResult()).toEqual(15);
    });

    it("evaluate simple subtraction", function() {
        calculator.addToInput('5');
        calculator.addToInput('-');
        calculator.addToInput('3');
        calculator.addToInput('=');
        expect(calculator.getResult()).toEqual(2);
        calculator.addToInput('-');
        calculator.addToInput('1');
        calculator.addToInput('0');
        calculator.addToInput('=');
        expect(calculator.getResult()).toEqual(-8);
    });

    it("evaluate simple division", function() {
        calculator.addToInput('20');
        calculator.addToInput('/');
        calculator.addToInput('5');
        calculator.addToInput('=');
        expect(calculator.getResult()).toEqual(4);
        calculator.addToInput('/');
        calculator.addToInput('4');
        calculator.addToInput('0');
        calculator.addToInput('=');
        expect(calculator.getResult()).toEqual(0.1);
    });

    it("evaluate simple multiplication", function() {
        calculator.addToInput('2');
        calculator.addToInput('0');
        calculator.addToInput('*');
        calculator.addToInput('5');
        calculator.addToInput('=');
        expect(calculator.getResult()).toEqual(100);
        calculator.addToInput('*');
        calculator.addToInput('1');
        calculator.addToInput('0');
        calculator.addToInput('=');
        expect(calculator.getResult()).toEqual(1000);
    });

    it("evaluate single", function() {
        calculator.addToInput('2');
        calculator.addToInput('=');
        expect(calculator.getResult()).toEqual(2);
    });

    it("evaluate simple bracket", function() {
        calculator.addToInput('(');
        calculator.addToInput('2');
        calculator.addToInput('*');
        calculator.addToInput('5');
        calculator.addToInput(')');
        calculator.addToInput('=');
        expect(calculator.getResult()).toEqual(10);
    });

    it("evaluate complex bracket", function() {
        calculator.addToInput('(');
        calculator.addToInput('2');
        calculator.addToInput('*');
        calculator.addToInput('5');
        calculator.addToInput(')');
        calculator.addToInput('+');
        calculator.addToInput('(');
        calculator.addToInput('(');
        calculator.addToInput('14');
        calculator.addToInput('/');
        calculator.addToInput('7');
        calculator.addToInput(')');
        calculator.addToInput('*');
        calculator.addToInput('5');
        calculator.addToInput(')');
        calculator.addToInput('=');
        expect(calculator.getResult()).toEqual(20);
    });

    it("evaluate backspace", function() {
        calculator.addToInput('2');
        calculator.addToInput('*');
        calculator.addToInput('5');
        calculator.addToInput('8');
        calculator.addToInput('bkspace');
        expect(calculator.getRawInput()).toEqual('2*5');
    });

    it("evaluate backspace", function() {
        calculator.addToInput('2');
        calculator.addToInput('*');
        calculator.addToInput('5');
        calculator.addToInput('8');
        calculator.addToInput('C');
        expect(calculator.getRawInput()).toEqual('');
    });


});