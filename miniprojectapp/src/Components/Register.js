import pic from '../Image/DocLogin.jpg'
export default function Register(){
    return (
        <div className="container d-flex justify-content-center ">
            <div className="row shadow-lg p-4 m-5" style={{"width": '65rem'}}>
                <h1 className="d-flex justify-content-center text-success">Registration Page</h1>
                <div className="col-md-6 d-none d-md-block">
                    <img src={pic} alt="loginPAge" className="img-fluid mt-2"/>
                </div>
                <div className="col-md-6 p-5">
                <form>
                    <div className="form-group pb-3">   
                        <input type="text" placeholder="Enter Name" className="form-control"/>
                    </div>
                    <div className="row form-group pb-3">   
                        <div className='col-6'>
                            <input type="number" placeholder="Enter Age" className="form-control"/>
                        </div>
                        <div className='col-6 row mt-2'>
                            <div className='col-6 form-check'>
                                <input type="radio" className="form-check-input" name="flexRadioDefault"/>
                                <label className="form-check-label" >Male</label>
                            </div>
                            <div className='col-6 form-check'>
                                <input type="radio" placeholder="Enter Age" className="form-check-input" name="flexRadioDefault"/>                                
                                <label className="form-check-label" >Female</label>
                            </div>
                        </div>

                    </div>
                    <div className="form-group pb-3">    
                        <input type="email" placeholder="Email" className="form-control" />   
                    </div>
                    <div className="form-group pb-3">   
                        <input type="number" placeholder="Phone Number" className="form-control"/>
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