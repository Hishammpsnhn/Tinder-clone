import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@mui/icons-material/Forum';


function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize="large" className='header_icon' />
      </IconButton>
      <img className='header_logo' src='https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png' alt='image' />
      <IconButton>
      <ForumIcon  fontSize="large" className='header_icon'/>
      </IconButton>
    </div>
  )
}

export default Header