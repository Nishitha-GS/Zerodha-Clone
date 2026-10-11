import React from "react";
import {useNavigate} from "react-router-dom"

function Hero(){
    const navigate = useNavigate();
    return(
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="HomeHeroImage" className="mb-5"/>
                <h1>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="btn btn-primary fs-5 " style={{width:"20%", margin:"3% auto"}} onClick={()=>navigate("/signup")}>SignUp for Free</button>
            </div>
        </div>
    )
}

export default Hero;