
document.addEventListener('DOMContentLoaded', () => {

    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');

    let currentInput = ""; // 최근 입력값
    let operator = ""; // 계산식
    let previousInput = ""; // 이전 입력값
    let activeOperator = null;

    buttons.forEach(button => { // buttons 에 button 이 순서대로 배열로 드러가잇슴

        // console.log(button);
        button.addEventListener('click', () => {
            const value = button.textContent;

            if(button.classList.contains('number')) {

                currentInput += value;
                display.textContent = currentInput;

                // 숫자를 입력하면 기존 연산자 버튼의 강조 효과 제거
                if (activeOperator) {
                    activeOperator.classList.remove("active");
                    activeOperator = null;
                }

            } else if(button.classList.contains('decimal')) {

                if(!currentInput.includes('.')) {
                    currentInput += value;
                    display.textContent = currentInput;
                }

            } else if(button.classList.contains('operator')) {

                if(currentInput !== '') {
                    if(previousInput !== "" && operator !== "") {
                        operator = value; // 연산자 변경

                        console.log(operator);
                        
                        // ✅ 연산자 버튼 강조 효과 변경
                        if (activeOperator) {
                            activeOperator.classList.remove("active");
                        }
                        button.classList.add("active");
                        activeOperator = button;
                    } else {
                        previousInput = currentInput;
                        currentInput = '';
                        operator = value;

                        // 이전에 선택된 연산자 버튼 색상 초기화
                        if (activeOperator) {
                            activeOperator.classList.remove("active");
                        }

                        // 현재 클릭된 연산자 버튼을 강조
                        button.classList.add("active");
                        activeOperator = button; // 현재 연산자 버튼을 저장
                    }

                }
            } else if(button.classList.contains('equals')) {
                if(previousInput && currentInput) {
                    let result = '';

                    const num1 = parseFloat(previousInput);
                    const num2 = parseFloat(currentInput);

                    switch(operator){
                        case '＋' : result = num1 + num2; break;
                        case '－' : result = num1 - num2; break;
                        case '×' : result = num1 * num2; break;
                        case '÷' : result = num1 / num2; break;
                        default: return;
                    }
                    
                    // 계산이 끝나고 출력
                    display.textContent = result;
                    
                    // 계산기 초기화
                    // toString()을 사용하지 않으면 JavaScript가 자동 형 변환을 하면서 "157" 같은 이상한 값이 나올 수도 있어
                    // 계산 결과를 문자열로 변환하여, 이후에도 정상적으로 입력을 이어갈 수 있도록 관리
                    currentInput = result.toString();
                    previousInput = '';
                    operator = '';

                    if (activeOperator) {
                        activeOperator.classList.remove("active");
                        activeOperator = null;
                    }
                }
            } else if(button.classList.contains('clear')){
                // 계산기 초기화
                previousInput = '';
                currentInput = '';
                operator = '';
                display.textContent = '0';

                if (activeOperator) {
                    activeOperator.classList.remove("active");
                    activeOperator = null;
                }
            }
            
        })

    })
})