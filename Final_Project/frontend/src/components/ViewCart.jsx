// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import Payment from "./Payment";


// function ViewCart(){
//     const state=useSelector((state)=>state);
//     const dispatch=useDispatch()
//     const history=useHistory()
//     const [address,setAddress]=useState({
//         "city":"",
//         "state":"Maharashtra",
//         "zip":"411038",
//         "country":"India"
//     })
//     const [payment,setPayment]=useState({
//         "cardno":"",
//         "nameoncard":"",
//         "cvv":"",
//         "amount":state.cart.reduce(myfun,0)       
//     })
//     const deleteItem=(item)=>{
//         let resp=window.confirm('Are you sure to delete this item ?')
//         if(resp){        
//         dispatch({type:'RemoveItem',payload:item})   
//         let amount=state.cart.reduce(myfun,0)
//         console.log("Amount ",amount)
//         }
//     }
//     const handleAddressInput=(e)=>{
//         setAddress({...address,[e.target.name]:e.target.value})
//     }

//     const handlePaymentInput=(e)=>{ const { name, value } = e.target;

   
//     if ((name === "cvv" || name === "cardno") && !/^\d*$/.test(value)) {
//         return; 
//     }

   
//     if (name === "cvv" && value.length > 3) {
//         return;
//     }

//     setPayment((prev) => ({
//         ...prev,
//         [name]: value, 
//     }));
//     }

//     useEffect(()=>{
//         let amount=state.cart.reduce(myfun,0)
//         setPayment({...payment,'amount':amount}) 
//         console.log("Amount => ",amount)
//     },[state.cart])

   
//     const handleSubmit=(e)=>{
//         e.preventDefault()  
//         //setSubmitted(true)
//         let amount=state.cart.reduce((a,b)=> (a+b.price),0)
//         console.log("Amount ",payment.amount)
//         setPayment({...payment,'amount':amount})

//         let data={
//             'cart':state.cart,
//             'payment':payment,
//             'address':address,
//             'customerid':sessionStorage.getItem('id')
//         } 
//         console.log(data) 
//         axios.post("http://localhost:9090/api/orders",data)
//         .then(resp=>{
//             console.log(resp)
//             dispatch({type:'Clear'});
//             history.push('/myorders')
//         })  
//     }

//     function myfun(total, num){
//         return total+(num.price*parseInt(num.qty))
//     }
//     return (
//         <div className="bg-transparent  text-black" style={{  backgroundImage: `url("http://www.thewowstyle.com/wp-content/uploads/2015/02/the-river-in-valley-of-beautiful-mountains-hd-wallpaper-75015.jpg")` }}> 
        
//         <div className=" mx-auto " style={{ height:"650px" }}>
            
//             {state.cart.length>0 ? 
//             <div className="row">
//                 <div className="col-sm-7" style={{ marginLeft:"50px" }}>
//                 <h4 className="text-white">Cart View</h4>
//             <table className="table table-bordered table-dark table-striped">
//                 <thead>
//                     <tr>
//                         <th>Event</th>
//                         <th>Event Name</th>
//                         <th>Price</th>
//                         <th>No of person</th>
//                         <th>Amount</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {state.cart.map(item=>(
//                         <tr key={item.eventid}>
//                             <td>{item.eventid}</td>
//                             <td>
//                                 <img className="mr-2 float-left" src={"http://localhost:9090/"+item.photo1} width="100" alt=""/>
//                                 {item.eventname}
//                             </td>
//                             <td>&#8377; {item.price}</td>
//                             <td>{item.qty}</td>
//                             <td>&#8377; {item.qty * item.price}</td>
//                             <td><button onClick={e=>deleteItem(item)} className="btn btn-danger">Delete</button></td>
//                         </tr>
//                     ))}
//                 </tbody>
//                 <tfoot>
//                     <tr>
//                         <th colSpan="4">Total Amount</th>
//                         {/* <th>&#8377; {state.cart.reduce((a,b)=>(a+b.price),0)}</th> */}
//                         <th>&#8377; {state.cart.reduce(myfun,0)}</th>
//                     </tr>
//                 </tfoot>
//             </table>
//             </div>
//             <div className=" text-dark" style={{ marginLeft:"100px" }}>     
//             <form onSubmit={handleSubmit} >           
//                 <h4 className="p-2 font-weight-bold">Address Information</h4>
//                 <div className="form-group form-row">
//                     <label className="col-sm-4 form-control-label font-weight-bold">City</label>
//                     <div className="col-sm-8">
//                         <input type="text" name="city" required value={address.city} onChange={handleAddressInput}  className="form-control" 
//                         placeholder="Enter City"
                        
//                         />                        
//                     </div>                        
//                 </div>
//                 <div className="form-group form-row">
//                     <label className="col-sm-4 form-control-label font-weight-bold">State</label>
//                     <div className="col-sm-8">
//                         <input type="text" name="state" required value={address.state} onChange={handleAddressInput} className="form-control" />
//                     </div>                        
//                 </div>
//                 <div className="form-group form-row">
//                     <label className="col-sm-4 form-control-label font-weight-bold">Zip</label>
//                     <div className="col-sm-8">
//                         <input type="text" name="zip" required value={address.zip} onChange={handleAddressInput} className="form-control" />                        
//                     </div>                        
//                 </div>
//                 <div className="form-group form-row">
//                     <label className="col-sm-4 form-control-label font-weight-bold">Country</label>
//                     <div className="col-sm-8">
//                         <input type="text" name="country" required value={address.country} onChange={handleAddressInput} className="form-control" />                       
//                     </div>                        
//                 </div>

