//chart.js
// 그래프 그리기
function renderGraphs() {
    const data = loadData();

    // 기분 점수 그래프 초기화
    const moodChartCanvas = document.getElementById('moodChart');
    const existingChart = moodChartCanvas.chart;
    
    if (existingChart) {
        existingChart.destroy();
    }
    
    const moodChart = new Chart(moodChartCanvas, {
        type: 'line', // 라인 그래프로 변경
        data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
            datasets: [{
                label: 'Mood Score',
                data: data.mood,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2, // 라인의 굵기 조절
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 5, // y 축의 최대값 설정 (기분 점수의 최대값)
                    stepSize: 1 // y 축의 간격 설정
                }
            }
        }
    });

    // 몸무게 그래프 초기화
    const weightChartCanvas = document.getElementById('weightChart');
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
                    stepSize: 1 // y 축의 간격 설정
                }
            }
        }
    });
}

// 초기화면에서 그래프 그리기
renderGraphs();
