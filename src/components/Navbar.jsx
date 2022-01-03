import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router-dom";
import PM from "../assets/PM.png"
import {isMobile} from 'react-device-detect';

const Navbar = ({list}) =>{
    let history = useHistory();
    const [activeBar, setactiveBar] = useState(0)
    const [menuOpened, setMenuOpened] = useState(false);
    const {active} = useParams();
   
    useEffect(() => {
        if(active !== undefined)
        if(isMobile && list[active].refMobile !== undefined)
            list[active].refMobile.current.scrollIntoView({behavior: 'smooth'});
        else
            list[active].ref.current.scrollIntoView({behavior: 'smooth'});

    },[active, list])

    const handleMenuBarClick= ()=>{
        setMenuOpened(!menuOpened)
    }
      const handleListItemClick= (index)=>{
        setactiveBar(index); 
        history.push(`${index}`)   
        if(menuOpened)
            setMenuOpened(false) 
     }
    return (
        <div className= "p-navbar-cointainer">
         <ul className={`p-navbar ${menuOpened && "responsive"}`}>
        <li>
            <img src={PM} style={{width:"60px"}} onClick={()=> handleListItemClick(0)}/>
        </li>
            {list.map((item, index)=>
                        <li key={index}
                            className={`${activeBar === index ? "active" : ""}`}
                            onClick={()=> handleListItemClick(index)}>
                                <p className="par-navbar" style={{ marginTop: "10px", textTransform: "uppercase"}}> {item.label}</p> 
                            </li>
                )}
                <li  className="icon" onClick={handleMenuBarClick} >
                <FontAwesomeIcon  icon={faBars} />
                </li>
    </ul>
    </div>
    )
}
export default Navbar