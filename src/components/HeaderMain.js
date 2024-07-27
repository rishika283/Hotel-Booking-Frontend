import React from "react";
import { Link } from "react-router-dom";
import hotel_logo from './photos/hotel-logo.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './all.css';

function HeaderMain(){
    return(
        <div className="HeaderMain">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <img src={hotel_logo} className="hotel-logo"></img>
                    </div>
                    <div className="col-8">
                        <p className="header-heading">RISH HOTELS</p>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-outline-light button-header">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMain;