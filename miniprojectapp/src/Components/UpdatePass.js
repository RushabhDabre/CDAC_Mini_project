import React, {useState, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default function UpdatePass(){
    const [isVisible, setVisible] = useState(true);
    const ref = useRef(null) //used for Loading Bar
    const [password, setPassword] = useState("");
    const [oldpassword, setoldPassword] = useState("");
    const [email,setEmail]=useState("");
    const [msg, setMsg] = useState("");
    let navigate = useNavigate();
    
    useEffect(()=>{
        console.log('useEffect is running');
        let userEmail = localStorage.getItem('email')
        setEmail(userEmail);    
    },[]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const reqOptions ={
            method:"put",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({ oldpassword,password,email })
        }
        fetch("http://localhost:9000/forgetPass",reqOptions)
        .then(res=>res.text())
        .then(str=>{
            setMsg(str);
            if (str === "SUCCESS") {
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
            <div className="row shadow-lg p-4 m-5" style={{"width": '35rem'}}>
                <h1 className="d-flex justify-content-center text-success">Update Password</h1>      
                <div className="p-5">
                <div className={`border border-danger mb-2 ${isVisible ? 'd-none' : ''} d-flex justify-content-center`}><strong className="text-danger">{msg}</strong></div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mt-2">   
                        <input  type="password" placeholder="Old Password" className="form-control" value={oldpassword} onChange={(e) => setoldPassword(e.target.value)}/>
                    </div>
                    <div className="form-group mt-2">   
                        <input  type="password" placeholder="New Password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <button type="button" className="btn btn-success w-100 font-weight-bold mt-2"  onClick={handleSubmit}>Submit</button>
                        <button type="button" className="btn btn-secondary w-100 font-weight-bold mt-2" onClick={()=>{navigate('/home')}} >Cancel</button>
                    </div>
                </form>    
                </div>
            </div> 
            {/* <div>{msg}</div> */}
        </div>  

       
    )
}