import HeaderLogin from "../components/HeaderLogin";
import Loginform from "../components/Loginform";
import Footer from "../components/Footer";

function Login(){
    return(
        <div className="Login">
            <HeaderLogin />
            <Loginform />
            <Footer />
        </div>
    )
}

export default Login;