 import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function GuideProfile() {
    const id = sessionStorage.getItem("id");
    const [user, setUser] = useState({
        id: "",
        name: "",
        city: "",
        userid: "",
        phone: ""
    });

    useEffect(() => {
        axios.get("http://localhost:9090/api/guide/" + id)
            .then(resp => {
                console.log(resp.data.data);
                setUser(resp.data.data);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, [id]);

    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center" 
            style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989_960_720.jpg")`, backgroundSize: "cover" }}>
            <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "450px", background: "rgba(255, 255, 255, 0.9)", borderRadius: "15px" }}>
                <div className="card-body text-center">
                    {/* <h4 className="mb-3" style={{ color: "green", borderBottom: "2px solid green", display: "inline-block" }}>Guide Profile</h4> */}
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" className="img-fluid rounded-circle mb-3" style={{ width: "100px" }} />
                    <h5 className="fw-bold">Welcome, {user.name}</h5>
                    <p className="text-muted mb-1"><i className="bi bi-geo-alt-fill"></i> City: {user.city}</p>
                    <p className="text-muted mb-1"><i className="bi bi-envelope-fill"></i> Email: {user.userid}</p>
                    <p className="text-muted mb-1"><i className="bi bi-telephone-fill"></i> Contact: {user.phone}</p>
                </div>
            </div>
        </div>
    );
}

export default GuideProfile;
