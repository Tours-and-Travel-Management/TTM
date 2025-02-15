import axios from "axios";
import { useEffect, useState } from "react";

function CustomerProfile() {
  const [uname, setUname] = useState(sessionStorage.getItem("uname"));
  const id = sessionStorage.getItem("id");

  const [user, setUser] = useState({
    id: id,
    name: "",
    city: "",
    userid: "",
    pwd: "",
    phone: "",
    gender: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:9090/api/customers/${id}`).then((resp) => {
      setUser(resp.data.data);
    });
  }, [id]);

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:9090/api/customers/${id}`, user).then(() => {
      alert("Profile updated successfully");
      setUname(user.name);
    });
  };

  return (
         


    
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1502126324834-38f8e02d7160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      
      <div className="container p-4"       style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "20%", // Full viewport height
          width: "50%",  // Full viewport width
        }}>
        <div className="card shadow-lg bg-light p-4"
        >
          {/* <h4 className="text-center text-primary border-bottom pb-2">Customer Profile</h4> */}
          {/* <h4 className="text-center">Welcome {user.name}</h4>
          <p className="text-center mb-3">City: {user.city}</p>
          <p className="text-center">Email: {user.userid}</p>
          <p className="text-center">Phone: {user.phone}</p> */}
                <div className="card shadow-lg bg-light p-4 " style={{ width: "100%", maxWidth: "450px", background: "rgba(255, 255, 255, 0.9)", borderRadius: "15px", position:"center" }}>
                <div className="card-body text-center" >
                    {/* <h4 className="mb-3" style={{ color: "green", borderBottom: "2px solid green", display: "inline-block" }}>Guide Profile</h4> */}
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" className="img-fluid rounded-circle mb-3" style={{ width: "100px" }} />
                    <h5 className="fw-bold">Welcome, {user.name}</h5>
                    <p className="text-muted mb-1"><i className="bi bi-geo-alt-fill"></i> City: {user.city}</p>
                    <p className="text-muted mb-1"><i className="bi bi-envelope-fill"></i> Email: {user.userid}</p>
                    <p className="text-muted mb-1"><i className="bi bi-telephone-fill"></i> Contact: {user.phone}</p>
                </div>
            </div>
          <hr />

          <h5 className="text-center">Update Your Profile</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Customer Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={user.name}
                onChange={handleInput}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <span>
              <label className="form-label">City</label>

              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                value={user.city}
                onChange={handleInput}
                className="form-control"
              />
              </span>
            </div>

            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select
                required
                name="gender"
                value={user.gender}
                onChange={handleInput}
                className="form-control"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="text"
                readOnly
                name="userid"
                value={user.userid}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="number"
                name="phone"
                placeholder="Enter your phone"
                value={user.phone}
                onChange={handleInput}
                className="form-control"
              />
            </div>

            <button className="btn btn-primary w-100">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CustomerProfile;
