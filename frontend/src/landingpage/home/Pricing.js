import React from "react";

function Pricing(){
    return(
        <div className="container mt-5 p-5 ">
            <div className="row ">
                <div className="col-4">
                    <h1 className="fs-2">Unbeatable pricing</h1>
                    <p className="text-muted"> we pioneered the concept of discount and broking and price transperency in India. Flat fees and no hidden charges.</p>
                    <div>
                        <a href="#" style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row mb-5">
                        <div className="col border p-4 text-center">
                            <h1 className="mb-2"><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                            <p> free quality and delivery and direct mutual funds</p>
                        </div>
                        <div className="col border p-4 text-center">
                            <h1 className="mb-2"><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;