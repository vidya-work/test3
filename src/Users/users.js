import styles from './users.module.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Header from '../component/header';
import Sidebar from "../component/sidebar";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search'; 
import React, { useState, useEffect } from 'react';
import Deleted from './deleted';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
function User(){
  const[data, setData] = useState([])
  const [getopen, setgetopen] =useState(false); // state for delete popup open and close
  const [deleterow, setdeleterow] = useState(-1); // state for deleting index
  const [searchdata, setSearchdata] = useState("");

  const navigate = useNavigate();
  function handleClickEdit(id) {

    navigate('/user/edit/'+id);
  }
function handleClickAdd(){
  navigate('/user/add')
}
    const StyledTableRow = styled(TableRow)(({ theme }) => ({ // style for table
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));
    
    function Data(){
      fetch(process.env.REACT_APP_API_URL+'/user' , {
        method:'GET', // API for user listing
        headers: new Headers({'content-type': 'application/json'}),
      })
      .then((res)=>res.json())
    .then((json)=>{
      console.log(json)
      setData(json)
    })
    
  }
  useEffect(()=>{
    Data()
  },[])
  const handleClickDelete = (index) => { 
    if (index?.index !== undefined) {
      fetch('http://localhost:4000/user/'+ index.index , {
      method:'DELETE', // API for delete index  
      headers: new Headers({'content-type': 'application/json'}),
    })
    .then((res)=>res.json())
  .then((json)=>{
    console.log(json)
    console.log(index)
  })
  Data()
    }
    setgetopen(false);
    setdeleterow(-1)
  };
  const handleClick = (_id) => { 
    setdeleterow(_id)
    setgetopen(true)
    
   };
    
    return(
        <>
<div className={styles.body}>        
<div className={'row'}>
        <Header/>
    </div>
   <div className={'row'}>
   <div className={'col-2'}>
        <Sidebar/>
    </div>
    <div className={'col-10'}> 
    <TextField className={styles.TextField} label="Search" variant="outlined" onChange={e => setSearchdata(e.target.value)}
 InputProps={{
   startAdornment: (
          <SearchIcon />
    )
  }}
/>  
  <div className={styled.addbox}><AddIcon onClick={(e)=>(handleClickAdd())}/></div>

   <TableContainer className={styles.container} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className={styles.a}>
          <TableRow className={styles.c}>
            <TableCell className={styles.cell} align="right">Name</TableCell>
            <TableCell className={styles.cell} align="right">BirthDate</TableCell>
            <TableCell className={styles.cell} align="right">Age</TableCell>
            <TableCell className={styles.cell} align="right">Email</TableCell>
            <TableCell className={styles.cell} align="right">Mobile</TableCell>
            <TableCell className={styles.cell} align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data.filter(row => row.name.toLowerCase().includes(searchdata.toLowerCase()) || row.age.toString().includes(searchdata)).map((row, index) => (
            <StyledTableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell className={styles.b}align="right">{row.name}</TableCell>
              <TableCell className={styles.b}align="right">{row.birthdate}</TableCell>
              <TableCell className={styles.b}align="right">{row.age}</TableCell>
              <TableCell className={styles.b}align="right">{row.email}</TableCell>
              <TableCell className={styles.b}align="right">{row.mobile}</TableCell>
              <TableCell className={styles.b}align="right" ><EditIcon onClick={(e)=>{(handleClickEdit(row._id))}}/> <DeleteIcon onClick={(e) =>{ handleClick (row._id)}}/></TableCell>
              
            </StyledTableRow>
          ))}          
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <Deleted open={getopen} handleClickDelete={handleClickDelete} deleterow={deleterow}/>
</div>
</div>
        </>
    )
}
export default User;