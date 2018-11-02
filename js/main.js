(function () {
    "use strict";
    
var screen = document.getElementById('screen');
var error_screen = document.getElementById('error_screen');
var calculator = new Calculator();
var change ={
    'plus':'+',
    'minus':'-',
    'divide':'/',
    'times':'*',
    'undo':'',
    'backspace':'bkspace',
    'equals':'=',
    'square':'',
    'C':'C',
};

eventListeners();

function eventListeners() {
     // Btn Click
     document.querySelector('#btns-container').addEventListener('click', processBtnClick);
}

function processBtnClick(event) {

    try{
        //console.log(event.target.tagName);
        if(event.target.tagName != null && (event.target.tagName.toUpperCase() === 'BUTTON')) {
            if(event.target.textContent.trim().length > 0) {
                calculator.addToInput(event.target.textContent.trim());
            } else {
                calculator.addToInput(change[event.target.firstChild.classList[1].split('-')[1]]);
            }
        }
        
        screen.textContent = calculator.getDisplay();

    } catch(e) {
        document.querySelector('#error_screen').textContent = e.message;
    }
    

}






 }());