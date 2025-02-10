import axios from "axios"
import { useEffect, useState } from "react"

function GuideProfile(){
    const id=sessionStorage.getItem("id")
    const [user,setUser]=useState({
        "id":sessionStorage.getItem("id"),
        "name":"",
        "city":"",
        "userid":"",
        "pwd":"",
        "phone":""
    })

    useEffect(()=>{
        axios.get("http://localhost:9090/api/guide/"+id)
        .then(resp=>{
            console.log(resp.data.data)
            setUser(resp.data.data)
        })
    },[])
    return (
        
    

        <div className="" style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989_960_720.jpg")`,backgroundSize:"cover"}}> 
        
        <div className="col-sm-6 mx-auto " style={{ height:"563px" }}>
          <div className=" text-center p-2">
          <h4  style={{color:"black",borderBottom:"2px solid green",width:"300px",margin:"auto"}}>Guide Profile Page</h4>

                <br/>
                <h4>Welcome {user.name}</h4>
                <h5>City : {user.city}</h5>
                <h5>Email Id : {user.userid}</h5>
                <h5>Contact No : {user.phone}</h5>
          </div>
               
            </div>
            </div>
    
    )
}

export default GuideProfile;
