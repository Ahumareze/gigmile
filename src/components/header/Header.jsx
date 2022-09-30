import React from 'react';

//styles
import classes from './header.module.css';

//icons
import { FiSearch, FiEdit, FiChevronDown } from 'react-icons/fi';
import Bell from '../../assets/icons/Bell_pin.png';

//images
import user from '../../assets/users/base.png';

function Header(props) {
    const search = (
        <div className={classes.searchBar}>
            <FiSearch size={16} color='#474F54' />
            <input placeholder='Search' />
        </div>
    );

    const accountDropDown = (
        <div className={classes.accountDropDown}>
            <img src={user} alt='account' />
            <FiChevronDown size={16} />
        </div>
    );

    return (
        <div className={classes.header}>
            <p className={classes.welcome}>Hello, Michael 👋🏽</p>
            <div className={classes.header_rightItems}>
                {search}
                <img src={Bell} alt='Bell' className={classes.headerIcon} />
                <FiEdit color='#474F54' className={classes.headerIcon} />
                {accountDropDown}
            </div>
        </div>
    );
}

export default Header;