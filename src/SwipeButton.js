import React from 'react'
import './SwipeButton.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function SwipeButton() {
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButton_repeat'>
                <ReplayIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButonn_close'>
                <CloseIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButton_star'>
                <StarRateIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButton_fav'>
                <FavoriteIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButton_flash'>
                <FlashOnIcon fontSize='large' />
            </IconButton>

        </div>
    )
}

export default SwipeButton