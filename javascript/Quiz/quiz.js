
document.addEventListener('DOMContentLoaded', () => {
    
    const quizList = [
        {
            q: "qqqqqqqqqqqqqqqqqqqq 몇개",
            a: [13, 18, 20, 24],
            score: 4,
        },
        {
            q: "qqqqqqqqqqqqqqqqqqqq 몇개",
            a: [14, 18, 20, 24],
            score: 5,
        },
        {
            q: "qqqqqqqqqqqqqqqqqqqq 몇개",
            a: [15, 18, 20, 24],
            score: 5,
        },
        {
            q: "qqqqqqqqqqqqqqqqqqqq 몇개",
            a: [16, 18, 20, 24],
            score: 6,
        },
        {
            q: "qqqqqqqqqqqqqqqqqqqq 몇개",
            a: [17, 18, 20, 24],
            score: 8,
        }
    ]

    let quizIndex = 0;
    let selectedA = new Array(quizList.length).fill(null);

    // 사용자 이름
    const quizUser = document.querySelector('.quiz-user');
    const userName = document.querySelector('.user-name');
    const nextUser = document.querySelector('.next-user');

    // 퀴즈 영역
    const quizBox = document.querySelector('.quiz-box');
    const quizNum = document.querySelector('.quiz-num');
    const question = document.querySelector('.question');
    const answers = document.querySelector('.answers');
    const prevQuiz = document.querySelector('.prev-btn');
    const nextQuiz = document.querySelector('.next-btn');
    const result = document.querySelector('.quiz-result');

    // 사용자 정보 클릭
    nextUser.addEventListener('click', ()=> {
        if(userName.value !== '') {
            quizUser.classList.add('hidden');
            quizBox.classList.remove('hidden');
        } else {
            alert('이름입력');
            return false;
        }
    });
    
    function showQuiz() {
        let currentIndex = quizList[quizIndex];

        quizNum.textContent = `Quiz ${quizIndex + 1}`;
        question.textContent = currentIndex.q;

        // 기존 답변 삭제 후 새 답변 추가
        answers.textContent = '';

        const answerUl = document.createElement('ul');

        currentIndex.a.forEach(answer => {
            const answerLi = document.createElement('li');
            const answerLabel = document.createElement('label');
            const answerRadio = document.createElement('input');
            
            answerRadio.type = "radio";
            answerRadio.name = "answer"; // 같은 그룹으로 묶기
            answerRadio.value = answer;

            if(selectedA[currentIndex] === answer) {
                answerRadio.checked = true;
            }

            answerRadio.addEventListener('onchange', () => selected(answer));

            answerLabel.appendChild(answerRadio);
            answerLabel.appendChild(document.createTextNode(answer));
            answerLi.appendChild(answerLabel);
            answerUl.appendChild(answerLi);

        });

        answers.appendChild(answerUl);

        // 첫번째 문제면 이전버튼 숨기기
        prevQuiz.classList.toggle('hidden', currentIndex === 0);

    }

    // 선택된 답 저장
    function selected(answer) {
        selected[currentIndex] = answer;
    }

    // 결과 화면

    function showResult() {
        quizNum.textContent = 'Quiz Completed!';
        quizBox.classList.add('hidden');
        result.classList.remove('hidden');

        // 점수 계산 및 결과 표시
        let totalscore = 0;
        let resultHTML = `<h2>결과</h2><ul>`;

        quizList.forEach((q, index) => {
            const isCorrect = selectedAnswers[index] === q.correct;
            if (isCorrect) score++;
            resultHTML += `<li>Q${index + 1}: ${q.question} <br> 
                당신의 답: <strong>${selectedAnswers[index] || "미선택"}</strong> 
                (${isCorrect ? "✅ 정답" : `❌ 오답 (정답: ${q.correct})`})</li><br>`;
        });
        resultHTML += `<h3>총 점수: ${score} / ${questions.length}</h3></ul>`;
        resultContainer.innerHTML = resultHTML;
        resultContainer.classList.remove("hidden");
    }

    showQuiz();

})