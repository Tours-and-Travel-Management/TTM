
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Footer(){
  const state=useSelector((state)=>state);
  console.log("LoggedIn ",state.loggedin)
  const userRole = sessionStorage.getItem("role");
  return(
    <>
<div className="jumbotron p-3 mb-0  text-light" style={{
          margin:"0%",
          top:"0%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50%", 
          width: "100%",
          backgroundColor:"#0529f2",  
          // backgroundImage:"url(banner5.jpg)",
          
          
        }}>
          

    <footer className="bd-footer py-4 py-md-5 mt-5"
            style={{backgroundColor: "#1c2331;"}}
            >
     <div className="container py-4 py-md-5 px-4 px-md-3">      
      <section className="">
        <div className="container text-center text-md-start ">
      
          <div className="row mt-3">
   
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          

              <h6 className="text-uppercase fw-bold">HIKERRIDER</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
              <p className="text-left">

              Jagged peaks against the grey,
 Where eagles circle, soar, and sway.
 The wind it howls a lonely song,
 Where ancient rocks have stood so long.

 I climb the heights, with breath that strains,
 Through fields of snow, and icy plains.
 The world below, a distant hum,
 As to the mountain's will I come.

              </p>
            </div>
         

          
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
           
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
              />
              <p >
           
              <Link className="nav-link dropdown-toggle text-white fw-bold" to="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</Link>
          
              </p>
              <p>
                <ul>
                <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle text-white " to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Catogeries
                        </Link>
                        <div className="dropdown-menu text-dark " aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to="/cats?cat=Himalyan Treks">Himalyan Treks</Link>
                        <Link className="dropdown-item" to="/cats?cat=Jungle Safari">Jungle Safari</Link>                        
                        <Link className="dropdown-item" to="/cats?cat=Local Treks">Local Treks</Link>                        
                        <Link className="dropdown-item" to="/cats?cat=Biking">Biking</Link>                        
                        <Link className="dropdown-item" to="/cats?cat=Winter Treks">Winter Treks</Link>                        
                        <Link className="dropdown-item" to="/cats?cat=Adventure Sports">Adventure Sports</Link> 
                       
                        </div>
                    </li>
                    </ul>
              </p>
              <p>
                <ul><li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-white fw-bold" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Login
                </Link>
                <div className="dropdown-menu text-dark " aria-labelledby="navbarDropdownMenuLink" >
                {/* <Link className="dropdown-item " to="/alogin">Admin</Link> */}
                <Link className="dropdown-item " to="/slogin">Login</Link>                        
                {/* <Link className="dropdown-item " to="/clogin">Customer</Link>                         */}
                </div>
            </li>
            </ul>
                
              </p>
              <p>
                
                <ul>
                  <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle text-white fw-bold" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                Register
                </Link>
                  <div className="dropdown-menu text-dark" aria-labelledby="navbarDropdownLink">
                    <Link className="dropdown-item pr-0" to="/regsupplier">Guide</Link>
                    <Link className="dropdown-item pr-0" to="/register">Customer</Link>
                  </div>
                  </li>
                </ul>
              </p>
            </div>
         

          
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
              <p><i className="fas fa-home mr-3"></i>  </p>
              <p><i className="fas fa-envelope mr-3"></i> hikerrider@gmail.com</p>
              <p><i className="fas fa-phone mr-3"></i> + 01 930 910 1745</p>
              <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
            </div>
       
          </div>
      
        </div>
     </section>
    

   
    <div
         className="text-center p-3"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
         >
      © 2025 Copyright:
      <Link  to="">hikerrider.com</Link>
    </div>
    </div>   
  </footer>


</div>
</>
);
}



export default Footer;



// import { Link } from "react-router-dom";

// function Footer(){
//   return(
//     <>
//     <div className="container-fluid  my-5 bg-dark text-light" style={{backgroundColor: "#1c2331;",marginTop:"0px"}}>

//     <footer className="bd-footer py-4 py-md-5 mt-5"
//             style={{backgroundColor: "#1c2331;"}}
//             >
//      <div className="container py-4 py-md-5 px-4 px-md-3">      
//       <section className="">
//         <div className="container text-center text-md-start ">
      
