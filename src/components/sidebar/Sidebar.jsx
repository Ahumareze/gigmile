import React, { useState } from 'react';

//styles
import classes from './sidebar.module.css';

//images
import logo from '../../assets/logo/logo.png';
import base from '../../assets/users/base.png';

//icons
import { FiChevronDown, FiChevronUp, FiLogOut } from 'react-icons/fi';

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

const NavLink = ({icon, title, to, extraLinks, active}) => {
    //state incharge of rendering links
    const [showExtraLinks, setShowExtraLinks] = useState(false);
    const [renderLinks, setRenderLinks] = useState([]);

    let LinkItem = (
        <div className={`${classes.NavLink} ${active && classes.activeNavLink}`}>
            {/* <img alt='icon' src={icon} className={classes.NavIcon} /> */}
            {icon}
            <p>{title}</p>
        </div>
    );
    
    const toggleLinks = () => {
        setShowExtraLinks(prev => !prev);

        if(renderLinks.length > 0){
            setRenderLinks([])
        }else{
            setRenderLinks(extraLinks)
        }
    }

    if(extraLinks){
        LinkItem = (
            <>
                <div className={`${classes.NavLink2} ${active && classes.activeNavLink}`} onClick={toggleLinks} >
                    <img alt='icon' src={icon} className={classes.NavIcon} />
                    <p>{title}</p>
                    <div className={classes.showExtraButton}>
                        {showExtraLinks ? <FiChevronDown /> : <FiChevronUp />}
                    </div>
                </div>

                {renderLinks.map((i, idx) => (
                    <div className={`${classes.NavLink3} ${active && classes.activeNavLink}`} key={idx}>
                        <img alt='icon' src={i.icon} className={classes.NavIcon} />
                        <p>{i.title}</p>
                    </div>
                ))}
            </>
        )
    };

    return(
        <>
            {LinkItem}
        </>
    )
}

const Sidebar = ({activeLink}) => {
    return (
        <div className={classes.container}>
            <div className={classes.padded_container}>
                <img className={classes.logo} src={logo} alt='logo' />
                <UserAccount />
                <div className={classes.NavLinksContainer}>
                    {links.map((i, idx) => (
                        <NavLink 
                            icon={i.icon} 
                            title={i.title} 
                            extraLinks={i.extraLinks} 
                            key={idx}
                            active={i.title === activeLink}
                        />
                    ))}
                    
                </div>
            </div>
            
            <div className={classes.logoutContainer}>
                <div className={classes.logout}>
                    <FiLogOut className={classes.logoutIcon} /> <p>Logout</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;