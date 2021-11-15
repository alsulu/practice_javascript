const { Chart } = require('chart.js');
const moment = require('moment');
const datepicker = require('js-datepicker');

document.addEventListener("DOMContentLoaded", function(event) {

    //сегодняшняя дата:

    document.getElementById("date").innerHTML = `<span id="now-day">${moment().format('dddd')},</span> ${moment().format("D MMMM YYYY")}`;


    //график:

    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const data = {
        labels: labels,
        datasets: [{
        label: 'tasks',
        data: [5, 2, 6, 8, 7, 3, 4],
        backgroundColor: 'rgba(74, 74, 190, 0.836)',
        borderColor: 'rgba(74, 74, 190, 0.836)',
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Value'
                    },
                    suggestedMin: 0,
                    suggestedMax: 10
                }
            }
        }
    };

    const graph = new Chart(document.getElementById("graph"), config);

    //подсчёт количества выполненных за неделю задач:
    let count = 0;
    data.datasets[0].data.forEach(element => count += element);

    document.getElementsByClassName("count")[0].innerHTML = `<p><span>${(count / 10) * 10}+</span> <br>Tasks</p>`;


    //выбор промежутка дат:

    const start = datepicker('#one', {
        id: 1,
        startDay: 1,
        formatter: (input, date, instance) => {
            const value = date.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'})
            input.value = value;
            localStorage.setItem("firstDate", value);
        }
    })

    const end = datepicker('#two', {
        id: 1,
        startDay: 1,
        position: 'br',
        formatter: (input, date, instance) => {
            const value = date.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'})
            input.value = value
            localStorage.setItem("secondDate", value);
        }
    })

    //сохранение в локальном хранилище выбранной даты
    let firstDate = localStorage.getItem("firstDate");
    let secondDate = localStorage.getItem("secondDate");
    if (firstDate)
        document.getElementById("one").value = firstDate;
    if (secondDate)
        document.getElementById("one").value = secondDate;
    
})