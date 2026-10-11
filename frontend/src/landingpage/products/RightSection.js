import React from 'react';

function RightSection({imgURL, productName, productDescription, tryDemo, learnMore, playStore, appStore}) {
    return ( 
        <div className='container p-5 m-5'>
            <div className='row'>
                <div className='col-7'>
                    <img src={imgURL} style={{marginLeft:"10%"}}/>
                </div>
                {/* <div className='col-2'></div> */}
                <div className='col-4 p-5'>
                    <h1 className='fs-3 my-4'>{productName}</h1>
                    <p style={{lineHeight:"1.9"}}>{productDescription}</p>
                    <div className='my-3'>
                        <a href="/learnmore" style={{textDecoration:"none"}}>{learnMore}</a>
                        <a href="/trydemo" className='mx-5' style={{textDecoration:"none"}}>{tryDemo}</a>
                    </div>
                    <div>
                        <a href="#"><img src='media\images\googlePlayBadge.svg'/></a>
                        <a href="#" className='mx-1'><img src='media\images\appstoreBadge.svg'/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default RightSection;