import React, { useEffect } from 'react'
import Container from '../../components/Container'
import img20 from '../../assets/pics/30m.jpg'; // with require
import Selector from "../../components/Selector"

const WelcomeSelectionMobile =  React.forwardRef((props, ref) => 
{
  
    return(
<React.Fragment>
<Container 
    className="mobileWelcomeCont height-fitCnt"
    ref={ref} >
 <Selector>
     <img src={img20} alt="" className="mobileImgHeader" width="100"/>

     <div className="mobileSignatureHeader text-white">

     <p className="signature">Patrycja Suprun </p>
     <p className="signature"> & </p>
     <p className="signature">Marcin Karys</p>
     </div>
</Selector>
</Container>
</React.Fragment>
    )
}
//welcome page telefon- mniejsze zdjecie, dodaj zdjeci aofrmat tekstu zaproszenia.
)
export default WelcomeSelectionMobile