import React, { useState } from 'react';

//styles
import classes from './captainsTable.module.css';

//icons
import {FiMoreVertical} from 'react-icons/fi';

function TableItem(props) {
    const [showDots, setShowDots] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);

    const mouseLeaveFunction = () => {
        setShowDropDown(false);
        setShowDots(false)
    }

    return (
        <div className={classes.TableItem} onMouseEnter={() => setShowDots(true)} onMouseLeave={() => mouseLeaveFunction()}>
            <div className={classes.TableItemUser}>
                <div className={classes.profile}>AR</div>
                <p>Alan Richard Michaelson</p>
            </div>
            <p className={classes.TableItemAmount}>Fuel Advance</p>
            <p className={classes.TableItemAmount}>N 1,090,890.00</p>
            <p className={classes.TableItemAmount}>N 1,090,890.00</p>

            <div className={classes.dotsContainer}>
                {showDots && <FiMoreVertical onClick={() => setShowDropDown(prev => !prev)} />}
                {showDropDown && <div className={classes.dropDownContent}> View more details </div>}
            </div>
        </div>
    );
}

export default TableItem;