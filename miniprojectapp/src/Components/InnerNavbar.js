import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import '../../node_modules/react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {  useNavigate } from "react-router-dom";

export default function InnerNavbar() {
    let navigate = useNavigate();
    const confirmation = () => {
        confirmAlert({
            title: 'Confirm to logout',
            message: 'Are you sure?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {navigate('/login')}
                },
                {
                    label: 'No',
                }
            ]
        });
        // if (window.confirm('Are you sure you wish to delete this item?')) handleClearClick()
    };
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">LOGO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/home">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/book">BookAppointment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/cancel">CancelAppointment</Link>
                        </li>
                       
                    </ul>
                    <form className="d-flex" role="search">
                        <Link className="nav-link active  mt-2 me-4" to="/change">Change Password</Link>
                        <button className="btn btn-outline-success" type="button" onClick={confirmation}>Logout</button>
                    </form>                    
                </div>
            </div>
        </nav>
    )
}