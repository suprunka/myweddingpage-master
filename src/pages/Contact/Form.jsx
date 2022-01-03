import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Col, Row, Spinner } from 'reactstrap';
import { Formik, Form,  Field } from 'formik';
import * as Yup from "yup";
import { addMessage, cleanMessageStatus } from '../../redux/actions/pageActions';


const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Twoje imię jest za krótkie.')
      .required('Wpisz swoje imię, będzie nam łatwiej się z tobą skontaktować. '),
    contact: Yup.string()
      .required('Wpisz jakiś kontakt do siebie- będzie nam łatwiej się z tobą skontaktować.'),
      text: Yup.string()
      .min(3, 'Twoja wiadomość jest za krótka.')
      .required('To pole jest wymagane.'),
  });

const MessageForm = () =>{   
  const dispatch = useDispatch()
  const buttonDisabled =  useSelector(state => state.page.loading)  
    return(
        <Formik
        initialValues={{
            name: '',
            contact: '',
            text:""
          }}
        validationSchema={FormSchema}
        onSubmit={(values, { resetForm }) => {
            dispatch(addMessage(values))
            resetForm()
          
        }}
      >
        {({ errors, touched }) => (
        <Form    className="contactForm">
        <Row>
            <Col sm={12}>
            <Field placeholder="Twoje imie" 
                    className="contactInput" 
                    type="text" 
                    name="name"/>
            {errors.name !== undefined && touched.name &&<span className="error">{errors.name}</span>}
            </Col>
        </Row>
        <Row>
            <Col>
                 <Field placeholder="Twoj email/ telefon "  
                 className="contactInput" 
                 type="text"
                 name="contact"/>
            {errors.contact !== undefined && touched.contact &&<span className="error">{errors.contact}</span>}

            </Col>
        </Row>
        <Row>
            <Col>
                <Field   placeholder="Zostaw wiadomość" 
                    rows="6" 
                    name="text"
                    className="contactInput" 
                    as={CustimTextarea}
                ></Field>
            {errors.text !== undefined && touched.text && <span className="error">{errors.text}</span>}

            </Col>
        </Row> <Row>
            <Col>
            <button 
            disabled={buttonDisabled} 
            className="submitButton" 
            type="submit"
            >
              {buttonDisabled===true ?  <Spinner size="sm" style={{marginLeft:"10px"}}/>: " Wyślij!"}
            </button>
            </Col>
        </Row>
        </Form>)}
    </Formik>
    )

}


const CustimTextarea = (props) => (
    <textarea  {...props} ></textarea>
  );
 
export default MessageForm;