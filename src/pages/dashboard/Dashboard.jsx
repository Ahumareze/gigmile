import React from 'react';

//styles
import classes from './dashboard.module.css';

//containers
import { Navigation } from '../../containers';

//components
import { CaptainsTable, Chart, Header } from '../../components';

function Dashboard() {
    return (
        <Navigation>
            <Header />
            <section>
                <Chart />
                <CaptainsTable />
            </section>
        </Navigation>
    );
}

export default Dashboard;