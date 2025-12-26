import React from 'react'


//rendering children as prop
// wrap navbar with wrapper component now we can style it  and it will applied on navbar
const Wrapper = ({children}) => {
  return (
    <div className='max-w-280 m-auto'>
      {children}
    </div>
  )
}

export default Wrapper
 