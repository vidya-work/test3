import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import styles from './next.module.css';
import { useNavigate, createSearchParams, Link } from 'react-router-dom';
import { Search } from '@mui/icons-material';

function Next() {
  const [name, setName] = useState('') // state for (edit data or empty string) 
  const [age, setAge] = useState('')  // state for (edit data or empty string) 
  const [mobile, setMobile] = useState('')  // state for (edit data or empty string) 
  const [email, setEmail] = useState('')  // state for (edit data or empty string) 
  const [BirthDate, setBirthDate] = useState('')  // state for (edit data or empty string) 
  const navigate = useNavigate();
  
  return (
    <>
    <div className={styles.body}>
        <div className={styles.form}>
          <TextField className={styles.text} label="Name" value={name} onChange={e => setName(e.target.value)}></TextField>
          <TextField className={styles.text} label="BirthDate" value={BirthDate} onChange={e => setBirthDate(e.target.value)} ></TextField>
          <TextField className={styles.text} label="Email" value={email} onChange={e => setEmail(e.target.value)} ></TextField>
          <TextField className={styles.text} label="Mobile" value={mobile} onChange={e => setMobile(e.target.value)}></TextField>
          <TextField className={styles.text} label="Age" value={age} onChange={e => setAge(e.target.value)} ></TextField>
    </div>
    <div>
          <Button className={styles.button} onClick={() => {}}>Cancel</Button>
          <Button className={styles.button} onClick= {() => {navigate("/table", {state:{name, age, mobile, email, BirthDate}})}}>Submit</Button>
          <Link 
          to="/table"
          state={{name, age, mobile, email, BirthDate}
        }></Link>
          </div>
          </div>
    </>
  )
}
export default Next;