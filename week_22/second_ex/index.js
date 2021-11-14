const { Chart } = require('chart.js');
const moment = require('moment');

let date = moment();
console.log(date);

let gr = new Chart();
console.log(gr);


document.getElementById("date").innerHTML = `<span id="now-day">${moment().format('dddd')},</span> ${moment().format("D MMMM YYYY")}`;

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
    options: {}
};

const graph = new Chart(document.getElementById("graph"), config);

let count = 0;
data.datasets[0].data.forEach(element => count += element);

document.getElementsByClassName("count")[0].innerHTML = `<p><span>${(count / 10) * 10}+</span> <br>Tasks</p>`