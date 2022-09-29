import react from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

import cyberpunk from "../../media/cyberpunk.jpeg"
import black from "../../media/user.png"
import gamepic1 from "../../media/gamepic1.jpg"
import gamepic2 from "../../media/gamepic2.jpg"
import gamepic3 from "../../media/gamepic3.jpg"
import gamepic4 from "../../media/gamepic4.jpg"


export default function CustomCarousel() {
  return (
    <div style={{margin:'1%',backgroundColor:'white', width:'50vw', alignSelf:'center'}}>
      <Carousel
        dynamicHeight={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={true}
        showIndicators={false}
        showArrows={false}
        showThumbs={false}
        interval={3000}>
        <div >
          <img src={gamepic1}/>
        </div>
        <div>
          <img src={gamepic2}/>
        </div>
        <div>
          <img src={gamepic3}/>
        </div>
        {/* <div>
          <img src={gamepic4}/>
        </div> */}

      </Carousel>
    </div>
  )
}