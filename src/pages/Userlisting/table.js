import styles from './table.module.css';
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import React, { useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Form from './form';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Delete from './delete';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function CreateData(Name, BirthDate ,Age,Email, Mobile, Actions ){ 
return {Name, BirthDate ,Age,Email, Mobile, Actions};
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
const rows = [
   CreateData("Vidya", "28/02/1999", 24, "abc@gmail.com", 1234567890), // data for rows
   CreateData("Pankaj", "04/07/1996", 26, "hjk@gmail.com", 9876543210),
]
 export default function TableView(){
    const [open, setOpen]=useState(false); // state for add and edit popup open and close
    const [data, setdata] = useState(rows); // state for table listing
    const [edit, setedit] = useState(null); // state for edit data and edit index
    const [getopen, setgetopen] =useState(false); // state for delete popup open and close
    const [deleterow, setdeleterow] = useState(-1); // state for deleting index
    const [searchdata, setSearchdata] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    console.log (location)
    useEffect(() => {
     if (location.state) {
      setdata([...data, CreateData(location.state.name, location.state.BirthDate, location.state.age, location.state.email, location.state.mobile, )])
     }
    },[]);
    useEffect(() => {
      console.log(searchdata)
    }, [searchdata])
    
    // fun for add popup open
    const handleClickOpen = () => {
      setOpen (true);
    };

    // fun for add popup close
    const handleClose = (newdata,) =>{
      if (newdata) { // condition for edit list data
        if (newdata?.index !== undefined){ // condition for update list data
          data[newdata.index]=CreateData(newdata.data.name, newdata.data.BirthDate, newdata.data.age, newdata.data.email, newdata.data.mobile, )
          console.log(data)
          setdata(data)
        }
        else{ // condition for add new row
        setdata([...data, CreateData(newdata.name, newdata.BirthDate, newdata.age, newdata.email, newdata.mobile, )])
        }
      }
      setOpen(false);
      console.log(newdata)
      setedit(null)
    };

    // fun for delete row
    const handleClickDelete = (index) => { 
      if (index?.index !== undefined) {
        data.splice(index.index, 1); // remove an index from array
        setdata([...data]) // data after remove index 
        console.log(index)
      }
      setgetopen(false);
      setdeleterow(-1)
    };

    // fun for edit popup open and data store in state (for edit)
    const handleClickEdit =(row, index) => {
      console.log(row, index)
      setedit({data:row, index:index}) // store new data in state edit
      setOpen(true) // state for edit popup open
    }

    // fun for delete popup open
   const handleClick = (index) => { 
    setdeleterow(index)
    setgetopen(true)
    
   };

   // fun for delete popup close
  
  return (
    <>
    <Button variant="outlined" onClick={handleClickOpen}> 
        Subscribe
      </Button>
<div className={styles.body}>
      <TextField className={styles.TextField} label="Search" variant="outlined" onChange={e => setSearchdata(e.target.value)}
 InputProps={{
    startAdornment: (
      <InputAdornment >
          <SearchIcon />
      </InputAdornment>
    )
  }}
/>

  <button className={styles.button1}>Search</button>
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
        {data.filter(row => row.Name.toLowerCase().includes(searchdata.toLowerCase()) || row.Age.toString().includes(searchdata)).map((row, index) => (
            <StyledTableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell className={styles.b}align="right">{row.Name}</TableCell>
              <TableCell className={styles.b}align="right">{row.BirthDate}</TableCell>
              <TableCell className={styles.b}align="right">{row.Age}</TableCell>
              <TableCell className={styles.b}align="right">{row.Email}</TableCell>
              <TableCell className={styles.b}align="right">{row.Mobile}</TableCell>
              <TableCell className={styles.b}align="right" ><EditIcon onClick={(e) => {handleClickEdit(row,index); }}/> <DeleteIcon onClick={(e) =>{ handleClick (index)}}/></TableCell>
              
            </StyledTableRow>
          ))}          
        </TableBody>
      </Table>
    </TableContainer>
    <button className={styles.button2}>Export to Exel</button>
    <button className={styles.button3}>Send Message</button>
    <button onClick={() => {navigate('/next')}}>Next</button>
    </div>
    {open ? <Form open={open} handleClose={handleClose} edit={edit}/> : ''}
    <Delete open={getopen} handleClickDelete={handleClickDelete} deleterow={deleterow}/>
    </>
    );
};

// https://vidya-work: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1@github.com/vidya-work/test3.git?