import React from 'react';

//styles
import classes from './dataBox.module.css';

//icons
import icon from '../../assets/icons/barchart.png';
import users from '../../assets/icons/twoUser.png';

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
                <div className={classes.mainChart}></div>
            </div>
        </div>
    );
}

export default BarChartDataBox;