import React, { useState } from 'react'
import Container from '../../components/Container'
import way from '../../assets/way.jpg'; // with require
import Selector from "../../components/Selector"
import Deck from "../../components/Images"
import icon from "../../assets/icons/swipe.png"
const Selection =()=> {
    const [displayText, setDisplayText] = useState(true)
return(
<React.Fragment>
<Container  backgroundColor="#fff">
 <Selector >
 <div id="imgs" >
 { displayText && <h3 data-aos="zoom-in" data-aos-duration="1000" className="skipBtn shimmer">
        <img alt="" src={icon} style={{width:"25px", height:"25px"}} />  PRZESUŃ MNIE 
     </h3>
     }
    <Deck setDisplayText={()=> setDisplayText(false)}/>

    </div>    
</Selector>

</Container>

</React.Fragment>

)
}
export default Selection    