//                 <h5 className="p-2 font-weight-bold">Payment Information</h5>
//                 <div className="form-group form-row">
//                     <label className="col-sm-4 form-control-label font-weight-bold">Card No</label>
//                     <div className="col-sm-8">
//                         <input type="text" name="cardno" value={payment.cardno} onChange={handlePaymentInput} className="form-control" maxLength="16" required/>                        
//                     </div>                        
//                 </div>
//                 <div className="form-group form-row">
//                     <label className="col-sm-4 form-control-label font-weight-bold">Name on Card</label>
//                     <div className="col-sm-8">
//                         <input type="text" name="nameoncard" value={payment.nameoncard} onChange={handlePaymentInput} className="form-control" 
//                         required                        
//                         />                        
//                     </div>                        
//                 </div>
//                 <div className="form-group form-row">
//                     <label className="col-sm-4 form-control-label font-weight-bold">Expiry Date</label>
//                     <div className="col-sm-8">
//                         <input type="month" required className="form-control" />                        
//                     </div>                        
//                 </div>
//                 <div className="form-group form-row">
//                     <label className="col-sm-4 form-control-label font-weight-bold">CVV</label>
//                     <div className="col-sm-8">
//                     <input 
//     type="text" 
//     name="cvv" 
//     value={payment.cvv} 
//     onChange={handlePaymentInput} 
//     className="form-control" 
//     maxLength="3" 
//     placeholder="Enter CVV"
//     required 
// />
//                     </div>                        
//                 </div>
//                 <div className="form-group form-row">
//                     <label className="col-sm-4 form-control-label font-weight-bold">Billed Amount</label>
//                     <div className="col-sm-8">
//                         <input type="text"  readOnly value={payment.amount} onChange={handlePaymentInput} className="form-control" 
//                         />                        
//                     </div>                        
//                 </div>                
//                 <button className="btn btn-success float-right " >Place Order</button>
//                 </form>
//             </div>
//              </div > : <h1 className="font-weight-bold" style={{ marginLeft:"500px" }}>No Bookings Available</h1>} 
//         </div>

//          </div>

//     )
// }

// export default ViewCart;

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function ViewCart() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const [address, setAddress] = useState({
        city: "",
        state: "Maharashtra",
        zip: "411038",
        country: "India",
    });

    const [payment, setPayment] = useState({
        cardno: "",
        nameoncard: "",
        cvv: "",
        amount: state.cart.reduce(myfun, 0),
    });

    useEffect(() => {
        let amount = state.cart.reduce(myfun, 0);
        setPayment((prev) => ({ ...prev, amount }));
    }, [state.cart]);

    const deleteItem = (item) => {
        if (window.confirm("Are you sure to delete this item?")) {
            dispatch({ type: "RemoveItem", payload: item });
        }
    };

    const handleAddressInput = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handlePaymentInput = (e) => {
        const { name, value } = e.target;
        if ((name === "cvv" || name === "cardno") && !/^[0-9]*$/.test(value)) return;
        if (name === "cvv" && value.length > 3) return;
        setPayment((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let amount = state.cart.reduce(myfun, 0);
        setPayment((prev) => ({ ...prev, amount }));

        let data = {
            cart: state.cart,
            payment,
            address,
            customerid: sessionStorage.getItem("id"),
        };

        axios.post("http://localhost:9090/api/orders", data).then((resp) => {
            dispatch({ type: "Clear" });
            history.push("/myorders");
        });
    };

    function myfun(total, num) {
        return total + num.price * parseInt(num.qty);
    }

    return (
        <div className="container mt-4 p-4 bg-light rounded shadow">
            {state.cart.length > 0 ? (
                <div className="row">
                    <div className="col-md-7">
                        <h4 className="text-dark">Cart Details</h4>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Event</th>
                                    <th>Event Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {state.cart.map((item) => (
                                    <tr key={item.eventid}>
                                        <td>{item.eventid}</td>
                                        <td>
                                            <img src={`http://localhost:9090/${item.photo1}`} width="50" alt="" className="mr-2" />
                                            {item.eventname}
                                        </td>
                                        <td>&#8377; {item.price}</td>
                                        <td>{item.qty}</td>
                                        <td>&#8377; {item.qty * item.price}</td>
                                        <td>
                                            <button onClick={() => deleteItem(item)} className="btn btn-danger btn-sm">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colSpan="4">Total</th>
                                    <th>&#8377; {state.cart.reduce(myfun, 0)}</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="col-md-5">
                        <h4>Address & Payment</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" name="city" value={address.city} onChange={handleAddressInput} className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label>State</label>
                                <input type="text" name="state" value={address.state} onChange={handleAddressInput} className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label>Zip</label>
                                <input type="text" name="zip" value={address.zip} onChange={handleAddressInput} className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label>Country</label>
                                <input type="text" name="country" value={address.country} onChange={handleAddressInput} className="form-control" required />
                            </div>
                            <h5>Payment Details</h5>
                            <div className="form-group">
                                <label>Card No</label>
                                <input type="text" name="cardno" value={payment.cardno} onChange={handlePaymentInput} className="form-control" maxLength="16" required />
                            </div>
                            <div className="form-group">
                                <label>Name on Card</label>
                                <input type="text" name="nameoncard" value={payment.nameoncard} onChange={handlePaymentInput} className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label>Expiry Date</label>
                                <input type="month" className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label>CVV</label>
                                <input type="text" name="cvv" value={payment.cvv} onChange={handlePaymentInput} className="form-control" maxLength="3" required />
                            </div>
                            <div className="form-group">
                                <label>Total Amount</label>
                                <input type="text" value={payment.amount} className="form-control" readOnly />
                            </div>
                            <button type="submit" className="btn btn-success btn-block">Place Order</button>
                        </form>
                    </div>
                </div>
            ) : (
                <h3 className="text-center text-muted">No Bookings Available</h3>
            )}
        </div>
    );
}

export default ViewCart;
