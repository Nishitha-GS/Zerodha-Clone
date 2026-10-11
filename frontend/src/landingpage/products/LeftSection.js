import React from 'react';

function LeftSection({imgURL, productName, productDescription, tryDemo, learnMore, playStore, appStore}) {
    return ( 
        <div className='container p-5 m-5'>
            <div className='row p-5'>
                <div className='col-4 p-5'>
                    <h1 className='fs-3 my-4'>{productName}</h1>
                    <p style={{lineHeight:"1.9"}}>{productDescription}</p>
                    <div className='my-3'>
                        <a href="/learnmore" style={{textDecoration:"none"}}>{learnMore}</a>
                    </div>
                </div>
                <div className='col-7'>
                    <img src={imgURL} style={{marginLeft:"20%"}}/>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;
