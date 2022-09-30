import React, { useState } from 'react';

//styles
import classes from './sidebar.module.css';

//images
import logo from '../../assets/logo/logo.png';
import base from '../../assets/users/base.png';

//icons
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

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
    //state incharge of rendering links
    const [showExtraLinks, setShowExtraLinks] = useState(false);
    const [renderLinks, setRenderLinks] = useState([]);

    let LinkItem = (
        <div className={classes.NavLink}>
            <img alt='icon' src={icon} className={classes.NavIcon} />
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
                <div className={classes.NavLink2} onClick={toggleLinks} >
                    <img alt='icon' src={icon} className={classes.NavIcon} />
                    <p>{title}</p>
                    <div className={classes.showExtraButton}>
                        {showExtraLinks ? <FiChevronDown /> : <FiChevronUp />}
                    </div>
                </div>

                {renderLinks.map((i, idx) => (
                    <div className={classes.NavLink3} key={idx}>
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

const Sidebar = (props) => {
    return (
        <div className={classes.container}>
            <img className={classes.logo} src={logo} alt='logo' />
            <UserAccount />
            <div className={classes.NavLinksContainer}>
                {links.map((i, idx) => (
                    <NavLink icon={i.icon} title={i.title} extraLinks={i.extraLinks} key={idx} />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;