import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  Moment  from 'react-moment';

function MyEvents(){
    const guideid=sessionStorage.getItem("id");
    const [events,setEvents]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:9090/api/events?guideid="+guideid)
        .then(resp=>{
            console.log(resp.data)
            setEvents(resp.data.data)
            console.log(events)
        })
    },[])

    const deleteEvent = (eventid)=>{
        let resp=window.confirm('Are you sure to delete this Event ?');
        if(resp){
            axios.delete("http://localhost:9090/api/events/"+eventid)
            .then(resp=>{
                alert("Event deleted successfully")
                axios.get("http://localhost:9090/api/events?guideid="+guideid)
                .then(resp=>{
                    console.log(resp.data)
                    setEvents(resp.data.data)
                    console.log("event data ")
                    console.log(events)
                })
            })            
        }
    }
    
    return (

 
        <div className="" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,backgroundSize:"cover"}}> 


        <div className=" bg-transparent text-dark changesize" style={{  }}>


        <div className="col-sm-6 mx-auto" style={{ height:"563px" }}>
            <h4 className="text-center p-2" style={{ color:"black" }}>

                Events List

            </h4>
            <table className="table table-bordered table-transparent " style={{ width:"1000px", marginLeft:"-170px" }}>
                <thead className="table-transparent">
                    <tr className="table-success">
                        
                        <th>Name</th>
                        <th>Category</th>
                        <th>Event Date</th>
                        <th>Location</th>
                        <th>Price</th>
                        <th>Action</th>                                
                    </tr>
                </thead>
                <tbody>
                {events.map(x=>(
                    <tr class="table-danger" key={x.eventid}>
                        <td><img width="100" src={"http://localhost:9090/"+x.photo1} className="img-thumnail"  alt=""/>{x.eventname}</td>
                        <td>{x.eventcat}</td>
                        <td><Moment format="ddd, DD-MMM-YYYY">{x.date}</Moment></td>
                        <td>{x.location}</td>
                        <td>{x.price}</td>
                        <td>
                            <Link to={"/edit/"+x.eventid} className="btn btn-primary btn-sm mr-2">Edit</Link>
                            <button onClick={()=>deleteEvent(x.eventid)} className="btn btn-danger btn-sm">Delete</button>
                        </td>                                
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        
        </div>
        </div>
          
    )
}

export default MyEvents;