// calendar.js

document.addEventListener('DOMContentLoaded', function () {
    const calendarTable = document.getElementById('calendarTable');
    const today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    function renderCalendar() {
        calendarTable.innerHTML = '';

        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        let dayCounter = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');
                if (i === 0 && j < new Date(currentYear, currentMonth, 1).getDay()) {
                    // 빈 셀로 채우기
                } else if (dayCounter <= daysInMonth) {
                    cell.textContent = dayCounter;
                    cell.addEventListener('click', function () {
                        // 클릭한 날짜에 대한 처리
                        openRecordModal(currentYear, currentMonth + 1, parseInt(cell.textContent));
                    });
                    dayCounter++;
                }
                row.appendChild(cell);
            }

            calendarTable.appendChild(row);
        }
    }

    f// openRecordModal 함수 수정
// openRecordModal 함수 수정
function openRecordModal(year, month, day) {
    const currentDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

    // localStorage에서 해당 날짜의 정보를 불러옴
    const recordString = localStorage.getItem(`dailyWellRecord_${currentDate}`);  // 수정된 부분

    if (recordString) {
        const record = JSON.parse(recordString);

        // 팝업 창에 정보 표시
        document.getElementById('modalTitle').textContent = `오늘의 기록 - ${currentDate}`;
        document.getElementById('mood').value = record.mood || '';
        document.getElementById('weight').value = record.weight || '';
        document.getElementById('foodName').value = record.foodName || '';
        document.getElementById('foodImage').value = record.foodImage || '';
        document.getElementById('recordModal').style.display = 'block';
    } else {
        alert('해당 날짜의 기록이 없습니다.');
    }
}


    document.getElementById('recordBtn').addEventListener('click', function () {
        openRecordModal(); // openRecordModal 함수 호출
    });
    // 모달 창 닫기 함수
    function closeModal() {
        document.getElementById('recordModal').style.display = 'none';
    }

    renderCalendar();

    // 이전 달로 이동
    document.getElementById('prevMonth').addEventListener('click', function () {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
        renderCalendar();
    });

    // 다음 달로 이동
    document.getElementById('nextMonth').addEventListener('click', function () {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
        renderCalendar();
    });
});
