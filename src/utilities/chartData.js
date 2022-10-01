export const barChartData = {
    labels: ['Repair Advance', 'Fuel Advance', 'Salary Advance'],
    datasets: [
        {
        id: 1,
        label: 'Total Req Val',
        data: [40579, 20145, 16940],
        },
    ],
}

export const chartOptions = {
    scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: false
          },
          ticks: {
            // Include a dollar sign in the ticks
            callback: function(value, index, ticks) {
                if(value > 1000){
                    return Math.round(value/1000) + 'k'
                }
                return value;
            }
        }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
}