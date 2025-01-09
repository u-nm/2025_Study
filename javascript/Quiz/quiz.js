
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
    const quizNum = document.querySelector('.quiz-num');
    const quizBox = document.querySelector('.quizBox');
    const qna = document.querySelector('.qna');

    let quizIndex = 0;
    let totalscore = 0;
    
    function showQuiz() {
        let currentIndex = quizList[quizIndex];
        
        quizIndex = quizIndex >= 10 ? quizIndex : '0' + quizIndex;
        
        let quizNumber = parseFloat(quizIndex);

        quizNum.textContent = `Quiz ${quizNumber + 1}`;
    }

    showQuiz();

})