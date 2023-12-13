// record.js

document.addEventListener('DOMContentLoaded', function () {
    // 기록하기 버튼에 이벤트 리스너 추가
    document.getElementById('recordBtn').addEventListener('click', function () {
        openRecordModal();
    });

    // 모달 창 닫기 함수
    function closeModal() {
        document.getElementById('recordModal').style.display = 'none';
    }

    // 모달 열기 함수
    function openRecordModal() {
        document.getElementById('recordModal').style.display = 'block';
    }

    // 모달 닫기 버튼 이벤트 리스너 추가
    document.getElementById('modalCloseBtn').addEventListener('click', function () {
        closeModal();
    });

    // 기록하기 버튼 클릭 시 처리 함수
    function saveRecord() {
        const currentDate = getCurrentDate();

        // 사용자가 입력한 데이터 수집
        const mood = document.getElementById('mood').value;
        const weight = document.getElementById('weight').value;
        const foodName = document.getElementById('foodName').value;
        const foodImage = document.getElementById('foodImage').value;

        // 기록 객체 생성
        const record = {
            date: currentDate,
            mood: mood,
            weight: weight,
            foodName: foodName,
            foodImage: foodImage
        };

        // 저장 함수 호출
        saveRecordToLocalStorage(record);

        // 모달 창 닫기
        closeModal();
    }

    // 기록 버튼 클릭 시 saveRecord 함수 호출
    document.getElementById('saveRecordBtn').addEventListener('click', function () {
        saveRecord();
    });

    // 현재 날짜 가져오는 함수
    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    }
});

// Add this line to initialize the modal when the DOM is loaded
document.addEventListener('DOMContentLoaded', openRecordModal);
