import React from 'react'
import { Modal, ModalBody , ModalHeader, ModalFooter} from 'reactstrap'
import logo from "../../assets/logopat.jpg"

const MessageSentModal = ({toggle})=>{
    return(
        <Modal toggle={toggle}  isOpen={true} fade={true} centered={true}>
            <ModalHeader toggle={toggle} className="text-beige"> Dziękujemy</ModalHeader>
            <ModalBody style={{padding:"0rem 2rem 2rem 2rem"}}>
            <img src={logo} height="150" width="170" style={{marginLeft: "8rem"}}/>
            <p className="text-beige">
                        Wiadomość została wysłana, odezwiemy się jak najszybciej!

            </p>

            </ModalBody>
            
        </Modal>
    )
}
export default MessageSentModal;