import React, { useState, useEffect, useRef } from "react";
import {  useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function UserLogin({ onLoginSuccess }){
    const [isVisible, setVisible] = useState(true);
    const ref = useRef(null) //used for Loading Bar
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    let navigate = useNavigate();

    useEffect(()=>{
        console.log('Setting item in localStorage:', email);
        localStorage.setItem('email',email);
    },[email])

    const handleLogin=(e)=>{
        //default behavior submit - cancelling
        e.preventDefault();
        const reqOptions = {
            method:"post",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({ email, password })
        }

        fetch("http://localhost:9000/userLogin",reqOptions)
        .then(res=>res.text())
        .then(str=>{
            setMsg(str);
            if (str === "Login successful") {
                // Redirect to the login page
                onLoginSuccess();
                ref.current.complete();
                setTimeout(() => navigate("/home"), 500);
            }else {
                setVisible(false)
                setTimeout(() => setVisible(true), 2000);
            }
        })
    }

    return (
        <div className="container d-flex justify-content-center ">
            <LoadingBar color="#f11946" ref={ref} shadow={true} />
            <div className="shadow-lg p-4 m-5" style={{"width": '25rem'}}>
                <h1 className="d-flex justify-content-center text-success mb-3">Please Login!</h1>      
                <div className={`border border-danger mb-2 ${isVisible ? 'd-none' : ''} d-flex justify-content-center`}><strong className="text-danger">{msg}</strong></div>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">   
                        <input  type="email" placeholder="Email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">   
                        <input  type="password" placeholder="Password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="row g-3 align-items-center d-flex justify-content-center mb-3">
                        <div className="col-auto ">
                            <button type="submit" className="btn btn-success w-100 font-weight-bold mt-2" onClick={handleLogin}>Login</button>
                        </div>
                        <div className="col-auto">
                            <button type="button" className="btn btn-secondary w-100 font-weight-bold mt-2" onClick={()=>{navigate("/")}} >Cancel</button>
                        </div>
                    </div>
                    <div className="text-center mb-3">
                        <p>Not a member? <a href="/register">Register</a></p>
                    </div>
                    <div className="text-center">
                        {/* <text className="text-danger">{msg}</text> */}
                    </div>
                </form>    
            </div> 
        </div>  
    )
}