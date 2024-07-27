import React from "react";
import { Link } from "react-router-dom";
import hotel_logo from './photos/hotel-logo.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './all.css';

function HeaderLoggedIn(){
    return(
        <div className="HeaderLoggedIn">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <img src={hotel_logo} className="hotel-logo"></img>
                    </div>
                    <div className="col-8">
                        <p className="header-heading">RISH HOTELS</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="dropdown position-absolute bottom-0 end-0">
                            <button className="btn dropdown-toggle header-dropdown" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                My Profile
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Personal Information</a>
                                <a className="dropdown-item" href="#">My Bookings</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderLoggedIn;