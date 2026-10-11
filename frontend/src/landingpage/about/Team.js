import React from "react"

function Team(){
    return (
            <div className="container">
            <div className="row ">
                <h1 className="text-center fs-4">People</h1>
            </div>
            <div className="row p-5" style={{lineHeight:"1.6", fontSize:"1.1em"}}>
                <div className="col text-center" >
                 <img src="media/images/nithinKamath.jpg" style={{width:"50%", borderRadius:"100%" }}/>
                 <h5 className="fw-normal m-3">Nithin Kamath</h5>
                 <h6 className="text-muted  fw-normal m-3">Founder, CEO</h6>
                 </div>
                <div className="col">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="#" style={{textDecoration:"none"}}>Homepage</a> / <a href="#" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="#" style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
    )
}

export default Team