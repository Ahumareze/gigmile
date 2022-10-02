import React from 'react';

//styles
import classes from './dataBox.module.css';

//icons
import icon from '../../assets/icons/barchart.png';
import statIcon from '../../assets/icons/up.png';

function RequestValue(props) {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.title}>
                    <div className={classes.iconContainer}> <img src={icon} alt='icon' /> </div>
                    <p>Total Request Value</p>
                </div>
                <div className={classes.extraDetails}>
                    <p>Overall Working Capital Request Value</p>
                </div>
            </div>
            <div className={classes.main}>
                <div className={classes.mainLabel}>
                    <p>Overall: <span>N 2,643,890.0</span></p>
                </div>
                <div className={classes.rv_contianer}>
                    <div className={classes.rv_main}>
                        <p className={classes.rv_p1}>Total paid back</p>
                        <p className={classes.rv_p2}>N 1,200,210.0</p>
                        <div className={classes.flex_stat}>
                            <img src={statIcon} alt='' />
                            <p className={classes.stat_number}>300,000.0</p>
                            <p className={classes.stat_title}>Increase this week</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RequestValue;