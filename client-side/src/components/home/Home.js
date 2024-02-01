import React, { useEffect, useState, useReducer } from 'react'
import './home.css'
import Feed from './Feed'
import CancelIcon from '@mui/icons-material/Cancel';

export const ACTIONS = {
  SAVE: 'save',
  LIKE: 'like',

}

const Home = ({search, setSearch}) => {
  const [toBeSearched, settoBeSearched] = useState("")
  const [state, dispatch] = useReducer(reduce, [])
  useEffect(()=>{
    fetch('http://192.168.140.238:5001/api')
    .then(res => res.json())
    .then(data =>
       {
        dispatch({type: 'fetch', payload: {data: data}})
      })
  }, [])

  function reduce(state, action){
    switch (action.type){
      case ACTIONS.LIKE :
        return (state.map(data=>{
          if(data.id === action.payload.id){
            return {...data, liked: !data.liked}
          }else{
            return data;
          }
        })
      )
      case ACTIONS.SAVE:
        return (state.map(data=>{
          if(data.id===action.payload.id){
            return {...data, saved: !data.saved}
          }
          return data;
        }))
      case "fetch":
        return action.payload.data
    }

  }
  return (
    <div className='nothing'>
      <div className={`inp-container ${search?'':'hidden'}`}>
        <input type='text'  onChange={(e)=>{settoBeSearched(e.target.value)}}/>
        <button onClick={()=>{setSearch(!search); settoBeSearched("")}} style={{backgroundColor: 'transparent', border: 'none'}}>
          <CancelIcon color='white' sx={{color: 'white'}}/>
        </button>
      </div>
    {state?state.filter((data)=>{
          let name = data.user.toLowerCase()
          let searchConst = (toBeSearched.toLowerCase());
          return searchConst == '' ? data : name.includes(searchConst);
    }).map(data=>{
      
      return <Feed fullData={data} key={data.id}  dispatch={dispatch}/>
    }): "loading"}
    </div>
  )
}
export default Home;