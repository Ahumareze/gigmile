import React from 'react';

//styles
import classes from './captainsTable.module.css';

//icons
import { FiSearch, FiFilter } from 'react-icons/fi';

const TableItem = ({name, selected}) => {
    let item = (
        <div className={classes.headerItem}>
            <div className={classes.mainHeaderItem}>
                <p>{name}</p>
            </div>
            <div className={classes.headerItemLine2} />
        </div>
    )
    if(selected === name){
        item = (
            <div className={classes.headerItem}>
                <div className={classes.mainHeaderItem}>
                    <p className={classes.activeText}>{name}</p>
                </div>
                <div className={classes.headerItemLine} />
            </div>
        )
    }
    return(
        <>
            {item}
        </>
    )
}

function CaptainsTable(props) {
    
    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <p className={classes.title}>Gigmile Captains on Working Capital Service Requests</p>
                <div className={classes.filterSearch}>
                    <div className={classes.searchBar}>
                        <input placeholder='Search captains, services...' />
                        <div className={classes.searchBarIcon}> <FiSearch /> </div>
                    </div>
                    <div className={classes.filter}>
                        <p>Filter</p>
                        <FiFilter size={13} />
                    </div>
                </div>
            </div>

            <div className={classes.table}>
                <div className={classes.tableHeader}>
                    <TableItem name={'Active'} />
                    <TableItem name={'Pending'} selected={'Pending'} />
                    <TableItem name={'Completed'} />
                    <TableItem name={'Declined'} />
                </div>
            </div>
        </div>
    );
}

export default CaptainsTable;