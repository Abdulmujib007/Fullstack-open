import React from 'react'

const Input = ({change,handleInputChange}) => {
    return (
        <div>
      find countries <input value={change} onChange = {handleInputChange} /> 
        </div>
    )
}

export default Input
