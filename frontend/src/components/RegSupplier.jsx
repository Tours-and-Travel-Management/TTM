import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import uservalidation from "../uservalidation"
// import ReCAPTCHA from "react-google-recaptcha"
function RegSupplier()
{
    const history=useHistory()
    const [submitted,setSubmitted]=useState(false)
    const [Verifed,setVerifed]=useState(false);
    const [user,setUser]=useState({
        "name":"",
        "city":"",
        "userid":"",
        "pwd":"",
        "cpwd":"",
        "phone":""
    })
    const [errors,setErrors]=useState({})
 
    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setErrors(uservalidation(user))   
        setSubmitted(true)     
    }

    useEffect(()=>{
        console.log(errors)
        if(Object.keys(errors).length===0 && submitted){
            console.log(user)
            axios.post("http://localhost:9090/api/guide",user)
            .then(resp=>{
                console.log(resp)
                alert("Guide registered successfully")
                history.push("/slogin")
            })
            .catch(error=>{
                console.log("Error",error)
                alert("Guide registration Failed")
            })            
        }
    },[errors])

    function onChange(value) {
        console.log("Captcha value:", value);
        setVerifed(true);
      }


    return (

    
        <div className="" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/friends-exploring-foreign-city_329181-8513.jpg?w=996&t=st=1664117508~exp=1664118108~hmac=357e10dbb1d4f860e75e3435f31cb231f4ea6d7089548ec05f9073de9ed7749d")`,backgroundSize:"cover"}}> 
       

       
        <div className="col-sm-6 mx-auto" style={{ height:"563px" }}>
                     <h4 className="text-center p-2  " style={{ color:"black" }}>
                        Guide Registration Form
                    </h4>
                    <form onSubmit={handleSubmit} className="needs-validation" novalidate>
                    <div className="form-group form-row">

                        <label className="col-sm-4 form-control-label font-weight-bold">Guide Name</label>

                        <div className="col-sm-8">
                            <input type="text" name="name" value={user.name} onChange={handleInput} className="form-control"
                                placeholder="Enter Guide Name" 
                                minLength="2" maxLength="60"
                                required
                            />
                            
                            {errors.name && <small className="text-danger float-right">{errors.name}</small>}
                        </div>                        
                    </div>
                    <div className="form-group form-row">

                        <label className="col-sm-4 form-control-labe font-weight-bold">City</label>

                        <div className="col-sm-8">
                            <input type="text" name="city" value={user.city} onChange={handleInput} className="form-control" 
                                  placeholder="Enter City"
                                  minLength="2" maxLength="40"
                                  required
                            />
                            {errors.city && <small className="text-danger float-right">{errors.city}</small>}
                        </div>
                        
                    </div>
                    <div className="form-group form-row">

                        <label className="col-sm-4 form-control-label font-weight-bold">Email Id</label>

                        <div className="col-sm-8">
                            <input type="email" name="userid" value={user.userid} onChange={handleInput} className="form-control" 
                             
                              placeholder="example@gmail.com"
                              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                              required
                              />
                            {errors.userid && <small className="text-danger float-right">{errors.userid}</small>}
                        </div>
                        
                    </div>
                    <div className="form-group form-row">

                        <label className="col-sm-4 form-control-label font-weight-bold">Phone</label>

                        <div className="col-sm-8">
                            <input type="tel" maxLength="10" name="phone" value={user.phone} onChange={handleInput} className="form-control" 
                                placeholder="Enter Phone Number"
                                pattern="[0-9]+(\.[0-9][0-9]?)?"
                                required
                            />
                            {errors.phone && <small className="text-danger float-right">{errors.phone}</small>}
                        </div>
                        
                    </div>
                    <div className="form-group form-row">

                        <label className="col-sm-4 form-control-label font-weight-bold">Password</label>

                        <div className="col-sm-8">
                            <input type="password" name="pwd" value={user.pwd} onChange={handleInput} className="form-control" 
                                placeholder="Enter Password"
                                minLength="8"
                                required
                            />
                            {errors.pwd && <small className="text-danger float-right">{errors.pwd}</small>}
                        </div>
                    </div>
                    <div className="form-group form-row">

                        <label className="col-sm-4 form-control-label font-weight-bold">Confirm Password</label>

                        <div className="col-sm-8">
                            <input type="password" name="cpwd" value={user.cpwd} onChange={handleInput} className="form-control" 
                                placeholder="Enter Conform Password"
                                minLength="8"
                                required
                            />
                            {errors.cpwd && <small className="text-danger float-right">{errors.cpwd}</small>}
                        </div>
                    </div>

                    {/* <div className="" style={{marginLeft:"273px"}} >
                        <ReCAPTCHA className="col-sm-8"
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                onChange={onChange}
                        />
                    </div> */}
                    <button className="btn btn-primary float-right" >Register Now</button>

                    </form>
                </div>
            </div>
     
    )
}

export default RegSupplier;
