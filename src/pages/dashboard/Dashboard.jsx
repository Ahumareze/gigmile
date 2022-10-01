import React from 'react';

//styles
import classes from './dashboard.module.css';

//containers
import { Navigation } from '../../containers';

//components
import { CaptainsTable, Header } from '../../components';

function Dashboard() {
    return (
        <Navigation>
            <Header />
            <section>
                <CaptainsTable />
            </section>
        </Navigation>
    );
}

export default Dashboard;