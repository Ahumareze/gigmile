import React from 'react';

//styles
import classes from './dataBox.module.css';

//chart libaries
import { Doughnut } from 'react-chartjs-2';
// import {Chart as ChartJS} from 'chart.js/auto';

//data
import { pieChartData, pieOptions } from '../../utilities/chartData';

function PieChartDataBox(props) {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.title}>
                    <p>Service Request Breakdown</p>
                </div>
                <div className={classes.extraDetails}>
                    <p>Total Working Capital Request so far</p>
                </div>
            </div>
            <div className={classes.main}>
                <div className={classes.mainDoughnutContainer}>
                <div className={classes.DoughnutContainer}>
                <Doughnut data={pieChartData} options={pieOptions} />
                </div>
                </div>
                
            </div>
        </div>
    );
}

export default PieChartDataBox;