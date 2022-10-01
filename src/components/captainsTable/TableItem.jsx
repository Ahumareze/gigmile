import React from 'react';

//styles
import classes from './captainsTable.module.css';

//icons
import {FiMoreVertical} from 'react-icons/fi';

function TableItem(props) {
    return (
        <div className={classes.TableItem}>
            <div className={classes.TableItemUser}>
                <div className={classes.profile}>AR</div>
                <p>Alan Richard Michaelson</p>
            </div>
            <p className={classes.TableItemAmount}>Fuel Advance</p>
            <p className={classes.TableItemAmount}>N 1,090,890.00</p>
            <p className={classes.TableItemAmount}>N 1,090,890.00</p>
            <div className={classes.dotsContainer}>
                <FiMoreVertical />
            </div>
        </div>
    );
}

export default TableItem;