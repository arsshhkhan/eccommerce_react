import React from 'react'
import { useAppContext } from '../App'

function Home() {
  const {API_URL} =useAppContext()
  return (
    <div>
      <h2>Home{API_URL}</h2>
    </div>
  )
}

export default Home
