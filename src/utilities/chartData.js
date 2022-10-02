export const barChartData = {
    labels: ['Repair Advance', 'Fuel Advance', 'Salary Advance'],
    datasets: [
        {
          id: 1,
          label: 'Total Req Val',
          data: [40579, 20145, 16940],
          backgroundColor: '#1DB385',
          borderColor: 'rgba(29, 179, 133, 0.1)',
          borderWidth: 3
        },
    ],
};

export const pieChartData = {
  labels: ['Completed Services', 'Pending Services', 'Active Services', 'Cancled Services'],
    datasets: [
        {
          id: 1,
          label: 'Total Req Val',
          data: [150, 209, 100, 72],
          backgroundColor: [
            '#3285FF',
            'rgb(219, 219, 0)',
            '#1DB385',
            '#FB6654',
          ],
          cutout: '80%'
        },
    ],
};

export const pieOptions = {
  plugins: {
    legend: {
      display: false
    }
  }
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