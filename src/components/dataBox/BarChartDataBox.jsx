import React, { useState } from 'react';

//styles
import classes from './dataBox.module.css';

//icons
import icon from '../../assets/icons/barchart.png';
import users from '../../assets/icons/twoUser.png';

//chart libaries
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

//data
import { barChartData, chartOptions } from '../../utilities/chartData';


function BarChartDataBox(props) {
    

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.title}>
                    <div className={classes.iconContainer}> <img src={icon} alt='icon' /> </div>
                    <p>Working Capital Service Request</p>
                </div>
                <div className={classes.extraDetails}>
                    <p>Ongoing Gigmile Working Capital Service Request</p>
                    <li>Last 30 days</li>
                </div>
            </div>
            <div className={classes.main}>
                <div className={classes.mainLabel}>
                    <img src={users} alt='' />
                    <p>Overall: <span>678,765</span></p>
                </div>
                <div className={classes.mainChart}>
                    <Bar data={barChartData}  options={chartOptions} />
                </div>
            </div>
        </div>
    );
}

export default BarChartDataBox;