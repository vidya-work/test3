import styles from './form.module.css';
import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
function Form({ open, handleClose, edit }) {
  console.log(edit, edit?.data?.Name)
  const [name, setName] = useState(edit?.data?.Name || '') // state for (edit data or empty string) 
  const [age, setAge] = useState(edit?.data?.Age || '')  // state for (edit data or empty string) 
  const [mobile, setMobile] = useState(edit?.data?.Mobile || '')  // state for (edit data or empty string) 
  const [email, setEmail] = useState(edit?.data?.Email || '')  // state for (edit data or empty string) 
  const [BirthDate, setBirthDate] = useState(edit?.data?.BirthDate || '')  // state for (edit data or empty string) 
  
  // fun for edit popup close
  const handleCloseEdit = () => {
    if (edit) { // condition for edit data on clicked row
      let y = { // object for data and index
        data: {name, age, email, mobile, BirthDate},
        index: edit.index,
      }
      console.log(y)
      handleClose(y) // close eddit popup with updated data
      
    }
    else { // condition for no change data on clicked row
      handleClose({ name, age, email, mobile, BirthDate }) // close popup with new data
    }
    console.log(name, age, email, mobile, BirthDate)
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose} edit={edit}>
        <DialogTitle>Addform</DialogTitle>
        <DialogContent>
          <TextField label="Name" value={name} onChange={e => setName(e.target.value)}></TextField>
          <TextField label="BirthDate" value={BirthDate} onChange={e => setBirthDate(e.target.value)} ></TextField>
          <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} ></TextField>
          <TextField label="Mobile" value={mobile} onChange={e => setMobile(e.target.value)}></TextField>
          <TextField label="Age" value={age} onChange={e => setAge(e.target.value)} ></TextField>

        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()}>Cancel</Button>
          <Button onClick={() => { handleCloseEdit() }} >Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
export default Form;