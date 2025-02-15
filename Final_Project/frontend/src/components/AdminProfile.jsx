import axios from "axios"
import { useState } from "react"

function AdminProfile(){
    const userid=sessionStorage.getItem("userid")
    const uname=sessionStorage.getItem("uname")
    const [user,setUser]=useState({
        "uname":uname,
        "userid":userid,
        "pwd":""        
    })

    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault() 
        axios.post("http://localhost:9090/api/admin",user)
        .then(resp=>{
            console.log(resp)
            alert("Profile updated successfully")   
            sessionStorage.setItem("uname",user.uname)         
        })
        .catch(error=>console.log("Error",error))   
    }

    return (
        // <div className="container-fluid">
        //     <h4 className="p-2 text-white text-center">Welcome {user.uname}</h4>
        //     <div className="row">
        //         <div className="col-sm-5 mx-auto">
        //             <div className="card shadow bg-dark text-white">
        //                 <div className="card-body">
        //                 <form onSubmit={handleSubmit}>
        //                     <div className="form-group form-row">
        //                         <label className="col-sm-4 form-control-label">Email Id</label>
        //                         <div className="col-sm-8">
        //                             <input type="text" name="userid" readOnly value={user.userid} onChange={handleInput} className="form-control" />                            
        //                         </div>                        
        //                     </div>
        //                     <div className="form-group form-row">
        //                         <label className="col-sm-4 form-control-label">Name</label>
        //                         <div className="col-sm-8">
        //                             <input type="text" name="uname" value={user.uname} onChange={handleInput} className="form-control" />                            
        //                         </div>                        
        //                     </div>
        //                     <div className="form-group form-row">
        //                         <label className="col-sm-4 form-control-label">Password</label>
        //                         <div className="col-sm-8">
        //                             <input type="password" name="pwd" value={user.pwd} onChange={handleInput} className="form-control" />                            
        //                         </div>                        
        //                     </div>
        //                     <button className="btn btn-primary float-right">Update Profile</button>
        //                 </form>
        //                 </div>
        //             </div>
                
        //         </div>
        //     </div>
            
        // </div>
        

        <div className="" style={{ backgroundImage: `url("https://p4.wallpaperbetter.com/wallpaper/1013/975/639/accomplishment-adult-adventure-backpacker-wallpaper-preview.jpg")`,backgroundSize:"cover"}}> 
        
        <div className="col-sm-6 mx-auto  " style={{ height:"600px", }}>
          <div className=" text-center p-4 font-weight-bold ">
          <h4  style={{color:"black",borderBottom:"2px solid green",width:"300px",margin:"auto"}}>Admin Profile Page</h4>

                <br/>
                <h4>Welcome {user.uname}</h4>
                {/* <h5>City : {user.city}</h5> */}
                {/* <h5>Email Id : {user.emailid}</h5>
                <h5>Contact No : {user.phone}</h5> */}
                
            </div>
        </div>
        </div>
    )
}

export default AdminProfile;
