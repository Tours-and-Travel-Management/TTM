import React from "react";

function Payment({ payment, handlePaymentInput, handleSubmit }) {
    return (
        <div className="text-dark">
            <form onSubmit={handleSubmit}>
                <h5 className="p-2 font-weight-bold">Payment Information</h5>

                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label font-weight-bold">Card No</label>
                    <div className="col-sm-8">
                        <input 
                            type="text" 
                            name="cardno" 
                            value={payment.cardno} 
                            onChange={handlePaymentInput} 
                            className="form-control" 
                            maxLength="16" 
                            placeholder="Enter card number"
                            required 
                        />
                    </div>
                </div>

                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label font-weight-bold">Name on Card</label>
                    <div className="col-sm-8">
                        <input 
                            type="text" 
                            name="nameoncard" 
                            value={payment.nameoncard} 
                            onChange={handlePaymentInput} 
                            className="form-control" 
                            placeholder="Enter name on card"
                            required 
                        />
                    </div>
                </div>

                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label font-weight-bold">Expiry Date</label>
                    <div className="col-sm-8">
                        <input 
                            type="month" 
                            name="expiry" 
                            onChange={handlePaymentInput} 
                            className="form-control" 
                            required 
                        />
                    </div>
                </div>

                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label font-weight-bold">CVV</label>
                    <div className="col-sm-8">
                        <input 
                            type="text" 
                            name="cvv" 
                            value={payment.cvv} 
                            onChange={handlePaymentInput} 
                            className="form-control" 
                            maxLength="3" 
                            placeholder="Enter CVV"
                            required 
                        />
                    </div>
                </div>

                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label font-weight-bold">Billed Amount</label>
                    <div className="col-sm-8">
                        <input 
                            type="text" 
                            readOnly 
                            value={`₹ ${payment.amount}`} 
                            className="form-control" 
                        />
                    </div>
                </div>

                <button className="btn btn-success float-right">Place Order</button>
            </form>
        </div>
    );
}

export default Payment;
