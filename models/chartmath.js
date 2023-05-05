import Chart from 'chart.js/auto';
const sequelize = require('../config/connection');

// sequelize.sync().then(() => {

//     Entry.findAll().then(res => {
//         console.log(res)
//     }).catch((error) => {
//         console.error('Failed to retrieve data : ', error);
//     });
// },
(async function() {
//will need a canvas id of 'chart' in the html for this to work properly
    const data = [
        {type: 'gasoline', amount: 90},
        {type: 'groceries', amount: 120},
    ];

new Chart(
    document.getElementById('chart'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.type),
        datasets: [
          {
            label: 'Money(USD)',
            data: data.map(row => row.amount)
          }
        ]
      }
    }
  );
})();