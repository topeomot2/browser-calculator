function Calculator() {
    this.rawInput = '';
    this.display = '';
    this.firstCharacterRegex = /[0-9\(\.]/;
    this.afterOperatorCharacterRegex = /[0-9\+\-\.]/;
    this.operators = ['+','-','*','/'];
    this.follow ={
        '(':/[0-9\+\-\.\(]/,
        ')':/[\+\-\*\/\)]/,
        '0':/[0-9\+\-\*\.\/\)]/,
        '1':/[0-9\+\-\*\.\/\)]/,
        '2':/[0-9\+\-\*\.\/\)]/,
        '3':/[0-9\+\-\*\.\/\)]/,
        '4':/[0-9\+\-\*\.\/\)]/,
        '5':/[0-9\+\-\*\.\/\)]/,
        '6':/[0-9\+\-\*\.\/\)]/,
        '7':/[0-9\+\-\*\.\/\)]/,
        '8':/[0-9\+\-\*\.\/\)]/,
        '9':/[0-9\+\-\*\.\/\)]/,
        '+':/[0-9\+\-\.\()]/,
        '-':/[0-9\+\-\.\(]/,
        '/':/[0-9\+\-\.\(]/,
        '*':/[0-9\+\-\.\(]/,
        '.':/[0-9]/,
    };
}

Calculator.prototype.addToInput = function (chr) {
    chr = chr || '';
    if(this.rawInput.length === 0){
        //verify first character
        if(chr.match(this.firstCharacterRegex)) {

        } else {
            chr = '';
        }
    }

    if(chr === 'bkspace') {
        var v = this.rawInput.split('');
        v.pop();
        this.rawInput = v.join('');
        this.setDisplay();
    } else if(chr === 'C') {
        this.rawInput = '';
        this.setDisplay();
    } else if(chr !== '=') {
        this.rawInput += chr;
        this.setDisplay();
    } else {
        this.getResult();
    }
    
};

Calculator.prototype.getRawInput = function () {
    return this.rawInput;
};

Calculator.prototype.getResult = function () {
    if(this.validate()) {

        var result =  math.eval(this.rawInput);
        this.display = result;
        return result;

    } else {
        throw new Error('Malformed Expression');
    }
       
};



Calculator.prototype.validate = function () {
    
    var rawArr = this.rawInput.split('');
    var length = rawArr.length;
    var stark = [];

    for (var index = 0; index < length; index++) {

        if(rawArr[index] === '(') {
            stark.push(rawArr[index]);
        } else if(rawArr[index] === ')') {
            if(stark.pop() === undefined) {
                return false;
            }
        }

        if(index > 0){
            var regex = this.follow[rawArr[index - 1]];
            if(rawArr[index].match(regex) === null) {
                return false;
            }
        }
        
    }

    if(stark.length > 0) {
        return false;
    }


    return true;
    
};

Calculator.prototype.getDisplay = function () {
    return this.display;
};

Calculator.prototype.setDisplay = function(){
    var display = this.rawInput.split('').join(' ');
    this.display = display.replace('*','x');
};