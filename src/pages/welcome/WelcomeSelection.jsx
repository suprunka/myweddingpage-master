import React, { useEffect } from 'react'
import WelcomeSelectionBigger from "./WelcomSelectionBigger"
import WelcomeSelectionMobile from "../welcomMobile/WelcomSelectionMobile"

const WelcomeSelection =  React.forwardRef((props, ref) => 
{
  
    return(
        <>
        <WelcomeSelectionBigger ref={ref}/>
        </>
    )
}
//welcome page telefon- mniejsze zdjecie, dodaj zdjeci aofrmat tekstu zaproszenia.
)
export default WelcomeSelection