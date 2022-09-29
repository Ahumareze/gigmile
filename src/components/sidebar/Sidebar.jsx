import React from 'react';

//styles
import classes from './sidebar.module.css';

//images
import logo from '../../assets/logo/logo.png';
import base from '../../assets/users/base.png';

//data
import links from '../../utilities/links';

const UserAccount = () => {
    return(
        <div className={classes.UserAccount}>
            <img src={base} alt='user_img' />
            <div className={classes.UserAccountDetails}>
                <p className={classes.UserAccountName}>Michael Essien</p>
                <p className={classes.position}>Administrator</p>
            </div>
        </div>
    )
};

const NavLink = ({icon, title, to, extraLinks}) => {

    let LinkItem = (
        <div className={classes.NavLink}>
            <img alt='icon' src={icon} className={classes.NavIcon} />
            <p>{title}</p>
        </div>
    );

    if(extraLinks){
        LinkItem = (
            <div className={classes.NavLink2}>
                <img alt='icon' src={icon} className={classes.NavIcon} />
                <p>{title}</p>
                <div className={classes.showExtraButton}>

                </div>
            </div>
        )
    };

    return(
        <>
            {LinkItem}
        </>
    )
}

const Sidebar = (props) => {
    return (
        <div className={classes.container}>
            <img className={classes.logo} src={logo} alt='logo' />
            <UserAccount />
            <div className={classes.NavLinksContainer}>
                {links.map((i, idx) => (
                    <NavLink icon={i.icon} title={i.title} extraLinks={i.extraLinks} />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;