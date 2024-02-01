import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import './footer.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <nav className='footer-nav'>
        <Link to='/'> 
          <HomeIcon></HomeIcon>
        </Link>
        <Link to={'/task'}>
          <AddCircleOutlineIcon/>
        </Link>
        <Link to={'/profile'}>
        <PersonIcon></PersonIcon>
        </Link>
    </nav>
  )
}

export default Footer