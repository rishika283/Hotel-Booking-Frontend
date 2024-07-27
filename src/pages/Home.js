import React from "react";
import HeaderMain from "../components/HeaderMain";
import Footer from "../components/Footer";
import About from "../components/About";

function Home(){
    return(
        <div className="Home">
            <HeaderMain />
            <About />
            <Footer />
        </div>
    )
}

export default Home;