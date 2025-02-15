import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Moment from "react-moment";

function MyOrders(){
    const [orders,setOrders]=useState([])
    const [show,setShow]=useState(false)
    const [details,setDetails]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:9090/api/orders?custid="+sessionStorage.getItem("id"))
        .then(resp=>{
            console.log(resp.data)
            setOrders(resp.data.data)
        })
    },[]);

    const showDetails=(orderid)=>{
        axios.get("http://localhost:9090/api/orders/"+orderid)
        .then(resp=>{
            console.log(resp.data)
            setDetails(resp.data.data.details)
        })
        setShow(true)
    }
    
    return (
        

        <div className="" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 ")`,backgroundSize:"cover",height:"563px"}}> 

<div className="container-fluid">
<div className="row">
         
                <div className="col-sm-6" style={{paddingLeft:"30px" }}>
                <h4 className="p-2">My Purchased Orders</h4>
                <table className="table table-info table-sm table-dark table-striped">
                    <thead  table-dark >
                        <tr>
                            <th>Id</th>
                            <th>Order Date</th>
                            <th>Amount</th> 
                            <th>Action</th>                       
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(x=>(
                            <tr key={x.orderid}>
                                <td>{x.orderid}</td>
                                <td><Moment format="ddd, DD-MMM-YYYY">{x.orderDate}</Moment></td>
                                <td>&#8377; {x.payment.amount}</td>
                                <td><button onClick={e=>showDetails(x.orderid)} className="btn btn-primary btn-sm">Show Details</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>  
                </div>
                <div className="col-sm-6" style={{paddingRight:"30px" }}>
                    {show ? <>
                    <h4 className="p-2">Order Details</h4>
                    <table className="table table-bordered table-sm table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>No of Person</th>
                            </tr>
                        </thead>
                        <tbody>
                            {details.map(x => (
                                <tr>
                                    <td>{x.event.eventid}</td>
                                    <td><img className="mr-2 float-left" src={"http://localhost:9090/"+x.event.photo1} width="100" />
                                    {x.event.eventname}<br/>
                                    Category: {x.event.eventcat}<br/>
                                    location: {x.event.location}<br/>
                                    </td>
                                    <td>{x.event.price}</td>
                                    <td>{x.qty}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </> : ''}
                </div>
            </div>                
                              
        </div>
        </div>
        
    )
}
export default MyOrders;