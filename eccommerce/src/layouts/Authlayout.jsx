import React from 'react'

function Authlayout(props) {
const {children} = props
  return (
    <div>
    <h1>Auth layout</h1>  
    {children}
    </div>
  )
}

export default Authlayout
