// Selecting the necessary elements from the DOM
const inputSwitch = document.querySelector('.toggle-switch');
const typeOutput = document.querySelector('.type-output');
const buttons = document.querySelectorAll('button');
const delButton = document.getElementById('del');
const resetButton = document.getElementById('reset');
const equalButtton = document.getElementById('equal');
const pageBody = document.querySelector('body');
















// Initialize variables to hold input values and calculation results
let inputOne;
let inputTwo;
let generator;
let sum;
let maxlength = 16;














// This function sets up the calculator functionality
const calculator = () => {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', () =>{
        let buttonsValue = buttons[i].value;
        if(buttonsValue >= 0 && buttonsValue <= 9 || buttonsValue === '.'){
             // If the button value is a number or a decimal point, append it to the typeOutput element
            typeOutput.textContent += buttonsValue;
        } else if(buttonsValue === "+" || buttonsValue === "-" || buttonsValue === "/" || buttonsValue === "*"){
             // If the button value is an operator, store the current input value and operator
            inputOne = Number(typeOutput.innerHTML);
            typeOutput.textContent = '';
            generator = buttonsValue;
        } else if(buttonsValue === '='){
             // If the button value is the equals sign, perform the calculation and display the result
            inputTwo = Number(typeOutput.innerHTML);
            switch(generator){
                case '+':
                    sum = inputOne + inputTwo;
                    break;

                case '-':
                    sum = inputOne - inputTwo;
                    break;

                case '/':
                    sum = inputOne / inputTwo;
                    break;
                    
                case '*':
                    sum = inputOne * inputTwo;
                    break;
            }

            typeOutput.textContent = sum;
        }
         // Add commas to the typeOutput element
        addCommas(typeOutput);
             // Truncate the typeOutput element to the maximum length
        if (typeOutput.textContent.length > maxlength){ 
            typeOutput.textContent = typeOutput.textContent.slice(0, maxlength);
          }          
      });
        
    }
}
















// This function resets the content of the calculator when the reset button is clicked
const resetContent = () =>{
    resetButton.addEventListener('click', () =>{
        // Clear the typeOutput element and reset the input and result variables
        typeOutput.innerHTML = '';
        inputOne = 0;
        inputTwo = 0;
        generator = 0;
        sum = '';
    })
}















// This function deletes the last character in the typeOutput element when the del button is clicked
const deleteOne = () => {
    let text = typeOutput.textContent;
    text = text.slice(0, text.length - 1);
    typeOutput.textContent = text;
}


















// This function adds commas to a number in the given element
const addCommas = (element) => {
    const text = element.textContent.replace(/,/g, ''); // remove any existing commas
    if (text.length > 3) {
      const number = parseFloat(text);
      const formatted = number.toLocaleString();
      element.textContent = formatted;
    }
  };
  














  
// This function changes the styling of the calculator based on the value of the input switch
const changeStyle = () => {
    inputSwitch.addEventListener('input', () =>{
        switch(inputSwitch.value){
            case '0':
                pageBody.classList.remove('version2');
                pageBody.classList.remove('version3');
                pageBody.classList.add('version1');

            break;

            case '0.9':
                pageBody.classList.remove('version1');
                pageBody.classList.remove('version3');
                pageBody.classList.add('version2');

            break;

            case '1.8':
                pageBody.classList.remove('version1');
                pageBody.classList.remove('version2');
                pageBody.classList.add('version3');
            break;
        }
    })
}


















//calls functions here
resetContent();
calculator();
changeStyle();

