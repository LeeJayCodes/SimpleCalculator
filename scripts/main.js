        // Objective build functional simple calculator without eval() method.

        let show = document.querySelector('.display');
        let firstNum = true;
        let afterOperation = false;
        let storage = []
        let value
        let valueResult
        

        // clear everything
        function clearDisplay(){
            show.innerHTML = '0';
            storage = [];
            firstNum = true
            afterOperation = false;
            firstNumEqual = false;
            value = ''
            valueResult = ''
            return storage
        }

            // disaply the numbers
        function display(number){
            if (show.innerText == '0'){
                show.innerText = number;
            } else {
                if(afterOperation == true){
                    show.innerText = number; afterOperation = false;
                }
                else {
                    show.innerText += number;
                }
            }  
        }
      
            // performes computation (function evoked when (=) button is clicked)
        function iMath(a,b,c){
            a = parseFloat(a);
            b = parseFloat(b);
            switch(c){
                case '-':
                    return a-b;
                case '+':
                    return a+b;
                case '/':
                    return a/b;
                case '*':
                    return a*b;
            }

        }

            // takes operator (when operator is clicked)
        function operator(operator){
            if (firstNum == true){
                value = show.innerHTML;
                firstNum = false;
                storage[0] = value;
                storage[1] = operator;
                afterOperation = true;
                } 
            else {
                storage[2] = show.innerHTML;
                valueResult = iMath(storage[0],storage[2],storage[1]);
                afterOperation = true;
                show.innerHTML = valueResult;
                storage[0] = valueResult;
                storage[1] = operator;

                }
            }

            // function for equal button
        function calculate(){
        if (storage[0] == undefined){
            storage[0] = show.innerHTML;
        }
        else {
            storage[2] = show.innerHTML;
            valueResult = iMath(storage[0],storage[2],storage[1]);
            storage[1] = ''
            storage[2] = ''
            storage[0] = valueResult;
            show.innerHTML = valueResult;
            firstNum = true;
            afterOperation = true;
        }
    }