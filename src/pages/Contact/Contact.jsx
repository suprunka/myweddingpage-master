import React, { useEffect, useState } from 'react'
import { Row, Col, Modal } from 'reactstrap'
import Container from '../../components/Container'
import Selector from "../../components/Selector"
import Form from './Form';
import patkaimg1 from "../../assets/pics/patka1.jpg"
import patkaimg2 from "../../assets/pics/patka3.jpg"
import marcinimg2 from "../../assets/pics/marcin2.jpg"
import marcinimg1 from "../../assets/pics/marcin1.jpg"
import logo from "../../assets/logopat.jpg"
import {isMobile} from 'react-device-detect';
import { useDispatch } from 'react-redux';
import { cleanMessageStatus } from '../../redux/actions/pageActions';
import MessageSentModal from "./MessageSentModal"
import { useSelector } from 'react-redux';
const Selection = React.forwardRef((props, ref) => {
    const [mIndex, setMarcinImg] = useState(0)
    const [pIndex, setPIndex] = useState(0)
    const marcinImgs = [ marcinimg2, marcinimg1]
    const patkaImgs = [patkaimg1, patkaimg2]
    const messageSentSuccess = useSelector(state => state.page.messageSentSuccess)
  const dispatch = useDispatch()

  useEffect(() => {
    const interval = setInterval(() => {
        setMarcinImg(img => img + 1);
        setPIndex(img => img + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

const handleInputChange= ()=>{
 dispatch(cleanMessageStatus())
}
useEffect(()=>{
    if(isMobile){
        const timeOutId = setTimeout(() => dispatch(cleanMessageStatus()), 3500);
        return () => clearTimeout(timeOutId);
    }
},[messageSentSuccess])

  console.log(messageSentSuccess)
return(
<React.Fragment>

<Container backgroundColor="#fff">
    
    <div  className=""  ref={ref}>

 <Selector>
<Row >
<Col sm={6} >
  
    <h4 className="pt-4 " data-aos="fade-right"  style={{color:"#e48432"}}>
        BEZPOŚREDNI KONTAKT:
    </h4>
    <Row className="mt-6">

        <Col sm={12} md={12} style={{display:"flex"}}>
        <div class="bussinessCard">
            <img className="image" alt="" src={patkaImgs[pIndex%2]}  style={{width:"100px", height:"100px", marginRight:"10px"}}/>
            <div class="overlay">
                <img alt="" className="image" src={patkaimg2} style={{width:"100px", height:"100px", marginRight:"10px"}}/>
             </div>
        </div>
        <div>
        <p>Patrycja</p>
        <p>+45 60 90 81 20</p>
        <p>patrycja.suprun@gmail.com</p>
        </div>
        </Col>
        <Col sm={12} md={12} style={{display:"flex"}}>
        <div class="bussinessCard">
            <img className="image" alt="" src={marcinImgs[mIndex%2]} style={{width:"100px", height:"100px", marginRight:"10px"}}/>
            <div class="overlay">
                <img alt="" className="image" src={marcinimg1} style={{width:"100px", height:"100px", marginRight:"10px"}}/>
             </div>
        </div>        <div>
        <p>Marcin</p>
        <p>+45 60 90 21 80</p>
        <p>martexxx1234567@gmail.com</p>
        </div>
        </Col>
        <Col sm={12} className="mt-6">
        <p>Prosimy o potwierdzenie obecnosci do 1 sierpnia 2021.</p>
        </Col>

    </Row>


</Col> 
<Col sm={6}>
    <h4 className="pt-4 text-center" data-aos="fade-right"  style={{color:"#e48432"}}>
        W RAZIE PYTAŃ PISZ DO NAS
    </h4>
    {messageSentSuccess && isMobile && <p>Wiadomość została wysłana, odezwiemy się jak najszybciej.🤩</p>}

   <Form onInputChange={handleInputChange}/>
</Col>
</Row>
{isMobile &&<Row style={{placeContent:"center"}}>
<img src={logo} alt="" style={{width:"200px", alignSelf:"center"}}/>
</Row> }
{messageSentSuccess && !isMobile && <MessageSentModal toggle={()=>dispatch(cleanMessageStatus())}/>}

</Selector>
</div>
</Container>
</React.Fragment>
)})
export default Selection