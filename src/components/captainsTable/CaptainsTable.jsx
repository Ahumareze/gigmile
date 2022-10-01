import React, { useState } from 'react';

//styles
import classes from './captainsTable.module.css';

//icons
import { FiSearch, FiFilter } from 'react-icons/fi';

//component
import TableItem from './TableItem';
import tableHeaders from '../../utilities/tableHeaders';

const TableHeaderItem = ({name, selected, onClick}) => {
    let item = (
        <div className={classes.headerItem} onClick={onClick}>
            <div className={classes.mainHeaderItem}>
                <p>{name}</p>
            </div>
            <div className={classes.headerItemLine2} />
        </div>
    )
    if(selected === name){
        item = (
            <div className={classes.headerItem} onClick={onClick}>
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
    const [active, setActive] = useState('Active')
    
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
                    
                    {tableHeaders.map((i, idx) => (
                        <TableHeaderItem name={i} selected={active} onClick={() => setActive(i)} />
                    ))}
                </div>
                <div className={classes.tableTitle}>
                    <p>Captains</p>
                    <p>Working Capital</p>
                    <p>Total Request Value</p>
                    <p>Total Balance</p>
                </div>
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
            </div>
        </div>
    );
}

export default CaptainsTable;