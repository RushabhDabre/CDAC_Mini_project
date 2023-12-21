import React from "react";
import {  useNavigate } from "react-router-dom";

export default function OuterNavbar() {
    let navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">LOGO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                <form className="d-flex" role="search">
                    <button className="btn btn-outline-success mt-2.5 me-4" type="submit" onClick={()=>{navigate('/register') }}>Register</button>
                    <button className="btn btn-outline-success mt-2.7 me-2" type="submit" onClick={()=>{navigate('/login') }}>Login</button>
                </form>                    
                </div>
            </div>
        </nav> 
    )
}