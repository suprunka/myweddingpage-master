import React from 'react'
import Container from '../../components/Container';
import Selector from '../../components/Selector';
import { faBus, faUtensils, faBed } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const iconstyle={marginRight:"15px", color:"#rgb(230 124 73)"}
const linkStyle={ color:"#dc6d37"}
const News = ()=>
<Container backgroundColor="white" className="height-fitCnt" style={{color:"#a79488"}}>
     

<p>
<FontAwesomeIcon size="2x" icon={faBus} style={iconstyle} /> Spod koscioła zapewniamy autokar, który dowiezie gości do sali weselnej
 oraz odwiezie Was bezpiecznie do domu po zakończeniu przyjęcia.
</p>
<p>
  <FontAwesomeIcon size="2x" icon={faUtensils} style={iconstyle}  /> Jesli posiadasz alergie pokarmowe, badz jestes na diecie- napisz do nas, przygotujemy dla Ciebie odpowiednie dania!
</p>
<p>
    <FontAwesomeIcon size="2x" icon={faBed} style={iconstyle}  /> 
Polecane noclegi w okolicy:
<ul style={{marginLeft:"15px"}}>
<li> Noclegi w budynku przy sali, jest 8 wolnych pokoi(150zl/noc)</li>
<li> Agroturystyka VIP VILLAGE <a style={linkStyle} href="https://www.agromiedzierza.com/">Odwiedź ich stronę</a></li>
</ul>

</p>

</Container>
 

export default News;