//           <div className="row mt-3">
   
//             <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          

//               <h6 className="text-uppercase fw-bold">HIKERRIDER</h6>
//             <hr
//                 className="mb-4 mt-0 d-inline-block mx-auto"
//                 style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
//                 />
//               <p className="text-left">

//               Jagged peaks against the grey,
// Where eagles circle, soar, and sway.
// The wind it howls a lonely song,
// Where ancient rocks have stood so long.

// I climb the heights, with breath that strains,
// Through fields of snow, and icy plains.
// The world below, a distant hum,
// As to the mountain's will I come.

//               </p>
//             </div>
         

          
//             <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
           
//               <h6 className="text-uppercase fw-bold">Useful links</h6>
//               <hr
//                 className="mb-4 mt-0 d-inline-block mx-auto"
//                 style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
//               />
//               <p>
//                 <Link to="/">Home</Link>
//               </p>
//               <p>
//                 <ul>
//               <li className="nav-item dropdown">
//                         <Link className="nav-link dropdown-toggle text-white fw-bold" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                         Catogeries
//                         </Link>
//                         <div className="dropdown-menu text-dark fs-1" aria-labelledby="navbarDropdownMenuLink">
//                         <Link className="dropdown-item" to="/cats?cat=Himalyan Treks">Himalyan Treks</Link>
//                         <Link className="dropdown-item" to="/cats?cat=Jungle Safari">Jungle Safari</Link>                        
//                         <Link className="dropdown-item" to="/cats?cat=Local Treks">Local Treks</Link>                        
//                         <Link className="dropdown-item" to="/cats?cat=Biking">Biking</Link>                        
//                         <Link className="dropdown-item" to="/cats?cat=Winter Treks">Winter Treks</Link>                        
//                         <Link className="dropdown-item" to="/cats?cat=Adventure Sports">Adventure Sports</Link> 
                       
//                         </div>
//                     </li>
//                     </ul>
//               </p>
//               <p>
//                 <ul><li className="nav-item dropdown">
//                 <Link className="nav-link dropdown-toggle text-white  mr-3" to="" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
//                 Login
//                 </Link>
//                 <div className="dropdown-menu text-dark " aria-labelledby="navbarDropdownMenuLink" >
//                 <Link className="dropdown-item " to="/alogin">Admin</Link>
//                 <Link className="dropdown-item " to="/slogin">Guide</Link>                        
//                 <Link className="dropdown-item " to="/clogin">Customer</Link>                        
//                 </div>
//             </li>
//             </ul>
                
//               </p>
//               <p>
                
//                 <ul>
//                   <li className="nav-item dropdown">
//                     <Link className="nav-link dropdown-toggle text-white fw-bold mr-3 " to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                 Register
//                 </Link>
//                   <div className="dropdown-menu text-dark" aria-labelledby="navbarDropdownLink">
//                     <Link className="dropdown-item pr-0" to="/regsupplier">Guide</Link>
//                     <Link className="dropdown-item pr-0" to="/register">Customer</Link>
//                   </div>
//                   </li>
//                 </ul>
//               </p>
//             </div>
         

          
//             <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
//               <h6 className="text-uppercase fw-bold">Contact</h6>
//               <hr
//                 className="mb-4 mt-0 d-inline-block mx-auto"
//                 style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
//                 />
//               <p><i className="fas fa-home mr-3"></i>  </p>
//               <p><i className="fas fa-envelope mr-3"></i> hikerrider@gmail.com</p>
//               <p><i className="fas fa-phone mr-3"></i> + 01 930 910 1745</p>
//               <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
//             </div>
       
//           </div>
      
//         </div>
//      </section>
    

   
//     <div
//          className="text-center p-3"
//          style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
//          >
//       © 2025 Copyright:
//       <Link  to="">hikerrider.com</Link>
//     </div>
//     </div>   
//   </footer>


// </div>
// </>
// );
// }



// export default Footer;

