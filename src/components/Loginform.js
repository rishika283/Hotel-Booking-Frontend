import { useState } from "react";

const Loginform = () => {
    const cardFront = "Create An Account";
    const cardBack = "Login";
    const [isFlipped, setFlipped] = useState(false);
  
    const handleFlip = () => {
      setFlipped(!isFlipped);
    };

    return(
        <div className="Loginform">
            <div className="container container-home">
                <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                            <div className='card-content'>
                                <div className='py-2'>
                                    <h4 className="card-title-text">{cardFront}</h4>
                                </div>
                                <form className='sign-up-form p-2'>
                                    <table>   
                                        <tr>
                                            <td><input type='text' placeholder='Username' /></td>
                                        </tr>
                                        <tr>
                                            <td><input type='email' placeholder='Email ID' /></td>
                                        </tr>
                                        <tr>
                                            <td><input type='password' placeholder='Password' /></td>
                                        </tr>
                                        <tr>
                                            <td><input type='password' placeholder='Re-enter Your Password' /></td>
                                        </tr>
                                        <tr>
                                            <td><button className='btn sign-up-button'>Sign Up</button></td>
                                        </tr>
                                    </table>
                                </form>
                            </div>
                            <button className='btn flip-button' onClick={handleFlip}>Already Have An Account? Login</button>
                        </div>
                        <div className='flip-card-back'>
                            <div className='card-content'>
                                <div>
                                    <h4 className="card-title-text py-2">{cardBack}</h4>
                                </div>
                                <form className="login-form p-2">
                                    <table>
                                        <tr>
                                            <td><input type='text' placeholder='Username' /></td>
                                        </tr>
                                        <tr>
                                            <td><input type='password' placeholder='Password' /></td>
                                        </tr>
                                        <tr>
                                            <td><button className='btn login-button'>Login</button></td>
                                        </tr>
                                    </table>
                                </form>
                            </div>
                            <button className='btn flip-button' onClick={handleFlip}>New User? Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginform;