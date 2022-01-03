import React from 'react'
const Selector = ({children, className, id})=>{

    return(
        <div id={id} className={`selection active ${className !== undefined ? className:""}`}  >
            {children}
         </div>
    )
}
  

export default Selector;