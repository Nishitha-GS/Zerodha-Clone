import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-8'>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item p-2 mb-4">
                            <h2 class="border">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <div className='px-2'><i class="fa-solid fa-circle-plus"></i></div>
                                Account Opening
                            </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Resident individual</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Minor</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Non Resident Indian (NRI)</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Company, Partnership, HUF and LLP</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Glossary</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item p-2 mb-4">
                            <h2 class="border ">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <div className='px-2'><i class="fa-solid fa-user"></i></div>
                                Your Zerodha Account
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Your Profile</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Account modification</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Client Master Report (CMR) and Depository Participant (DP)</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Nomination</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Transfer and conversion of securities</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item p-2  mb-4">
                            <h2 class="border">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                <div className='px-2'><i class="fa-solid fa-tags"></i></div>
                                Kite
                            </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>IPO</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Trading FAQs</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Margin Trading Facility (MTF) and Margins</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Charts and orders</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Alerts and Nudges</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>General</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item p-2  mb-4">
                            <h2 class="border">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                <div className='px-2'><i class="fa-solid fa-indian-rupee-sign"></i></div>
                                Funds
                            </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Add Money</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Withdraw money</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Add bank Accounts</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>EMandates</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item p-2  mb-4">
                            <h2 class="border">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                <div className='px-2'><i class="fa-solid fa-circle"></i></div>
                                Console
                            </button>
                            </h2>
                            <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>PortFolio</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Corporate Actions</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Fund Statement</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Reports</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Profile</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Segments</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item mb-4 p-2 ">
                            <h2 class="border">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                <div className='px-2'><i class="fa-solid fa-circle-dot"></i></div>
                                Coin
                            </button>
                            </h2>
                            <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Mutual Funds</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>National Pension Scheme(NPS)</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Fixed Deposit(FD)</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Features of Coin</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>Payments and order</a></li>
                                    <li className='m-3'><a href="#" style={{textDecoration:"none"}}>General</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                <div className='col-3'>
                <div className="mt-4 px-4 py-3 bg-warning-subtle border-start border-5 border-warning">
                <ul className="mb-0 p-2">
                    <li>
                    <a href="#" style={{textDecoration:"none"}}>
                        [Resolved] Issue with price updates on certain option strikes on BSE
                    </a>
                    </li>
                    <li>
                    <a href="#" style={{textDecoration:"none"}}>
                        Latest Intraday leverages and Square-off timings
                    </a>
                    </li>
                </ul>
                </div>
                <div className='mt-5'>
                    <table class="table border">
                    <thead className='table-secondary'>
                        <tr>
                        <th scope="col" className='p-3 border'>Quick Links</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className='p-3'><a href="#" style={{textDecoration:"none"}}>1. Track account opening</a></td>
                        </tr>
                        <tr>
                        <td className='p-3'><a href="#" style={{textDecoration:"none"}}>2. Track segment activation</a></td>
                        </tr>
                        <tr>
                        <td className='p-3'><a href="#" style={{textDecoration:"none"}}>3. Intraday margins</a></td>
                        </tr>
                        <tr>
                        <td className='p-3'><a href="#" style={{textDecoration:"none"}}>4. Kite user manual</a></td>
                        </tr>
                        <tr>
                        <td className='p-3'><a href="#" style={{textDecoration:"none"}}>5. Learn how to create a ticket</a></td>
                        </tr>
                    </tbody>
                 </table>
                </div>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;

