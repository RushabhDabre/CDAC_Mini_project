export default function Register(){
    return (
        <div className="container-fluid d-flex justify-content-center">
        <div className="row shadow-lg p-4 m-4 " style={{"width": '45rem'}}>
            <div className="col-6">
                
            </div>
            <div className="col-6">
                <div className="row g-3 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="inputPassword6" className="col-form-label">Password</label>
                        </div>
                        <div className="col-auto">
                            <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                        </div>
                        <div className="col-auto">
                            <span id="passwordHelpInline" className="form-text">
                                Must be 8-20 characters long.
                            </span>
                        </div>
                    </div>
                </div>
            </div> 
        </div>  
    )
}