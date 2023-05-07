import * as React from 'react';
import { useEffect, useState,useRef } from "react"
import { Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Search from './components/Search/search';
import Sort from './components/Search/sort';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'supplierId', headerName: 'Supplier Id', width: 130 },
  { field: 'categoryId', headerName: 'categoryvId', width: 130 },
  { field: 'quantityPerUnit', headerName: 'quantityvPerUnit', width: 130 },
  { field: 'unitPrice', headerName: 'unit Price', width: 130 },

];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },

];



export default function DataTable() {

  const [posts, setPosts] = useState([])
  const storage=useRef([])

  useEffect(() => {
    fetch('https://northwind.vercel.app/api/products')
      .then(res => res.json())
      .then(data => {
        setPosts(data)
        storage.current=data
      })
  }, [])


  return (
    <>
   
   <div>
   <Search storage={storage} setPosts={setPosts}/>
    {/* <Sort  posts={posts} setSort={setPosts}/> */}
   </div>
   
    <TableContainer component={Paper}>
     
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name<Sort posts={posts} setPosts={setPosts}/></TableCell>
            <TableCell align="right">unitPrice</TableCell>
            <TableCell align="right">Supplier Id</TableCell>
            <TableCell align="right">quantityPerUnit</TableCell>
            <TableCell align="right">unitsInStock</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow
              key={post.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{post.id}</TableCell>
              <TableCell component="th" scope="row">{post.name}</TableCell>
              <TableCell align="right">{post.unitPrice}</TableCell>
              <TableCell align="right">{post.supplierId}</TableCell>
              <TableCell align="right">{post.quantityPerUnit}</TableCell>
              <TableCell align="right">{post.unitsInStock}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>




  );
}