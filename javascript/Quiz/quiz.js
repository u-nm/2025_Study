
document.addEventListener('DOMContentLoaded', () => {
    
    const quizList = [
        {
            q: "qqqqqqqqqqqqqqqqqqqq 몇개",
            a: [13, 18, 20, 24],
            correct: 20,
            score: 4,
        },
        {
            q: "qqqqqqqqqqqqqqqqqqqq 몇개",
            a: [14, 18, 20, 24],
            correct: 20,
            score: 5,
        },
        {
            q: "qqqqqqqqqqqqqqqqqqqq 몇개",
            a: [15, 18, 20, 24],
            correct: 20,
            score: 5,
        },
        {
            q: "qqqqqqqqqqqqqqqqqqqq 몇개",
            a: [16, 18, 20, 24],
            correct: 20,
            score: 6,
        },
        {
            q: "qqqqqqqqqqqqqqqqqqqq 몇개",
            a: [17, 18, 20, 24],
            correct: 20,
            score: 8,
        }
    ]

    let quizIndex = 0;
    let selectedA = JSON.parse(localStorage.getItem("quizAnswers")) || new Array(quizList.length).fill(null);
    let userNames = localStorage.getItem("userName") || ""; // 사용자 이름 불러오기

    // 사용자 이름
    const quizUser = document.querySelector('.quiz-user');
    const nameText = document.querySelector('.user-name');
    const nextUser = document.querySelector('.next-user');

    // 퀴즈 영역
    const quizBox = document.querySelector('.quiz-box');
    const quizNum = document.querySelector('.quiz-num');
    const question = document.querySelector('.question');
    const answers = document.querySelector('.answers');
    const prevQuiz = document.querySelector('.prev-btn');
    const nextQuiz = document.querySelector('.next-btn');
    const result = document.querySelector('.quiz-result');

    // 사용자가 저장된 이름이 있으면 자동 입력
    if (userNames) {
        nameText.value = userNames;
    }

    // 사용자 정보 클릭
    nextUser.addEventListener('click', ()=> {
        userNames = nameText.value.trim();
        if(userNames) {
            localStorage.setItem("userName", userNames);

            console.log(userNames);

            quizUser.classList.add('hidden');
            quizBox.classList.remove('hidden');
        } else {
            alert('이름입력');
            nameText.focus();
            return;
        }
    });
    
    function showQuiz() {
        let currentIndex = quizList[quizIndex];

        quizNum.textContent = `Quiz ${quizIndex + 1}`;
        question.textContent = currentIndex.q;

        // 기존 답변 삭제 후 새 답변 추가
        answers.innerHTML = '';

        const answerUl = document.createElement('ul');

        currentIndex.a.forEach(answer => {
            const answerLi = document.createElement('li');
            const answerLabel = document.createElement('label');
            const answerRadio = document.createElement('input');
            
            answerRadio.type = "radio";
            answerRadio.name = "answer"; // 같은 그룹으로 묶기
            answerRadio.value = answer;

            if(selectedA[quizIndex] === answer) {
                answerRadio.checked = true;
            }

            answerRadio.addEventListener('change', () => selected(answer));

            answerLabel.appendChild(answerRadio);
            answerLabel.appendChild(document.createTextNode(answer));
            answerLi.appendChild(answerLabel);
            answerUl.appendChild(answerLi);

        });

        answers.appendChild(answerUl);

        // 첫번째 문제면 이전버튼 숨기기
        prevQuiz.classList.toggle('hidden', quizIndex === 0);

    }

    // 선택된 답 저장
    function selected(answer) {
        selectedA[quizIndex] = answer;
        localStorage.setItem("quizAnswers", JSON.stringify(selectedA));
    }

    // 결과 화면
    function showResult() {
        quizBox.classList.add('hidden');

        // 점수 계산 및 결과 표시
        let totalScore = 0;
        let resultHTML = `<h2>Quiz Completed!</h2><ul>`;

        quizList.forEach((quizs, index) => {
            const isCorrect = selectedA[index] === quizs.correct;

            if (isCorrect) {
                totalScore += quizs.score;
            }

            // 정답의 번호 찾기
            const correctIndex = quizs.a.indexOf(quizs.correct) + 1;
            const selectedIndex = quizs.a.indexOf(selectedA[quizIndex]) + 1;

            resultHTML += `<li>
            Q${index + 1}: ${quizs.q} <br> 
            당신의 답: <strong>${selectedIndex > 0 ? `${selectedIndex}. ${selectedA[quizIndex]}` : "미선택"}</strong> 
            (${isCorrect ? "✅ 정답" : `❌ 오답 (정답: <strong>${correctIndex}. ${quizs.correct}</strong>)`})
        </li><br>`;
        });

        resultHTML += `<h3>${userNames ? userNames + "님의 총 점수" : "총 점수"}: ${totalScore}</h3></ul>`;

        const firstPage = document.createElement('button');
        firstPage.textContent = '처음으로';

        firstPage.addEventListener('click', () => {
            quizIndex = 0;
            selectedA = JSON.parse(localStorage.getItem("quizAnswers")) || new Array(quizList.length).fill(null);

            result.classList.add('hidden');
            quizBox.classList.add('hidden');
            quizUser.classList.remove('hidden');
        })

        result.innerHTML = resultHTML;
        result.textContent += firstPage;
        result.classList.remove("hidden");
    }

    nextQuiz.addEventListener('click', () => {
        if(!selectedA[quizIndex]) {
            alert("답변을 선택해주세요!");
            const firstRadio = document.querySelector("input[name='answer']");
            if (firstRadio) firstRadio.focus(); // 첫 번째 라디오 버튼에 포커스
            return;
        };

        if (quizIndex < quizList.length - 1) {
            quizIndex++;
            showQuiz();
        } else {
            showResult();
        };

    });

    prevQuiz.addEventListener('click', () => {
        if (quizIndex > 0) {
            quizIndex--;
            showQuiz();
        }
    });

    showQuiz();

})