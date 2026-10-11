import React from 'react';


function Universe() {
    return ( 
        <div className='container text-center p-5 m-5'>
            <div>
                <h4 className='text-muted '>The Zerodha Universe</h4>
                <p className='p-3'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row'>
                <div className='col-4 p-5'>
                    <img src="/media/images/zerodhaFundhouse.png" style={{width:"70%"}}/>
                    <p className='text-muted p-2' style={{fontSize:"0.8em"}}>Our asset management venture<br/>
                    that is creating simple and transparent index<br/>
                    funds to help you save for your goals.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src="/media/images/sensibullLogo.svg" style={{width:"70%"}}/>
                    <p className='text-muted p-2' style={{fontSize:"0.8em"}}>Options trading platform that lets you<br/>
                    create strategies, analyze positions, and examine<br/>
                    data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className='col-4  p-5'>
                    <img src="/media/images/goldenpiLogo.png" style={{width:"70%"}}/>
                    <p className='text-muted p-2' style={{fontSize:"0.8em"}}>Investment research platform<br/>
                    that offers detailed insights on stocks,<br/>
                    sectors, supply chains, and more.
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col-4 p-5'>
                    <img src="/media/images/streakLogo.png" style={{width:"70%"}}/>
                    <p className='text-muted p-2' style={{fontSize:"0.8em"}}>Systematic trading platform<br/>
                    that allows you to create and backtest<br/>
                    strategies without coding.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src="\media\images\smallcaseLogo.png" style={{width:"70%"}}/>
                    <p className='text-muted p-2' style={{fontSize:"0.8em"}}>
                    Thematic investing platform<br/>
                    that helps you invest in diversified<br/>
                    baskets of stocks on ETFs.
                    </p>
                </div>
                <div className='col-4  p-5'>
                    <img src="/media/images/dittoLogo.png" style={{width:"70%"}}/>
                    <p className='text-muted p-2' style={{fontSize:"0.8em"}}>Personalized advice on life<br/>
                    and health insurance. No spam<br/>
                    and no mis-selling.
                    </p>
                </div>
            </div>
            <button className="btn btn-primary fs-5 " style={{width:"20%", margin:"3% auto"}}>SignUp for Free</button>
        </div>
    );
}

export default Universe;
