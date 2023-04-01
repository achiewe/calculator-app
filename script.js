const inputSwitch = document.querySelector('.toggle-switch');
const typeOutput = document.querySelector('.type-output');
const buttons = document.querySelectorAll('button');
const delButton = document.getElementById('del');
const resetButton = document.getElementById('reset');
const equalButtton = document.getElementById('equal');
const pageBody = document.querySelector('body');






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


changeStyle();
