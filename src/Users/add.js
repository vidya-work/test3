import React, { useState, useEffect, useCallback } from 'react';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import styles from './add.module.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export default function Add(){
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const navigate = useNavigate();
  let param = useParams();
  console.log(param)
  function handleClick() {
  if (param.id){
    fetch(process.env.REACT_APP_API_URL+'/user/'+ param.id , {
      method:'PATCH', // API for user listing
      body: JSON.stringify({name, age, email, mobile, birthdate}),

      headers: new Headers({'content-type': 'application/json'}),
    })
    .then((res)=>res.json())
  .then((json)=>{
    console.log(json);
  navigate('/users');

  })
}
  else{
    fetch(process.env.REACT_APP_API_URL+'/user' , {
      method:'POST', // API for user listing
      body: JSON.stringify({name, age, email, mobile, birthdate}),

      headers: new Headers({'content-type': 'application/json'}),
    })
    .then((res)=>res.json())
  .then((json)=>{
    console.log(json);
    navigate('/users');

  })
  }
  }

const getData = useCallback(
  ()=>{
    fetch(process.env.REACT_APP_API_URL+'/user/'+ param.id, {
      method:'GET', // API for getById
      headers: new Headers({'content-type': 'application/json'}),
    })
    .then((res)=>res.json())
  .then((json)=>{
    console.log(json);
    setAge(json.age);
    setBirthdate(json.birthdate);
    setEmail(json.email);
    setMobile(json.mobile);
    setName(json.name);
  })
  },
 
  [param.id]
)

useEffect(()=>{
  if(param.id){

    getData()
  }
  return 
},[param.id, getData]) 

    return(
        <>
        <div className={styles.body}>
        <div className={styles.form}>
          <TextField className={styles.text} value={name} label="Name" onChange={(e)=> setName(e.target.value)} ></TextField>
          <TextField className={styles.text} value={birthdate} label="Birthdate" onChange={(e)=> setBirthdate(e.target.value)}></TextField>
          <TextField className={styles.text} value={email} label="Email" onChange={(e)=> setEmail(e.target.value)}></TextField>
          <TextField className={styles.text} value={mobile} label="Mobile" onChange={(e)=> setMobile(e.target.value)}></TextField>
          <TextField className={styles.text} value={age} label="Age" onChange={(e)=> setAge(e.target.value)}></TextField>
    </div>
    <div>
    <Button className={styles.button}>Cancel</Button>
    <Button className={styles.button} onClick = {() => {handleClick()}} >Submit</Button>

          </div>
          </div>
        </>
    )
}
