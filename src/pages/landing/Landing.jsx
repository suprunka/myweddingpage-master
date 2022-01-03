import React, { useEffect, useRef } from 'react'
import WelcomeSelection from '../welcome'
import About from '../about'
import Navbar from '../../components/Navbar'
import { useParams } from 'react-router-dom'
import History from '../ourhistory'
import PicsFeed from '../picsfeed'
import Contact from '../Contact'
import Directions from '../map'
import Invitation from '../Invitation'
import News from '../News/News'
import WelcomeSelectionMobile from '../welcomMobile/WelcomSelectionMobile'


const Landing = ()=>{
    const welcomRef = useRef(null)
    const welcomMobileRef = useRef(null)
    // const aboutRef = useRef(null)
    const historyRef = useRef(null)
    const directionsRef = useRef(null)
    const contactRef = useRef(null)
   
    const list = [
                 {label:"Cześć", ref:welcomRef, refMobile:welcomMobileRef},
                 {label:"Nasza historia ", ref:historyRef},
                 {label:"Kontakt ", ref:contactRef},
                 {label:"Dojazd ", ref:directionsRef},
                ]
  
    return(
        <React.Fragment>
   
            <Navbar list={list}/>
            <WelcomeSelection ref={welcomRef} />
            <WelcomeSelectionMobile ref={welcomMobileRef} />
            <Invitation/>
            <About map={directionsRef}  info={contactRef} />
            <History ref={historyRef} />
            <PicsFeed  /> 
            <Directions  ref={directionsRef} />
            <Contact ref={contactRef} />

        </React.Fragment>
    )
}

export default Landing