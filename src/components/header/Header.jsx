import React from 'react'
import Form from './Form'

const Header = ({handleSubmit}) => {
  return (
    <div className='mb-3'>
      <Form handleSubmit={handleSubmit} />
    </div>
  )
}

export default Header