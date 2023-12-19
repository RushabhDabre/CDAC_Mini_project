import React from "react";
import { useState } from "react";

export default function Login(){
    const[Username,setUsername]=useState('');
    const[Password,setPassword]=useState('');

    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(Username);
    }

    return (
      <>
        <div className="container d-flex card">
          <form>
          <br/><br/>
            <label>Username</label>
            <input value={Username} onChange={(e)=>{setUsername(e.target.value)}}  placeholder="youremail@gmail.com" type="text"></input><br/><br/>
            <label>Password</label>
            <input value={Password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="***********" type="text"></input>
            <br/>
            <input type="button" value="Login"></input>
            <input type="button" value="/Register"></input>
          </form>
        </div>
      </>
    );
}