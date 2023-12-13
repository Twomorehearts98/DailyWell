// calendar.js
document.addEventListener('DOMContentLoaded', function () {
    const calendarTable = document.getElementById('calendarTable');
    const today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    function renderCalendar() {
        // 현재 달의 1일에 대한 정보 획득
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const startingDay = firstDayOfMonth.getDay();

        const tableRows = [];
        let dayCounter = 1;

        // 달력 테이블 렌더링
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');

                if (i === 0 && j < startingDay) {
                    // 빈 셀로 채우기
                } else if (dayCounter <= daysInMonth) {
                    cell.textContent = dayCounter;
                    cell.addEventListener('click', function () {
                        openRecordModal(currentYear, currentMonth + 1, parseInt(cell.textContent));
                    });
                    dayCounter++;
                }

                row.appendChild(cell);
            }
            tableRows.push(row);
        }

        // 테이블 업데이트
        calendarTable.innerHTML = '';
        tableRows.forEach(row => calendarTable.appendChild(row));
    }

    function updateCalendarHeader() {
        const currentMonthYearElement = document.getElementById('currentMonthYear');
        currentMonthYearElement.textContent = `${currentYear}년 ${currentMonth + 1}월`;
    }

    document.getElementById('prevMonth').addEventListener('click', function () {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
        renderCalendar();
        updateCalendarHeader();
    });

    document.getElementById('nextMonth').addEventListener('click', function () {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
        renderCalendar();
        updateCalendarHeader();
    });

    // 페이지 로딩 시 초기 렌더링 및 헤더 업데이트 호출
    renderCalendar();
    updateCalendarHeader();
});
