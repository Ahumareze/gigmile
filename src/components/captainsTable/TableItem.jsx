import React, { useEffect, useState } from 'react';

//styles
import classes from './captainsTable.module.css';

//icons
import {FiMoreVertical} from 'react-icons/fi';

function TableItem({name, workingCapital, totalReqVal, balance}) {
    const [showDots, setShowDots] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);

    //profile abbr
    const [profileAbb, setProfileAbb] = useState('');

    useEffect(() => {
        const matches = name.match(/\b(\w)/g); // ['J','S','O','N']
        const acronym = matches.join(''); // JSON

        setProfileAbb(acronym.slice(0, 2))
    }, [])

    const mouseLeaveFunction = () => {
        setShowDropDown(false);
        setShowDots(false)
    }

    return (
        <div className={classes.TableItem} onMouseEnter={() => setShowDots(true)} onMouseLeave={() => mouseLeaveFunction()}>
            <div className={classes.TableItemUser}>
                <div className={classes.profile}>{profileAbb}</div>
                <p>{name}</p>
            </div>
            <p className={classes.TableItemAmount}>{workingCapital}</p>
            <p className={classes.TableItemAmount}>N {totalReqVal.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
            <p className={classes.TableItemAmount}>N {balance.toLocaleString(undefined, {minimumFractionDigits: 2})}</p>

            <div className={classes.dotsContainer}>
                {showDots && <FiMoreVertical onClick={() => setShowDropDown(prev => !prev)} />}
                {showDropDown && <div className={classes.dropDownContent}> View more details </div>}
            </div>
        </div>
    );
}

export default TableItem;