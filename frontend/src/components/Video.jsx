import React from "react";
import { useLocation } from "react-router-dom";
import video1 from "../components/video1.mp4";
import video2 from "../components/video2.mp4";
import video01 from "../components/video01.mp4"
import video3 from "../components/video3.mp4";
import video4 from "../components/video01.mp4";
import video5 from "../components/video5.mp4";
import video6 from "../components/video6.mp4";




const Video = () =>{
    const location = useLocation();
    const searchParams=new URLSearchParams(location.search);
    const category=searchParams.get('cat');
    const getVideo=()=>{
        switch(category){
            case "Himalyan Treks":
                return video2;
         case "Jungle Safari":
        return video1;
      case "Local Treks":
        return video3;
      case "Biking":
        return video4;
      case "Winter Treks":
        return video5;
      case "Adventure Sports":
        return video6;
      default:
        return video01;

        }
    }

    return(
        <div className="main bg-dark" >
        <video src={getVideo()} autoPlay loop muted />
        <div className="content position-absolute" style={{ background: "transparent" }}>
        <h1  style={{fontFamily:"inherit",fontSize:"100%" ,color:"white", animation: "typing 3.5s steps(40, end), blink-caret .75s step-end infinite"}}>
        Jagged peaks against the grey,
Where eagles circle, soar, and sway.
The wind it howls a lonely song,
Where ancient rocks have stood so long.
<br/>
I climb the heights, with breath that strains,
Through fields of snow, and icy plains.
The world below, a distant hum,
As to the mountain's will I come.</h1>
        </div>
        </div>
    )
}

export default Video