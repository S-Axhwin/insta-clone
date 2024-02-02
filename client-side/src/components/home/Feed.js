import { Avatar, Icon, IconButton } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import React, { useEffect } from 'react'
import './feed.css'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Button from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ACTIONS } from './Home';
const Feed = ({fullData,  dispatch, refer}) => {
  useEffect(()=>{

    const image = document.getElementById('image')
    image.addEventListener('error', (e)=>{
      e.preventDefault();
      image.src = "http://via.placeholder.com/640x360";
      image.alt = "default"
    })
  })

  return (
    <>
    {
      !fullData?"loading":
    <div className='feed'>
      <div className='holder'>
        <div className='id-holder'>
        <Avatar className='logo' sx={{width: '4rem', height: '4rem'}} >{fullData.user[0]}
        </Avatar>
        <div className='id'>
          <h3>{fullData.user}</h3>
        </div>
        </div>
      </div>
      <div className='post'>

        <img className={`img ${fullData.post ? '': 'waiting'}`} src={fullData.post} id='image'  alt=''/>
      </div>
      <div className='reactions'>
        <div className='reaction' style={{alignItems: 'center'}}>
        <button style={{backgroundColor: 'transparent', border: 'none'}} onClick={()=>{ dispatch({type: ACTIONS.LIKE, payload: {id: fullData.id}})}}> 
          {!fullData.liked?<FavoriteBorderIcon sx={{color: 'white', transition: "ease all 3s"}} />: <FavoriteIcon sx={{color: 'red'}}></FavoriteIcon>}
          </button>
          <ChatBubbleOutlineIcon sx={{color:'white'}}  />
        </div>
        <div className=''>
          <button style={{backgroundColor: 'transparent', border: 'none', padding: '1rem'}} onClick={()=>{dispatch({type: ACTIONS.SAVE, payload: {id: fullData.id} })}} > 
          
            {!fullData.saved ? <BookmarkBorderIcon sx={{color: 'white'}} ></BookmarkBorderIcon >: <BookmarkIcon sx={{color: 'white'}}></BookmarkIcon>}
        
          </button>
        </div>

      </div>
    </div>
    }
    </>
  )
}

export default Feed