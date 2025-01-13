
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
    let totalscore = 0;
    let selectedA = new Array(quizList.length).fill(null);

    // 사용자 이름
    const quizUser = document.querySelector('.quiz-user');
    const userName = document.querySelector('.user-name');
    const nextUser = document.querySelector('.next-user');

    // 퀴즈 영역
    const quizNum = document.querySelector('.quiz-num');
    const question = document.querySelector('.question');
    const answers = document.querySelector('.answers');
    const prevQuiz = document.querySelector('.prev-btn');
    const nextQuiz = document.querySelector('.next-btn');

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
        const quizA = document.createElement(li);
        const currentIndex = quizList[quizIndex];

        quizNum.textContent = `Quiz ${quizIndex + 1}`;
        question.textContent = currentIndex.q;

    }

    showQuiz();

})