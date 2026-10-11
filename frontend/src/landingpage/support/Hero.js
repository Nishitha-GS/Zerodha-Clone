import React from 'react';


function Hero() {
    return ( 
        <div className='text-bg-light'>
            <div className='p-4 container'>
                <p className='fs-1 fw-semibold' style={{display:'inline-block'}}>Support Portal </p>
                <button class="btn btn-primary" type="submit" style={{marginLeft:"70%"}}>My Tickets</button>
            <div>
                <form class="d-flex mt-3" role="search">
                    <input class="form-control me-2 p-3" type="search" placeholder=" Eg: How do I open my account, How do I active F&O..." aria-label="Search"/>
                </form>
            </div>
            </div>
        </div>
     );
}

export default Hero;