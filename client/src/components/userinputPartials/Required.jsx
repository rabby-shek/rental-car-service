import React from 'react'

const Required = ({value}) => {
  return (
    <span>
      {value}<span className='required'>*</span>
    </span>
  )
}

export default Required
