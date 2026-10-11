import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='text-center m-5 p-5 border-bottom'>
                <h1 className='text-muted fs-2'>Zerodha Products</h1>
                <h5 className='fw-normal text-muted p-3'>Sleek, modern, and intuitive trading platforms</h5>
                <p className='mb-5'>Check out our<a href='#' style={{textDecoration:"none"}}> investment offerings <i class="fa-solid fa-arrow-right-long"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;
