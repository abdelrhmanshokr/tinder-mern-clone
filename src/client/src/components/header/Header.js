import react from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

import classes from './Header.module.css';

function Header(){
    return (
        <div className={classes.header}>
            {/* first the profile icon */}
            <IconButton>
                <AccountCircleIcon fontSize='large' className={classes.header__icon} />
            </IconButton>

            {/* then tinder image in the middle of the navbar */}
            <img 
                className={classes.header__logo}
                src='https://tinder.com/static/tinder.png'
                alt='Tinder Logo'
            />

            {/* finally the forum icon */}
            <IconButton>
                <ForumIcon fontSize='large' className={classes.header__icon}/>
            </IconButton>
        </div>
    );
}

export default Header;