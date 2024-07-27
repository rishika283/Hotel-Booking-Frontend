import { Link } from "react-router-dom";
import hotel_logo from './photos/hotel-logo.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './all.css';

function HeaderLogin(){
    return(
        <div className="HeaderLogin">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <img src={hotel_logo} className="hotel-logo"></img>
                    </div>
                    <div className="col-8">
                        <p className="header-heading">RISH HOTELS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderLogin;