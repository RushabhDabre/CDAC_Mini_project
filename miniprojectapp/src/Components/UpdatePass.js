export default function UpdatePass(){
    return (
        <div className="container d-flex justify-content-center ">
            <div className="row shadow-lg p-4 m-5" style={{"width": '65rem'}}>
                <h1 className="d-flex justify-content-center text-success">Update Password</h1>      
                <div className="col-md-6 p-5">
                <form >
                    <div className="form-group">   
                        <input  type="password" placeholder="Password" className="form-control" />
                    </div>
                    <div className="form-group">   
                        <input  type="password" placeholder="Password" className="form-control" />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success w-100 font-weight-bold mt-2" >Submit</button>
                        <button type="button" className="btn btn-secondary w-100 font-weight-bold mt-2" >Cancel</button>
                    </div>
                </form>    
                </div>
            </div> 
        </div>  
    )
}