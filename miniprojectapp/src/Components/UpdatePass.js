import {useNavigate} from 'react-router-dom';
import React,{useState,useEffect} from 'react';

export default function UpdatePass(){
    let navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email,setEmail]=useState("");
    const [msg, setMsg] = useState("");
    
    useEffect(()=>{
        let str=localStorage.getItem('msg')
        setEmail(str)
    },[]);

    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const reqOptions ={
            method:"put",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({ msg, password })
        }
        fetch("http://localhost:9000/forgetPass",reqOptions)
        .then(res=>res.text())
        .then(str=>{
            setMsg(str);
            if (str === "Password Updated successfully !") {
                navigate("/home");
            }
        })
    }


    return (
        <div className="container d-flex justify-content-center ">
            <div className="row shadow-lg p-4 m-5" style={{"width": '35rem'}}>
                <h1 className="d-flex justify-content-center text-success">Update Password</h1>      
                <div className="p-5">
                <form >
                <div className="form-group">   
                        <input  type="text"  value={email} className="form-control" />
                    </div>
                    <div className="form-group mt-2">   
                        <input  type="password" placeholder="Old Password" className="form-control" />
                    </div>
                    <div className="form-group mt-2">   
                        <input  type="password" placeholder="New Password" className="form-control" />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success w-100 font-weight-bold mt-2"  onClick={handleSubmit}>Submit</button>
                        <button type="button" className="btn btn-secondary w-100 font-weight-bold mt-2" >Cancel</button>
                    </div>
                </form>    
                </div>
            </div> 
        </div>  
    )
}