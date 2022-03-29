import react from 'react';
import ReplyIcon from '@mui/icons-material/Reply';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashlightOnIcon from '@mui/icons-material/FlashlightOn';
import IconButton from '@mui/material/IconButton';

import classes from './SwipeButtons.module.css';

function SwipeButtons(){
    return(
        <div className={classes.swipeButtons}>
            <IconButton className={classes.swipeButtons__repeat}>
                <ReplyIcon size='large' />
            </IconButton>
            <IconButton className={classes.swipeButtons__left}>
                <CloseIcon size='large' />
            </IconButton>
            <IconButton className={classes.swipeButtons__star}>
                <StarRateIcon size='large' />
            </IconButton>
            <IconButton className={classes.swipeButtons__right}>
                <FavoriteIcon size='large' />
            </IconButton>
            <IconButton className={classes.swipeButtons__lightning}>
                <FlashlightOnIcon size='large' />
            </IconButton>
        </div>
    );
}

export default SwipeButtons;