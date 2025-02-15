import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";

function TopSlider(){
    const settings = {
        //dots: true,
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        outerHeight:100
      };

    return (
        <>

            <Slider {...settings}>   
              <div className="wdt"style={{height:"400px"}}>  
              <img  className="img" alt="pic1" src= {'assets/banner5.jpg'}/>  
              </div >  
              <div className="wdt">  
              <img  className="img" alt="pic1" src= {'assets/banner2.jpg'}/>  
              </div> 
              <div className="wdt">  
              <img  className="img" alt="pic1" src= {'assets/banner3.jpg'}/>  
              </div> 
              <div className="wdt">  
              <img  className="img" alt="pic1" src= {'assets/banner4.jpg'}/>  
              </div> 
            </Slider>
        </>        
    );
}

export default TopSlider;