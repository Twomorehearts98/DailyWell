// graph.js

document.addEventListener('DOMContentLoaded', function () {
    // 여기에 그래프 그리는 로직을 추가
    renderGraphs();
    document.getElementById('recordBtn').addEventListener('click', function () {
        // 기록하기 버튼을 누르면 모달 팝업 열기
        document.getElementById('recordModal').style.display = 'block';
        // 팝업 창에 오늘의 날짜 표시
        document.getElementById('modalTitle').textContent = `오늘의 기록 - ${getCurrentDate()}`;
    });
});

// 그래프 그리기
function renderGraphs() {
    const data = loadData(); // 데이터를 로드하는 함수 (loadData 함수는 실제 데이터를 어떻게 가져올지에 따라 구현해야 함)

    // 기분 점수 그래프 초기화
    const moodChartCanvas = document.createElement('canvas');
    moodChartCanvas.id = 'moodChart';
    document.getElementById('main').appendChild(moodChartCanvas);
    const moodChart = new Chart(moodChartCanvas, {
        type: 'line',
        data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
            datasets: [{
                label: 'Mood Score',
                data: data.mood,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 5,
                    stepSize: 1
                }
            }
        }
    });

    // 몸무게 그래프 초기화
    const weightChartCanvas = document.createElement('canvas');
    weightChartCanvas.id = 'weightChart';
    document.getElementById('main').appendChild(weightChartCanvas);
    const weightChart = new Chart(weightChartCanvas, {
        type: 'line',
        data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
            datasets: [{
                label: 'Weight (kg)',
                data: data.weight,
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }
        }
    });
}

// 데이터를 로드하는 함수 (테스트를 위해 임의의 데이터 반환)
function loadData() {
    return {
        mood: [3, 4, 5, 3, 2, 4, 5], // 예시 데이터 (기분 점수)
        weight: [70, 69, 68, 68, 67, 66, 65] // 예시 데이터 (몸무게)
    };
}
document.addEventListener('DOMContentLoaded', function () {
    // 그래프를 그리는 코드 작성
    renderGraphs();
});