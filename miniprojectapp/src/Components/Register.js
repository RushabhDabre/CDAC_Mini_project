import pic from '../Image/DocLogin.jpg'
import { useForm } from "react-hook-form";

export default function Register(){
    const { register, formState: {errors , isValid}, watch } = useForm({mode: 'all'});
    return (
        <div className="container d-flex justify-content-center ">
            <div className="row shadow-lg p-4 m-5" style={{"width": '65rem'}}>
                <h1 className="d-flex justify-content-center text-success">Registration Page</h1>
                <div className="col-md-6 d-none d-md-block">
                    <img src={pic} alt="loginPAge" className="img-fluid mt-2"/>
                </div>
                <div className="col-md-6 p-5">
                <form >
                    <div className="form-group ">   
                        <input type="text" placeholder="Enter Name" className="form-control" 
                        {...register("name",{required: true, pattern: /^[A-Za-z\s]{3,}$/})}/>
                        <error className='text-danger ms-2'>{errors.name?.type === "required" && "Name is required!"}{errors.name?.type === "pattern" && "Invalid Name!"}</error>
                    </div>
                    <div className="row form-group ">   
                        <div className='col-6'>
                            <input type="number" placeholder="Enter Age" className="form-control"
                            {...register("age",{required: true, pattern: /^\d{1,2}$/},)}/>
                            <error className='text-danger ms-2'>{errors.age?.type === "required" && "Age is required!"}{errors.age?.type === "pattern" && "Invalid Age!"}</error>
                        </div>
                        <div className='col-6 row mt-2'>
                            <div className='col-6 form-check'>
                                <input type="radio" className="form-check-input" name="flexRadioDefault" value="M" {...register("sex",{required: true})}/>
                                <label className="form-check-label" >Male</label>
                            </div>
                            <div className='col-6 form-check'>
                                <input type="radio" placeholder="Enter Age" className="form-check-input" name="flexRadioDefault" value="F" {...register("sex",{required: true})}/>                                
                                <label className="form-check-label" >Female</label>
                            </div>
                            <error className='text-danger'>{errors.sex?.type === "required" && "Please select!"}</error>
                        </div>
                    </div>
                    <div className="form-group">    
                        <input type="email" placeholder="Email" className="form-control" 
                        {...register("email",{required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i})}/>   
                        <error className='text-danger ms-2'>{errors.email?.type === "required" && "Email is required!"}{errors.email?.type === "pattern" && "Email is invalid!"}</error>
                    </div>
                    <div className="form-group">   
                        <input type="number" placeholder="Phone" className="form-control" 
                        {...register("number", {required: true, pattern: /^\d{10,12}$/})}/>
                        <error className='text-danger ms-2'>{errors.number?.type === "required" && "Phone No is Required!"} {errors.number?.type === "pattern" && "Phone number is invalid!"} </error>
                    </div>
                    <div className="form-group">   
                        <input  type="password" placeholder="Password" className="form-control"  
                        {...register("password",{ required: true, pattern: /^[A-Za-z\d@$!%*?&]{8,12}$/})} />
                        <error className='text-danger ms-2'>{errors.password?.type === "required" && "You must specify a password"}{errors.password?.type === "pattern" && "Password must be between 8 - 12 words!"}</error>
                    </div>
                    <div className="form-group">   
                        <input  type="password" placeholder="Confirm Password" className="form-control"  
                        {...register("confirm_password",{ required: true, validate: (val) => { return (watch('password') === val || "Your passwords do no match");},})} />
                        <error className='text-danger ms-2'>{errors.confirm_password?.message}</error>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success w-100 font-weight-bold mt-2" disabled={!isValid}>Submit</button>
                    </div>
                </form>    
                </div>
            </div> 
        </div>  
    )
}