import React, { useEffect, useState } from 'react'

const Search = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState("");
  useEffect(()=>{
    fetch('http://192.168.140.238:5001/api')
    .then(res => res.json())
    .then(Data => setData(Data))
  }, [])
  return (
    <div color='white' style={{color: 'white'}}>
        <input type='text' onChange={(e)=>setText(e.target.value)}/> 
        {!data?"loading": <></>}
    </div>
  )
}

export default Search