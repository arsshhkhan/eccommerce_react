import React from 'react'

function Guestlayout(props) {
  const {children} = props
  return (
    <div>
     <h2>GuestLayout</h2> 
     {children}
    </div>
  )
}

export default Guestlayout
