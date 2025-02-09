import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import {useHistory,useParams,useLocation} from "react-router-dom";
import Event from "./Event";
import queryString  from "query-string";
import TopSlider from "./TopSlider";
import banner5 from '../components/banner5.jpg'
import Video from './Video';

function AllEvents(){
    const [events,setEvents]=useState([])
    const [totalPage,setTotalPage]=useState(0)
    const state=useSelector((state)=>state);
    const location=useLocation()
    const [item,setItem]=useState({})
    const [qty,setQty]=useState("")
    const dispatch=useDispatch()
    const history=useHistory()

    const [showDialog,setShowDialog]=useState("modal fade")
    const [display,setDisplay]=useState("none")
    
    const showModal=(event)=>{
        setShowDialog("modal fade show")
        setDisplay("block")
        setItem(event)
    }

    const checkItem =(eventid)=>{
        return state.cart.findIndex(x=>x.eventid===eventid)<0
    }

    const closeDialog=()=>{        
        setShowDialog("modal fade")
        setDisplay("none")
    }

    const loadDataFromServer=(page=0,pagesize=8)=>{
        axios.get("http://localhost:9090/api/events/paginated?page="+page+"&pagesize="+pagesize)
            .then(resp=>{
                // console.log(resp.data.total)
                // setEvents(resp.data.eventlist)
                // setTotalPage(Math.ceil(resp.data.total/pagesize))
                console.log(resp.data.data.total)
                setEvents(resp.data.data.eventlist)
                setTotalPage(Math.ceil(resp.data.data.total/pagesize))
                console.log(events)
            })
    }

    useEffect(()=>{
        console.log("I am here cat",location.search)
        let eventcat=queryString.parse(location.search)
        console.log(eventcat.cat)
        if(eventcat.cat!==undefined){
            axios.get("http://localhost:9090/api/events?cat="+eventcat.cat)
            .then(resp=>{
                console.log(resp.data)
                setEvents(resp.data.data)
                console.log(events)
            })
        }
        else {
            loadDataFromServer()
        }
    },[location])
    const addToCart=item=>{  
        if(sessionStorage.getItem("userid")==null){
            alert("Please login first to book event")
            history.push("/clogin")
        }
        else if(sessionStorage.getItem("role")!=="Customer"){
            alert("Only customer can book event")
        }      
        else{            
            if(checkItem(item.eventid))
            {     
                showModal() 
                setDisplay("none")
                setShowDialog("modal fade")
                item.qty=qty  
                    if((item.qty!=="")){  
                        dispatch({type:'AddItem',payload:item})
                        alert("Item added to cart successfully")
                    }else{
                        alert("Enter valid No of person !")
                    }
               
            }
            else{   
                alert("Item already in cart")
            }
        }
    }



    const handlePageClick=({selected:selectedPage})=>{
        loadDataFromServer(selectedPage)
    }

   


   
    
    return (
        <>   
        <Video/>
                
        <div className="container-fluid" style={{width:"100%"}}>
            <div className=" bg-white text-white" style={{ backgroundColor:"white" ,width:"auto"}}>
                {/* <div className="card-body"> */}
                    <h3 style={{marginLeft:"609px",color:"black"}}>Our Popular Treks</h3>
                    <div style={{margin:"25px", marginBottom:"0px"}} >

                <ReactPaginate 

                    previousLabel={"🢀"}
                    nextLabel={"🢂"}
                    containerClassName={"pagination"}
                    pageCount={totalPage}
                    onPageChange={handlePageClick}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"} />
                    <div className="row">
                    {events?.map(x=>(
                        <Event key={x.eventid} x={x} showModal={showModal} />
                    ))}

                    </div>

                    </div>
                    
                </div>
            </div> 
            {display=="block"?( 
            <div className={showDialog} style={{zIndex:"1000",display:display}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>Book This Event</h5>
                            <button onClick={closeDialog} className="close">&times;</button>
                        </div>
                        <div className="modal-body" >
                        {/* <div className="modal-body vertical-scrollable"> */}
                            <div className="d-flex">
                                {/* <img src={"http://localhost:9090/"+item.photo1} style={{width:"350px" ,height:"350px"}}  alt=""/> */}
                                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                        <img src={"http://localhost:9090/"+item.photo1} style={{width:"350px" ,height:"350px"}}  alt=""/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src={"http://localhost:9090/"+item.photo2} style={{width:"350px" ,height:"350px"}}  alt=""/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src={"http://localhost:9090/"+item.photo3} style={{width:"350px" ,height:"350px"}}  alt=""/>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                    </div>
                                <div >
                                <div className="ml-5 " style={{overflowY : "scroll",overflowX:"auto ",height:"400px"}}>
                                    <h4 className="p-2 text-warning">{item.eventname}</h4>
                                    {/* <h5 className="px-2">photo: {item.photo}</h5> */}
                                    <h5 className="px-2">Category: {item.eventcat}</h5>
                                    <h5 className="px-2">Guide: {item.guideName}</h5>
                                    <h5 className="px-2">Price: &#8377; {item.price}</h5>
                                    <h5 className="px-2">No of Days: ; {item.noofdays}</h5>
                                    <h5 className="px-2">Description :</h5><h6>{item.description}</h6>
                                    
                                    <h5 className="px-2">Day Wise Schedule :</h5><h6>{item.dailywiseschedule}</h6>
                                    <h5 className="px-2">Things to carry :</h5><h6>{item.thingstocarry}</h6>
                                    {/* <h5 className="px-2">description :{item.description}</h5> */}
                                    
                                    {/* <h5 className="px-2">Price: &#8377; {item.price}</h5>
                                    <label> Enter Number Of Person</label><br /> */}
                                  

                                    {/* <input type="number" value={qty} onChange={e=>setQty(e.target.value)}/> */}
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="modal-footer">
                       
                                    <label> Enter Number Of Person</label><br />
                                    {/* <input type="number" value={qty} onChange={e=>setQty(e.target.value)}/> */}
                                    <input type="number" 
                                    value={qty} onChange={(e) => {
                                        const reg = /^$|^[1-9]+$/;
                                        const newValue = e.target.value;
                                        if (reg.test(newValue)) {
                                         setQty(newValue);
                                        }
                                      }
                                    } required/>
                                    <span> <strong>Total bill : {item.price * qty}</strong></span>

                                    
                            <button onClick={e=>addToCart(item)} className="btn btn-warning btn-sm">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>) : ""}
        {/* </div> */}
        </>
    )
}

export default AllEvents;