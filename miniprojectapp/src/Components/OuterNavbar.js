
export default function OuterNavbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">LOGO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex" role="search">
                        <button className="btn btn-outline-success mt-2.5 me-4" type="submit">Register</button>
                        <button className="btn btn-outline-success mt-2.7 me-2" type="submit">Login</button>
                    </form>                    
                </div>
            </div>
        </nav>
    )
}