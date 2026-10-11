import React from "react"
import Charges from "./Charges";

function Brokerage(){
    return (
        <div className="container p-5">
            {/* 1st */}
            <div className="m-3 p-5">
                <h3>Charges for account opening</h3>
            <div className="table-outer-border p-2 my-3">
                <table class="table mb-0">
                    <thead className="border-bottom">
                        <tr>
                        <th className="fw-medium" >Type of account</th>
                        <th className="fw-medium" >Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Individual account</td>
                        <td>Free</td>
                        </tr>
                        <tr>
                        <td>Minor account</td>
                        <td>Free</td>
                        </tr>
                        <tr>
                        <td>Minor account</td>
                        <td>₹ 500</td>
                        </tr>
                        <tr>
                            <td>HUF account</td>
                            <td>free (online)/₹ 500(offline)</td>
                        </tr>
                        <tr>
                            <td>Partnership, LLP, and Corporate accounts (offline only)</td>
                            <td>₹ 500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            {/* 2nds */}
            <div className="m-3 p-5">
                <h3>Demat AMC (Annual Maintenance Charge)</h3>
                <div class="p-3 mb-2 bg-primary-subtle text-primary-emphasis" style={{width:"15%"}}>Free for first year*</div>
                <p style={{fontSize:"0.8em"}} className="py-3">From second year onwards, for BSDA accounts:</p>
            <div className="table-outer-border p-2 my-2">
                <table class="table mb-0">
                    <thead className="border-bottom">
                        <tr>
                        <th className="fw-medium" >Value of holdings</th>
                        <th className="fw-medium" >AMC</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Up to ₹4 lakh</td>
                        <td>Free</td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>₹4 lakh – ₹10 lakh</td>
                        <td>₹100 per year + 18% GST, charged quarterly</td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>Above ₹10 lakh</td>
                        <td>₹300 per year + 18% GST, charged quarterly</td>
                        <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p style={{fontSize:"0.8em"}} className="py-1">For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.</p>
            <p style={{fontSize:"0.8em"}} className="py-1"> To learn more about BSDA, click here. To learn more about AMC, click here.</p>
            <p style={{fontSize:"0.8em"}} className="py-1">*Resident individual accounts only.</p>
            </div>
            <div className="m-3 p-5">
                <h3>Charges for optional value added services</h3>
            <div className="table-outer-border p-2">
                <table class="table mb-0">
                    <thead className="border-bottom">
                        <tr>
                        <th className="fw-medium" >Service</th>
                        <th className="fw-medium" >Billing Frequency</th>
                        <th className="fw-medium" >Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Tickertape</td>
                        <td>Monthly / Quarterly / Annual</td>
                        <td>Free: 0 | Pro: 249/699/2399</td>
                        </tr>
                        <tr>
                        <td>Smallcase</td>
                        <td>Per transaction</td>
                        <td>Buy & Invest More: 100 | SIP: 10</td>
                        </tr>
                        <tr>
                        <td>Kite Connect</td>
                        <td>Monthly</td>
                        <td>Connect: 500 | Personal: Free</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            <Charges/>
        </div>
    )
}

export default Brokerage;