
document.addEventListener('DOMContentLoaded', () => {

    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');

    let currentInput = ""; // 최근 입력값
    let operator = ""; // 계산식
    let previousInput = ""; // 이전 입력값

    buttons.forEach(button => { // buttons 에 button 이 순서대로 배열로 드러가잇슴

        // console.log(button);
        button.addEventListener('click', () => {
            const value = button.textContent;

            if(button.className == 'number') {
                currentInput += value;
                display.textContent = currentInput;
            }
            
        })

    })
})