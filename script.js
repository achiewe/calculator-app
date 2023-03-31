const body = document.querySelector('.body');
const calcTitle = document.querySelector('.calc-title');
const themeTitle = document.getElementById('theme-title');
const inputValue = document.getElementById('input-value');
const inputToggleSwitch = document.querySelector('.toggle-switch');
const calculatorOutput = document.querySelector('.calculator-output');
const buttonsDiv = document.querySelector('.calculator-buttons');
const buttons = document.querySelectorAll('button');
const delButton = document.getElementById('del');
const resetButton = document.getElementById('reset');
const equalButton = document.getElementById('equal');

const changeStyles = () => {
    inputToggleSwitch.addEventListener('input', () => {
        switch(inputToggleSwitch.value) {

            case "0":
                
                console.log(inputToggleSwitch.value);
                body.classList.remove('body2');
                body.classList.remove('body1');
                calcTitle.classList.remove('title-2');
                calcTitle.classList.remove('title-1');
                themeTitle.classList.remove('title-2')
                themeTitle.classList.remove('title-1');
                inputValue.classList.remove('title-2');
                inputValue.classList.remove('title-1');
                inputToggleSwitch.classList.remove('toggle-2');
                inputToggleSwitch.classList.remove('toggle-1');
                inputToggleSwitch.classList.remove('theme-2');
                inputToggleSwitch.classList.add('thumb-1');
                inputToggleSwitch.classList.remove('thumb-2');
                inputToggleSwitch.classList.remove('thumb-3');
                calculatorOutput.style.background = 'var(--dark-blue)';
                calculatorOutput.firstElementChild.style.color = 'var(--white)';
                buttonsDiv.style.background = 'var( --black-blue)';
                buttons.forEach(button =>{
                    button.style.background = 'var(--sliver)';
                    button.style.color = 'var(--light-blue)';
                    button.style.boxShadow = 'inset 0px -4px 0px #B3A497';
                })
                delButton.style.background = 'var(--worn-out-blue)';
                delButton.style.boxShadow = 'inset 0px -4px 0px #414E73';
                delButton.style.color = 'var(--white)';
                resetButton.style.background = 'var(--worn-out-blue)';
                resetButton.style.boxShadow = 'inset 0px -4px 0px #414E73';
                resetButton.style.color = 'var(--white)';
                equalButton.style.background = 'var(--dark-orange)';
                equalButton.style.boxShadow = 'inset 0px -4px 0px #93261A';
                equalButton.style.color = 'var(--white)';
                break;

            case "0.9":
                console.log(inputToggleSwitch.value);
                body.classList.remove('body2');
                body.classList.add('body1');
                calcTitle.classList.remove('title-2');
                calcTitle.classList.add('title-1');
                themeTitle.classList.remove('title-2')
                themeTitle.classList.add('title-1');
                inputValue.classList.remove('title-2');
                inputValue.classList.add('title-1');
                inputToggleSwitch.classList.remove('toggle-2');
                inputToggleSwitch.classList.add('toggle-1');
                inputToggleSwitch.classList.add('theme-2');
                inputToggleSwitch.classList.remove('theme-3');
                inputToggleSwitch.classList.remove('thumb-1');
                inputToggleSwitch.classList.remove('thumb-3');
                inputToggleSwitch.classList.add('thumb-2');
                calculatorOutput.style.background = 'var(--light-grey)';
                calculatorOutput.firstElementChild.style.color = 'var(--light-black)'; 
                buttonsDiv.style.background = 'var(--dark-grey)';
                buttons.forEach(button =>{
                    button.style.background = 'var(--grey)';
                    button.style.color = 'var(--light-black)';
                    button.style.boxShadow = 'inset 0px -4px 0px #A79E91';
                })
                delButton.style.background = 'var(--worn-out-green)';
                delButton.style.boxShadow = 'inset 0px -4px 0px #1B6066';
                resetButton.style.background = 'var(--worn-out-green)';
                resetButton.style.boxShadow = 'inset 0px -4px 0px #1B6066';
                equalButton.style.background = 'var(--orange)';
                equalButton.style.boxShadow = 'inset 0px -4px 0px #873901';
                break;

            case "1.8":
                console.log(inputToggleSwitch.value);
                body.classList.remove('body1');
                body.classList.add('body2');
                calcTitle.classList.remove('title-1');
                calcTitle.classList.add('title-2');
                themeTitle.classList.remove('title-1');
                themeTitle.classList.add('title-2');
                inputValue.classList.remove('title-1');
                inputValue.classList.add('title-2');
                inputToggleSwitch.classList.remove('toggle-1');
                inputToggleSwitch.classList.add('toggle-2');
                inputToggleSwitch.classList.add('theme-3');
                inputToggleSwitch.classList.remove('thumb-1');
                inputToggleSwitch.classList.remove('thumb-2');
                inputToggleSwitch.classList.add('thumb-3');
                calculatorOutput.style.background = 'var(--purple)';
                calculatorOutput.firstElementChild.style.color = 'var(--light-yellow)';  
                buttonsDiv.style.background = 'var(--purple)';
                buttons.forEach(button =>{
                    button.style.background = 'var(--light-purple)';
                    button.style.color = 'var(--light-yellow)';
                    button.style.boxShadow = 'inset 0px -4px 0px #881C9E';
                })
                delButton.style.background = 'var(--worn-out-purple)';
                delButton.style.boxShadow = 'inset 0px -4px 0px #BE15F4';
                delButton.style.color = 'var(--white)';
                resetButton.style.background = 'var(--worn-out-purple)';
                resetButton.style.boxShadow = 'inset 0px -4px 0px #BE15F4';
                resetButton.style.color = 'var(--white)';
                equalButton.style.background = 'var(--skycolor)';
                equalButton.style.boxShadow = 'inset 0px -4px 0px #6CF9F1';
                equalButton.style.color = 'var(--very-dark-black)';
        }
    })
}

changeStyles();



