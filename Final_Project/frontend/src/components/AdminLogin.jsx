import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import loginvalidation from "../loginvalidation"


function AdminLogin(){
    const dispatch=useDispatch()
    const [user,setUser]=useState({
        "userid":"",
        "pwd":""
    })
    const [submitted,setSubmitted]=useState(false)
    const [errors,setErrors]=useState({})
    const [errmsg,setErrmsg]=useState()
    const history=useHistory()

    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=e=>{
        e.preventDefault()
        setErrors(loginvalidation(user))    
        setSubmitted(true)
    }

    useEffect(()=>{
        console.log(errors)
        if(Object.keys(errors).length===0 && submitted){
            console.log(user)
            axios.post("http://localhost:9090/api/admin/validate",user)
            .then(resp=>{
                let result=resp.data.data;
                console.log(resp.data.data)
                sessionStorage.setItem("userid",result.userid)
                sessionStorage.setItem("uname",result.uname)
                sessionStorage.setItem("role","Admin")
                dispatch({type:'IsLoggedIn'})
                history.push("/aprofile")
            })
            .catch(error=>{
                console.log("Error",error);
                setErrmsg("Invalid username or password..!!")
            })            
        }
    },[errors])


    return (

  

 <div className="" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,backgroundSize:"cover"}}> 

            {/* //    <div className="wdt"style={{height:"200px",width:"200" }}>  
            //   <img  className="img" alt="pic1" src= {'assets/Admin login.avif'}/>  
            //    </div >   */}
            <div className="bg-transparent text-dark changesize" style={{ }}>
   
   
            <div className="col-sm-6 mx-auto" style={{ height:"563px" }}>


                <h4 className="text-center p-1" style={{ color:"black" }}>
                    Admin Login 
                </h4>
                <form onSubmit={handleSubmit}>                 
                <div className="form-group form-row ">
                    <label className="col-sm-4 form-control-label font-weight-bold">Email Id</label>
                    <div className="col-sm-10">
                        <input type="text"placeholder="Enter your email id" name="userid" value={user.userid} onChange={handleInput} className="form-control" />
                        {errors.userid && <small className="text-danger float-right">{errors.userid}</small>}
                    </div>
                    
                </div>                    
                <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label font-weight-bold">Password</label>
                    <div className="col-sm-10">
                        <input type="password" placeholder="Enter your password" name="pwd" value={user.pwd} onChange={handleInput} className="form-control" />
                        {errors.pwd && <small className="text-danger float-right">{errors.pwd}</small>}
                    </div>
                </div>                    
                <button className="btn btn-primary float-right mt-3" style={{ marginRight:"120px" }}>Login Now</button>
                </form>
                <div className="clearfix"></div>
                {errmsg && <p className="alert alert-danger mt-4 text-center font-weight-bold">{errmsg}</p>}
            </div>
        </div>
    </div>

    
    );
}

export default AdminLogin;