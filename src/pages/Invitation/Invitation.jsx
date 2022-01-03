import React from 'react'
import Container from '../../components/Container';
import Selector from '../../components/Selector';
import logo from "../../assets/logopat.jpg"
import {isMobile} from 'react-device-detect';

const Invitation = ()=>
<Container backgroundColor="#fefdfb" className="height-fitCnt">
 <Selector className="invitation ">
      <p>Podaj date slubu, by dostac zdjecia</p>     <input placeholder="dd/MM/YYYY"></input>
 {/* <p> Już wkrótce powiemy sobie <span className="handwrittenText">„TAK”</span> </p>

<p> 14 sierpnia 2021 roku o godzinie  16:00 </p> 
<p>w  Kościele pw. św. Andrzeja Boboli przy ul. Kościelnej 2b, w Kostomłotach Drugich </p>
<p>staniemy przed ołtarzem i wypowiemy tekst przysięgi małżeńskiej.
</p>
<p>
Wszystkich Przyjaciół, którzy chcieliby dzielić z nami
radość tej niezwykłej chwili serdecznie zapraszamy.
</p>

<p>
Po ślubie widzimy się na przyjeciu w Sali weselnej „Gościniec za Borem”
w Zaborowicach.
</p>
<b>
     BĘDĄ TAKŻE POPRAWINY!
     <p style={{fontSize:"14px"}}> Zapraszamy najbliższych przyjaciół i rodzinę na obiad, który odbędzie się na sali w Zaborowicach.</p>
</b>

{!isMobile && <img src={logo} alt="" style={{width:"200px", alignSelf:"center"}}/>}
 */}

   
</Selector>
</Container>
 

export default Invitation;