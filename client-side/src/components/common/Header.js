import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import './header.css';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';

const Header = ({setSearch, search}) => {
  return (
   <>
    <nav>
        <h2>Insta Clone</h2>
        
        <ul>
            <button onClick={()=>setSearch(!search)}>search</button>
            <Link to={'/profile'}> <FavoriteIcon/> </Link>
            <Link to={'/profile'}> <MapsUgcIcon/> </Link>
        </ul>
    </nav>
   </>
  )
}

export default Header