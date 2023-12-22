import { useState, useReducer, useEffect, useRef } from "react";
import pic from '../Image/DocLogin.jpg'
import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

//info - about one user, initial state
const init = {
    name:"",
    age:0,
    gender:"",
    email:"",
    phone:"",
    password:""
}

const reducer = (state,action) => {
    switch(action.type){
        case 'update':
            return {...state,[action.fld]:action.val}
        case 'reset':
            return init;
    }
}


export default function Register(){
    const ref = useRef(null) //used for Loading Bar
    const { register, formState: {errors , isValid}, watch } = useForm({mode: 'all'});
    const[user,dispatch] = useReducer(reducer,init);
    const [msg,setmsg]=useState("");
    let navigate = useNavigate();

    //for testing
    useEffect(() => {
        console.log("isValid:", isValid);
        console.log("errors:", errors);
    }, [isValid, errors]);

    const submitData=(e)=>{
        //default behavior submit - cancelling
        e.preventDefault();
        const reqOptions = {
            method:"post",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                name:user.name,
                age:user.age,
                gender:user.gender,
                email:user.email,
                phone:user.phone,
                password:user.password
            })
        }

        fetch("http://localhost:9000/insertUser",reqOptions)
        .then(res=>res.text())
        .then(str=>{
            setmsg(str);
            if (str === 'Registration successful') {
                // navigate('/login');
                ref.current.complete();
                setTimeout(() => navigate("/login"), 500);
            }
        })
    }

    //bug in password validation -- need to fix 
    return (
        <div className="container d-flex justify-content-center ">
            <LoadingBar color="#f11946" ref={ref} shadow={true} />
            <div className="row shadow-lg p-4 m-5" style={{"width": '65rem'}}>
                <h1 className="d-flex justify-content-center text-success">Registration Page</h1>
                <div className="col-md-6 d-none d-md-block">
                    <img src={pic} alt="loginPAge" className="img-fluid mt-2"/>
                </div>
                <div className="col-md-6 p-5">
                <form>
                    <div className="form-group ">   
                        <input type="text" placeholder="Enter Name" className="form-control" 
                        {...register("name",{required: true, pattern: /^[A-Za-z\s]{3,}$/})} //for Validation
                        name="name" value={user.name} onChange={(e)=>{dispatch({type:'update',fld:"name",val:e.target.value})}} /> {/*For RESTAPI */}
                        <span className='text-danger ms-2'>{errors.name?.type === "required" && "Name is required!"}{errors.name?.type === "pattern" && "Invalid Name!"}</span >
                    </div>
                    <div className="row form-group ">   
                        <div className='col-6'>
                            <input type="number" placeholder="Enter Age" className="form-control"
                            {...register("age",{required: true, pattern: /^\d{1,2}$/},)} //for Validation
                            name="age" value={user.age} onChange={(e)=>{dispatch({type:'update',fld:"age",val:e.target.value})}} /> {/*For RESTAPI */}
                            <span className='text-danger ms-2'>{errors.age?.type === "required" && "Age is required!"}{errors.age?.type === "pattern" && "Invalid Age!"}</span >
                        </div>
                        <div className='col-6 row mt-2'>
                            <div className='col-6 form-check'>
                                <input type="radio" className="form-check-input" checked={user.gender === "M"}
                                {...register("gender",{required: true})} //for Validation
                                name="gender" value="M" onChange={(e) => { dispatch({ type: 'update', fld: "gender", val: e.target.value }) }} /> {/*For RESTAPI */}
                                <label className="form-check-label" >Male</label>
                            </div>
                            <div className='col-6 form-check'>
                                <input type="radio" className="form-check-input" checked={user.gender === "F"}
                                {...register("gender",{required: true})} //for Validation
                                name="gender" value="F" onChange={(e) => { dispatch({ type: 'update', fld: "gender", val: e.target.value }) }} /> {/*For RESTAPI */}                          
                                <label className="form-check-label" >Female</label>
                            </div>
                            <span className='text-danger'>{errors.gender?.type === "required" && "Please select!"}</span>
                        </div>
                    </div>
                    <div className="form-group">    
                        <input type="email" placeholder="Email" className="form-control" 
                        {...register("email",{required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i},)} //for Validation
                        name="email" value={user.email} onChange={(e)=>{dispatch({type:'update',fld:"email",val:e.target.value})}} />  {/*For RESTAPI */}
                        <span className='text-danger ms-2'>{errors.email?.type === "required" && "Email is required!"}{errors.email?.type === "pattern" && "Email is invalid!"}</span >
                    </div>
                    <div className="form-group">   
                        <input type="number" placeholder="Phone" className="form-control" 
                        {...register("phone", {required: true, pattern: /^\d{10,12}$/})} //for Validation
                        name="phone" value={user.phone} onChange={(e) => { dispatch({ type: 'update', fld: "phone", val: e.target.value }) }} /> {/*For RESTAPI */}
                        <span className='text-danger ms-2'>{errors.phone?.type === "required" && "Phone No is Required!"} {errors.phone?.type === "pattern" && "Phone number is invalid!"} </span>
                    </div>
                    <div className="form-group">   
                        <input  type="password" placeholder="Password" className="form-control"  
                        {...register("password",{ required: true, pattern: /^[A-Za-z\d@$!%*?&]{8,12}$/})} //for Validation
                        name="password" value={user.password} onChange={(e) => { dispatch({ type: 'update', fld: "password", val: e.target.value }) }} /> {/*For RESTAPI */}
                        <span className='text-danger ms-2'>{errors.password?.type === "required" && "You must specify a password"}{errors.password?.type === "pattern" && "Password must be between 8 - 12 words!"}</span >
                    </div>
                    <div className="form-group">   
                        <input  type="password" placeholder="Confirm Password" className="form-control"  
                        {...register("confirm_password",{ required: true, validate: (val) => { return (watch('password') === val || "Your passwords do no match");},})} />
                        <span className='text-danger ms-2'>{errors.confirm_password?.message}</span>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success w-100 font-weight-bold mt-2" disabled={!isValid} value="Insert" onClick={(e)=>{submitData(e)}}>Submit</button>
                    </div>
                </form>    
            {/* <p> {msg} </p> */}
                </div>
            </div> 
        </div>  
    )
}