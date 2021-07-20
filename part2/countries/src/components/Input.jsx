import React from 'react'

const Input = ({displayedCountry,handleInputChange}) => {
    return (
        <div>
      find countries <input value={displayedCountry} onChange = {handleInputChange} /> 
        </div>
    )
}

export default Input
