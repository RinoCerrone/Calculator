
let firstValue
let secondValue
let operator

let displayValue = '';

document.getElementById('input').innerHTML = displayValue;



function addValue(inputValue){

    

    if(inputValue === '.'){
        if(displayValue.indexOf('.') == -1){
            displayValue += inputValue;
            document.getElementById('input').innerHTML = displayValue;
        }
    }

    else{
        displayValue += inputValue
        document.getElementById('input').innerHTML = displayValue;
    }
}


function addOperator(inputOperator){
    
    if(inputOperator === '+/-' && displayValue !== ''){
        displayValue = parseFloat(displayValue) * -1;
        document.getElementById('input').innerHTML = displayValue;
        return; 
    } else if(inputOperator === '%' && displayValue !== ''){
        displayValue = parseFloat(displayValue) / 100;
        document.getElementById('input').innerHTML = displayValue;
        return; 
    }

    
    if(firstValue !== undefined && displayValue !== '') {
        operate();  
    }

    operator = inputOperator;
    if(displayValue !== '') {  
        firstValue = parseFloat(displayValue);
        displayValue = '';
    }
    
}



function allClear(){
    displayValue = ''
    firstValue = ''
    secondValue = ''
    operator = ''
    document.getElementById('input').innerHTML = displayValue;
}



function operate(){
    
        secondValue = parseFloat(displayValue);

        switch(operator) {
            case '+':
                displayValue = firstValue + secondValue;
                break;
            case '-':
                displayValue = firstValue - secondValue;
                break;
            case '*':
                displayValue = firstValue * secondValue;
                break;
            case '/':
                if( secondValue == 0 ){
                    return "ERROR";
                }
                displayValue = firstValue / secondValue;
                break;
        
        } 
        document.getElementById('input').innerHTML = displayValue;
        firstValue = parseFloat(displayValue);
        secondValue = undefined;
        operator = '';
    
}
