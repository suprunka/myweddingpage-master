import React, { useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import Container from '../../components/Container'
import way from '../../assets/pics/30m.jpg'; // with require
import Selector from "../../components/Selector"
import { useTrail, a } from 'react-spring'

const WelcomeSelectionBigger =  React.forwardRef((props, ref) => 
{
  
    return(
<React.Fragment>
<Container 
className="welcomeCont"
ref={ref} 
backgroundImage={way}>
    {/* //img is fine til 1070px */}
 <Selector className="center">
    
     <div className="text-beige mt-6">

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
export default WelcomeSelectionBigger