import React from 'react'
import { Row, Col } from 'reactstrap'
import Container from '../../components/Container'
import way from '../../assets/way.jpg'; // with require
import Selector from "../../components/Selector"
import {isMobile} from 'react-device-detect';

const Selection = React.forwardRef((props, ref) => 
<React.Fragment>
<Container  ref={ref} backgroundImage={way} color="white" >
 <Selector >
<Row style={{minHeight: '73vh'}}>

<Col sm={6}>
</Col>
<Col sm={1}></Col>

<Col sm={5}
data-aos="fade-right" 
data-aos-offset={isMobile? "0":"500"}
data-aos-duration={isMobile? "0":"1500"}
 className="transparentWhiteBg" >
    <p data-aos="fade-right" style={{color:"#d07c3f"}}>
        NASZA HISTORIA
    </p>
    <h2 data-aos="fade-right ">
    Razem nawet na koniec świata!
    </h2>
    <p className="mt-4 " data-aos="fade-right ">
    Ona, pilna uczennica, on szalony urwis- poznali się w szkole,
a chwilę poźniej wyjechali do Danii w pogoni za grubą kasą i sławą.
Niestety, ani kasy, ani sławy nie zdobyli, ale posiadają cos ważniejszego-
wykształcenie, nowe umiejętności oraz bagaż doświadczeń. Przeżyli razem  wiele
pięknych oraz tych mniej miłych chwil. Pewnego dnia Marcin postanowił wykonać
następny krok w ich relacji- podczas burzy w Tatrach postanowił spytać Patrcyje o rękę.
 Pogoda w górach zmieniła się diamteralnie i od tego momentu zaręczyn zawitało słońce! 
 Teraz zapraszamy Was na nasz ślub,
początek naszej wspólnej drogi.
    </p>

</Col> 
</Row>
</Selector>
</Container>
</React.Fragment>
)
export default Selection