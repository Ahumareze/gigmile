import React from 'react';

//styles
import classes from './navigation.module.css';

//components
import { Sidebar } from '../../components'

function Navigation({children, activeLink}) {
    return (
        <div className={classes.container}>
            <Sidebar activeLink={activeLink} />
            <div className={classes.main}>
                {children}
            </div>
        </div>
    );
}

export default Navigation;