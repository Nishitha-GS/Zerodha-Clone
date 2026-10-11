import React from "react";

function Hero(){
    return (
        <div className='container text-center'>
            <div className="m-5 p-5">
                <h2>Charges</h2>
                <h5 className='fs-5 mt-3 text-muted'>List of all charges and taxes</h5>
            </div>
            <div className='row p-4'>
                <div className='col-4 p-3'>
                    <img src="media/images/pricing0.svg" style={{width:"70%"}}/>
                    <h3>Free equity delivery</h3>
                    <p className='text-muted p-3 fs-6'>All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-3'>
                    <img src="media/images/intradayTrades.svg" style={{width:"70%"}}/>
                    <h3>Intraday and F&O trades</h3>
                    <p className='text-muted p-3 fs-6'>
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className='col-4 p-3'>
                    <img src="media/images/pricingMF.svg" style={{width:"70%"}}/>
                    <h3>Free direct MF</h3>
                    <p className='text-muted p-3 fs-6'>
                       All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero;