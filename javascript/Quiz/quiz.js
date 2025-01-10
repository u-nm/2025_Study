
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
    const quizUser = document.querySelector('.quiz-user');
    const userName = document.querySelector('.user-name');
    const quizNum = document.querySelector('.quiz-num');
    const quizBox = document.querySelector('.quiz-box');
    const qna = document.querySelector('.qna');
    const nextUser = document.querySelector('.next-user');
    const nextQuiz = document.querySelector('.next-quiz');

    let quizIndex = 0;
    let totalscore = 0;

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

        const question = document.createElement('p');
        question.textContent = currentIndex.q;
        
        const answer = document.createElement('ul');
        const answerLi = document.createElement('li');
        const answerTxt = document.createElement('input');
        answerTxt.setAttribute('type', 'text');
        answerLi.appendChild(answerTxt);        
        answer.appendChild(answerLi);
        
        const answerBtn = document.createElement('button');
        answerBtn.classList.add('next-quiz');
        answerBtn.textContent = 'Next';

        qna.appendChild(question);
        qna.appendChild(answer);
        qna.appendChild(answerBtn);

    }

    showQuiz();

})