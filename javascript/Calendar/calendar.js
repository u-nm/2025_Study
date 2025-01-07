
document.addEventListener('DOMContentLoaded', () => {

    const thisMY = document.querySelector('.this-month-year');
    const calWeek = document.querySelector('.cal-week');
    const calDate = document.querySelector('.cal-date');
    const prevBtn = document.querySelector('.prev-month');
    const nextBtn = document.querySelector('.next-month');

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dates = date.getDate();
    let weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = date.getDay();

    console.log(year, month, dates, weeks[day]);

    // 요일 출력
    weeks.forEach(week => {
        const weekLi = document.createElement('li');
        weekLi.textContent = week;

        calWeek.appendChild(weekLi);
    });


    // 해당 연월일 출력
    function renderCal() {
        // 변수에 현재 월의 첫 번째 날짜를 나타내는 Date 객체를 저장한다.
        // 해당 월의 첫 번째 날짜에 대한 정보를 얻는다.
        const firstDay = new Date(year, month - 1, 1).getDay();
        // 변수에 현재 월의 총 일 수를 나타내는 값을 저장한다. 
        // 해당 월이 몇 일까지 있는지 알 수 있다.
        const lastDate = new Date(year, month, 0).getDate();

        // innerHTML 로 비우지 않으면 월이 바꿀때마다 하단에 추가로 출력됨
        calDate.innerHTML = '';
        
        //month 두자리로 출력
        month = month >= 10 ? month : "0" + month;

        // 현재 연월 표시
        thisMY.textContent = year + '년 ' + month + '월';

        // 빈 날짜(이전 달)
        for (let i = 0; i < firstDay; i++) {
            //  빈 날짜를 나타내는 div 요소를 생성한다.
            const emptyDate = document.createElement("div");
            // 생성한 div 요소에 "date"와 "empty" 클래스를 추가한다.
            emptyDate.classList.add("date", "empty");
            // 생성한 빈 날짜 요소를 캘린더 그리드에 추가한다.
            calDate.appendChild(emptyDate);
        }

        // 현재 달의 날짜
        for (let dateNum = 1; dateNum <= lastDate; dateNum++) {
            const dateEl = document.createElement("div");
            dateEl.classList.add("date");

            // 오늘 날짜 강조 표시
            if (dateNum === date.getDate() && month - 1 === date.getMonth() && year === date.getFullYear()) {
                dateEl.classList.add("today");
            }

            //day 두자리로 출력
            dateNum = dateNum >= 10 ? dateNum : "0" + dateNum;

            dateEl.textContent = dateNum;

            calDate.appendChild(dateEl);
        }

        // 마지막 날 이후 빈 칸 채우기
        const totalCells = firstDay + lastDate; // 총 생성된 셀 개수
        const remainingCells = 7 - (totalCells % 7); // 남은 빈칸 개수 (7의 배수로 맞추기)

        if (remainingCells < 7) { // 딱 나누어 떨어지면 추가할 필요 없음
            for (let i = 0; i < remainingCells; i++) {
                const emptyDate = document.createElement("div");
                emptyDate.classList.add("empty");
                calDate.appendChild(emptyDate);
            }
        }

        // console.log("현재 월의 첫번째 날짜가 무슨 요일", firstDay);
        // console.log("현재 월의 총 일 수", lastDate);

    }

    prevBtn.addEventListener('click', () => {
        month--;
        if(month < 1) { // 0 = 1월 보다 작으면 12월이니까 12월이면 
            month = 12; // 11 = 12월로
            year--; // 연도도 작년으로
        }
        renderCal();
    })

    nextBtn.addEventListener('click', () => {
        month++;
        if(month > 12) {
            month = 1;
            year++;
        }
        renderCal();
    })

    // 연월을 클릭하면 "오늘 날짜" 가 있는 연월로 돌아가기
    thisMY.addEventListener("click", () => {
        year = date.getFullYear();
        month = date.getMonth() + 1;
        renderCal();
    });

    renderCal();

})