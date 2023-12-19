import pic from '../Image/DocLogin.jpg'
import { useForm } from "react-hook-form";

export default function Register(){
    const { register, formState: {errors}, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="container d-flex justify-content-center ">
            <div className="row shadow-lg p-4 m-5" style={{"width": '65rem'}}>
                <h1 className="d-flex justify-content-center text-success">Registration Page</h1>
                <div className="col-md-6 d-none d-md-block">
                    <img src={pic} alt="loginPAge" className="img-fluid mt-2"/>
                </div>
                <div className="col-md-6 p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group pb-3">   
                        <input type="text" placeholder="Enter Name" className="form-control" 
                        {...register("name",{required: true, pattern: /^[A-Za-z]{3,}$/})}/>
                        <error className='text-danger ms-2'>{errors.name?.type === "required" && "Name is required!"}{errors.name?.type === "pattern" && "Invalid Name!"}</error>
                    </div>
                    <div className="row form-group pb-3">   
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
                    <div className="form-group pb-3">    
                        <input type="email" placeholder="Email" className="form-control" />   
                    </div>
                    <div className="form-group pb-3">   
                        <input type="tel" placeholder="Phone Number" className="form-control"/>
                    </div>
                    <div className="form-group pb-3">   
                        <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="form-group pb-3">   
                        <input type="password" placeholder="Confirm Password" className="form-control" id="exampleInputPassword1"/>
                    </div>


                    <div className="pb-2">
                    <button type="submit" className="btn btn-success w-100 font-weight-bold mt-2">Submit</button>
                    </div>
                </form>    
                </div>
            </div> 
        </div>  
    )
}