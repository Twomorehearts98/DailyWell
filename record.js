// record.js
document.addEventListener('DOMContentLoaded', function () {
    const today = new Date().toLocaleDateString();
    
    // 기록한 정보를 저장하는 함수
    function saveRecordToLocalStorage(record) {
        // 이전에 저장된 정보가 있다면 불러옴
        const existingRecords = JSON.parse(localStorage.getItem('dailyWellRecords')) || [];

        // 새로운 기록을 추가
        existingRecords.push(record);

        // 로컬 스토리지에 저장
        localStorage.setItem('dailyWellRecords', JSON.stringify(existingRecords));

        // 해당 날짜의 정보도 따로 저장
        localStorage.setItem(`dailyWellRecord_${record.date}`, JSON.stringify(record));
    }

    // 저장된 정보를 불러오는 함수
    function getRecordsFromLocalStorage() {
        // 로컬 스토리지에서 정보를 가져옴
        const storedRecords = JSON.parse(localStorage.getItem('dailyWellRecords')) || [];

        return storedRecords;
    }

    // 기록한 정보를 저장
    const record = {
        date: today,
        mood: 4, // 사용자가 선택한 기분 점수
        // 다른 정보도 추가 가능
    };

    saveRecordToLocalStorage(record);
});
