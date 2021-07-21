import React from 'react'

const Button = ({handleShow,text,singleindex}) => {

    return (
        <button  onClick={() =>handleShow(singleindex)}>{text}</button>
            
        
    )
}

export default Button
