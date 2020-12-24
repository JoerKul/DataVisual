const dataset = [{
    "humid": 35.16,
    "time": "1606665887",
    "temp": 21.39
}, {
    "humid": 21.53,
    "time": "1604997303",
    "temp": 16.13
}, {
    "humid": 52.89,
    "time": "1577102177",
    "temp": 22.54
}, {
    "humid": 53.1,
    "time": "1594794568",
    "temp": 10.29
}, {
    "humid": 50.83,
    "time": "1595795726",
    "temp": 9.75
}, {
    "humid": 38.59,
    "time": "1585997519",
    "temp": 22.97
}, {
    "humid": 43.18,
    "time": "1583522101",
    "temp": 18.63
}, {
    "humid": 37.05,
    "time": "1596494175",
    "temp": 24.89
}, {
    "humid": 33.77,
    "time": "1576691891",
    "temp": 17.88
}, {
    "humid": 40.89,
    "time": "1602004651",
    "temp": 11.08
}]


var ctx = document.getElementById('myChart').getContext('2d');

var timelabels = [];
var humiddata = [];
var tempdate = [];


dataset.sort((a, b) => a.time - b.time);

dataset.forEach(item => {
    var d = new Date(0);
    d.setUTCSeconds(item.time);
    console.log(d.toLocaleString());
    timelabels.push(d.toLocaleString());
    humiddata.push(item.humid);
    tempdate.push(item.temp);
});

tempdate.forEach(item => console.log(item));



var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: timelabels,
        datasets: [{
            label: 'humid',
            backgroundColor: 'red',
            borderColor: 'red',
            data: humiddata,
            fill: false,
        }, {

            label: 'temp',
            backgroundColor: 'green',
            borderColor: 'green',
            data: tempdate,
            fill: false,
        }]
    },


    // Configuration options go here
    options: {

    }
});