import React from 'react'
import Header from './Header'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'

const Browse = () => {
 
  return (
    <div className='w-full h-full'>
      <Header />
      
    </div>
  )
}

export default Browse