import React from 'react';

//styles
import classes from './navigation.module.css';

//components
import { Sidebar } from '../../components'

function Navigation(props) {
    return (
        <div className={classes.container}>
            <Sidebar />
        </div>
    );
}

export default Navigation;