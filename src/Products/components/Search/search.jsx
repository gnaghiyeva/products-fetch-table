import { TextField } from '@mui/material'
import React, { useState } from 'react'


const Search = ({storage,setPosts}) => {
  let [filterItem,setFilterItem] = useState([])

  function handleChange(e){
    console.log(storage.current.filter(x=>x.name.includes(e.target.value))) 
    setPosts(storage.current.filter(x=>x.name. toLowerCase().trim().includes(e.target.value.toLowerCase().trim()))); 
  }
 
  return (
    <>
        <TextField onChange={(e)=>handleChange(e)} id="outlined-basic" label="search items" variant="outlined" />
    </>
  )
}

export default Search