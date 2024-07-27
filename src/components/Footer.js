import React from "react";
import phone_logo from './photos/phone-logo.png';
import email_logo from './photos/email-logo.png';

function Footer(){
    return(
        <div className="Footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <img src={phone_logo} className="phone-logo"></img>
                        <p className="phone-no">+91 9884209532</p>
                    </div>
                    <div className="col-6">
                        <img src={email_logo} className="email-logo"></img>
                        <p className="email-id">rishhotels@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;