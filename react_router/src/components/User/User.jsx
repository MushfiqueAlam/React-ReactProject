import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}=useParams();
  return (
    <div className='text-center bg-gray-300 h-10 items-center text-blue-500'>User:{userid}</div>
  )
}

export default User
