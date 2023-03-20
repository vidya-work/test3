import './home.css';
import image from '../../assets/Ellipse 38.png';
import image2 from '../../assets/Rectangle 1525.png';
import TextField from '@mui/material/TextField';
import React, { useState} from 'react';
function Home(){
  const [name, setName]= useState("asdf")
  const [password, setPassword]= useState(123456)
  function Name(){
    console.log(name, password)
  }
 return(
   <>
   <div className={'body'}>
   <div className={'row'}>
   <div className={'col-6'}>
    <div className={'card'}>
        <img className={'img1'} src={image}></img>
        <h1 className={'h1'}>Log In</h1>
        <TextField className={'a'} id="outlined-basic" label="Username" value={name} variant="outlined" onChange={e => setName(e.target.value)} />
        <TextField className={'a'} id="outlined-basic" label="Password" value={password} variant="outlined"  onChange={e => setPassword(e.target.value)}/>
        <button className={'button'} onClick={() => Name()}>  Log In</button>
        <p className={'b'}>© All rights reserved by Zipper</p>
    </div>
    </div>
    <div className={'col-6'}>
      <div className={'card2'}>
   <img className={'img2'} src={image2}></img>
    </div>
    </div>
</div>
</div>
   </>
 )
}
export default Home;