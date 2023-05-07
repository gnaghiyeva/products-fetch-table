// import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
// import React from 'react'

// const Sort = ({posts, setPosts}) => {
//     function handleSort(){
//         let sortedItems = posts.sort((a,b)=>{
//             a.name.localeCompare(b.name)
//             console.log([...sortedItems])
//             // setPosts(sortedItems)
//         })
//     }
//     return (
//         <>
//             <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
//                 <Select 
                    
//                     onChange={handleSort}
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     label="Age">
                
//                 <MenuItem value={'name'}>name</MenuItem>

//                 </Select>
//             </FormControl>
//         </>
//     )
// }

// export default Button


import { Button } from '@mui/material'
import React, { useState } from 'react'

const Sort = ({posts,setPosts}) => {
    const [desc,setDesc] = useState(true)

    const handleSort = ()=>{
        let sortedPosts
        if(desc){
            sortedPosts = posts.sort((a,b)=>a.name.localeCompare(b.name))
        }
        else{
            sortedPosts = posts.sort((a,b)=>b.name.localeCompare(a.name))
        }
        setPosts(...[setPosts])
        setDesc(!desc)
    }
  return (
    <button onClick={handleSort}>Sort</button>
  )
}

export default Sort