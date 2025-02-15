import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import eventvalidation from "./eventvalidation";

function EditEvent(){
    console.log("Edit Event page")
    const sellerid=sessionStorage.getItem("id")
    const {prodid}=useParams()
    const [product,setProduct]=useState({
        "eventid":prodid,
        "eventname":"",
        "eventcat":"",
        "photo":"",
        "price":"",
        "location":"",
        "guideId":sellerid
    })
    
    
    const [errors,setErrors]=useState({})
    const [submitted,setSubmitted]=useState(false)
    const history=useHistory()

    const handleInput=e=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }

    const handleSubmit=e=>{
        e.preventDefault()
        setErrors(eventvalidation(product))    
        setSubmitted(true)
    }
    
    useEffect(()=>{        
        console.log(errors)

        axios.get("http://localhost:9090/api/events/"+prodid)
        .then(resp=>{
            console.log(resp.data.data)
            setProduct(resp.data.data)
        })
        
        if(Object.keys(errors).length===0 && submitted){            
            console.log(product)
            axios.put("http://localhost:9090/api/events/"+prodid,product)
            .then(resp=>{
                let result=resp.data.data;
                console.log(result) 
                alert("Product saved successfully")               
                history.push("/myproducts")
            })
            .catch(error=>{
                console.log("Error",error);
                alert("Error saving product")
            })            
        }
    },[errors])
    return (
        <div className="container-fluid" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,backgroundSize:"cover"}}>
                    <div className="row">
                        <div className="col-sm-2">
                            {/* <img width="300" src={"http://localhost:9090/"+product.photo1} /> */}
                        </div>
                        <div className="col-sm-9">
                            <h4 className="text-center p-2 font-weight-bold">
                                Edit Event 
                            </h4>
                            <form onSubmit={handleSubmit}>
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label font-weight-bold">Event Name</label>
                                <div className="col-sm-8">
                                    <input type="text" name="eventname" value={product.eventname} onChange={handleInput} className="form-control" />
                                    {errors.eventname && <small className="text-danger float-right">{errors.eventname}</small>}
                                </div>
                                
                            </div>                            
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label font-weight-bold ">Category</label>
                                <div className="col-sm-8">
                                    <select name="eventcat" value={product.eventcat} onChange={handleInput} className="form-control">
                                        <option value="">Select Category</option>
                                        <option>Himalayan Trek</option>     
                                        <option>Jungle Safari</option>     
                                        <option>Local Treks</option>     
                                        <option>Biking</option>     
                                        <option>Winter Treks</option>     
                                        <option>Adventure Sports</option>     
                                    </select>   
                                    {errors.pcat && <small className="text-danger float-right">{errors.pcat}</small>}                    
                                </div>                        
                            </div>                            
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label font-weight-bold">Price</label>
                                <div className="col-sm-8">
                                    <input type="number" name="price" value={product.price} onChange={handleInput} className="form-control" />
                                    {errors.price && <small className="text-danger float-right">{errors.price}</small>}
                                </div>                                
                            </div>
                            
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label font-weight-bold">State</label>
                                <div className="col-sm-8">
                                <select name="location" value={product.location} onChange={handleInput} className="form-control">
                                        <option value="">Select State</option>
                                        <option>Andhra Pradesh</option>
                                        <option>Arunachal Pradesh</option>
                                        <option>Assam</option>
                                        <option>Bihar</option>
                                        <option>Chhattisgarh</option>
                                        <option>Goa</option>
                                        <option>Gujarat</option>
                                        <option>Haryana</option>
                                        <option>Himachal Pradesh</option>
                                        <option>Jharkhand</option>
                                        <option>Karnataka</option>
                                        <option>Kerala</option>
                                        <option>Madhya Pradesh</option>
                                        <option>Maharashtra</option>
                                        <option>Manipur</option>
                                        <option>Meghalaya</option>
                                        <option>Mizoram</option>
                                        <option>Nagaland</option>
                                        <option>Odisha</option>
                                        <option>Punjab</option>
                                        <option>Rajasthan</option>
                                        <option>Sikkim</option>
                                        <option>Tamil Nadu</option>
                                        <option>Telangana</option>
                                        <option>Tripura</option>
                                        <option>Uttar Pradesh</option>
                                        <option>Uttarakhand	</option>
                                        <option>West Bengal</option>
                                     

                                    </select>  
                                    {errors.pcat && <small className="text-danger float-right">{errors.pcat}</small>}                    
                                </div>                        
                            </div>  
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label font-weight-bold">Description</label>
                                <div className="col-sm-8">
                                    {/* <input type="text" name="eventname" value={event.eventname} onChange={handleInput} className="form-control" /> */}
                                    <textarea className="form-control" rows="5"  name="description" value={product.description} onChange={handleInput} style={{resize:"none"}}></textarea>
                                    {errors.description && <small className="text-danger float-right">{errors.description}</small>}
                                </div>
                                
                            </div>     
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label font-weight-bold">Number of days</label>
                                <div className="col-sm-8">
                                    <input type="number" name="noofdays" value={product.noofdays} onChange={handleInput} className="form-control" />
                                    {errors.noofdays && <small className="text-danger float-right">{errors.noofdays}</small>}
                                </div>                                
                            </div>    
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label font-weight-bold">Daily Schedule</label>
                                <div className="col-sm-8">
                                    {/* <input type="text" name="eventname" value={event.eventname} onChange={handleInput} className="form-control" /> */}
                                    <textarea className="form-control" rows="5"  name="dailywiseschedule" value={product.dailywiseschedule} onChange={handleInput} style={{resize:"none"}}></textarea>
                                    {errors.dailywiseschedule && <small className="text-danger float-right">{errors.dailywiseschedule}</small>}
                                </div>
                                
                            </div>    
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label font-weight-bold">Things to Carry</label>
                                <div className="col-sm-8">
                                    {/* <input type="text" name="eventname" value={event.eventname} onChange={handleInput} className="form-control" /> */}
                                    <textarea className="form-control" rows="5"  name="thingstocarry" value={product.thingstocarry} onChange={handleInput} style={{resize:"none"}}></textarea>
                                    {errors.thingstocarry && <small className="text-danger float-right">{errors.thingstocarry}</small>}
                                </div>
                                
                            </div>   
                                         
                            
                            <button className="btn btn-primary float-right ">Update Event</button>
                            </form>
                        </div>
                    </div>
                </div>
    )
}

export default EditEvent;
