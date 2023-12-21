export default function UpdatePass(){
    return (
        <div className="container d-flex justify-content-center ">
            <div className="shadow-lg p-4 m-5" style={{"width": '25rem'}}>
                <h1 className="d-flex justify-content-center text-success mb-3">Please Login!</h1>      
                <form>
                    <div className="mb-3">   
                        <input  type="email" placeholder="Email" className="form-control " />
                    </div>
                    <div className="mb-3">   
                        <input  type="password" placeholder="Password" className="form-control" />
                    </div>
                    <div className="row g-3 align-items-center d-flex justify-content-center mb-3">
                        <div className="col-auto ">
                            <button type="submit" className="btn btn-success w-100 font-weight-bold mt-2" >Submit</button>
                        </div>
                        <div className="col-auto">
                            <button type="button" className="btn btn-secondary w-100 font-weight-bold mt-2" >Cancel</button>
                        </div>
                    </div>
                    <div className="text-center mb-3">
                        <p>Not a member? <a href="#!">Register</a></p>
                    </div>
                </form>    
            </div> 
        </div>  
    )
}