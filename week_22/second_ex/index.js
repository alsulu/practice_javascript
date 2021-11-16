const { Chart } = require('chart.js');
const moment = require('moment');
const datepicker = require('js-datepicker');

document.addEventListener("DOMContentLoaded", function(event) {
    //сегодняшняя дата:
    document.getElementById("date").innerHTML = `<span id="now-day">${moment().format('dddd')},</span> ${moment().format("D MMMM YYYY")}`;

    pickDates();
    saveLocalDates();
    (saveLocalDates() === true ? drawGraph("week1") : drawGraph("week2"));
})

document.getElementById("btn-calendar").onclick = function() {
    if (document.getElementById("one").value && document.getElementById("two").value) 
        drawGraph("week2");
}


function pickDates() {
    const start = datepicker('#one', {
        id: 1,
        startDay: 1,
        formatter: (input, date, instance) => {
            const value = date.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'});
            input.value = value;
            localStorage.setItem("firstDate", value);
        }
    })

    const end = datepicker('#two', {
        id: 1,
        startDay: 1,
        position: 'br',
        formatter: (input, date, instance) => {
            const value = date.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'});
            input.value = value
            localStorage.setItem("secondDate", value);
        }
    })
}

function saveLocalDates() {
    let firstDate = localStorage.getItem("firstDate");
    let secondDate = localStorage.getItem("secondDate");
    if (firstDate)
        document.getElementById("one").value = firstDate;
    if (secondDate)
        document.getElementById("two").value = secondDate;

    if (firstDate && secondDate)
        return false;
    else
        return true;
}

function drawGraph(week) {
    const tasks = JSON.parse(tasksJSON);
    let labels = []; 
    let datas = [];
    tasks.forEach(elem => {labels.push(elem.label); datas.push(elem.data[week])});
    const data = {
        labels: labels,
        datasets: [{
        label: 'tasks',
        data: datas,
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

    document.getElementsByClassName("graph-canvas")[0].innerHTML = `<canvas id="graph" height="100" aria-label="tasks" role="img"></canvas>`
    const graph = new Chart(document.getElementById("graph"), config);

    countTasks(datas);
}

function countTasks(datas) {
    let count = 0;
    datas.forEach(element => count += element);
    document.getElementsByClassName("count")[0].innerHTML = `<p><span>${Math.floor(count/10) * 10}+</span> <br>Tasks</p>`;
}