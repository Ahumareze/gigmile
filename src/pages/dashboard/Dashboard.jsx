import React from 'react';

//styles
import classes from './dashboard.module.css';

//containers
import { Navigation } from '../../containers';

//components
import { BarChartDataBox, CaptainsTable, Header, PieChartDataBox, RequestValue } from '../../components';

function Dashboard() {
    return (
        <Navigation>
            <Header />
            <section>
                <div className={classes.top}>
                    <BarChartDataBox />
                    <RequestValue />
                    <PieChartDataBox />
                </div>
                <CaptainsTable />
            </section>
        </Navigation>
    );
}

export default Dashboard;