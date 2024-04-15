import React from 'react'
import error from '../../Assets/Images/error.svg'


export default function PageNotFound() {
  return (
    <div className=' d-flex justify-content-center' >
      <img src={error} className='w-75'/>
    </div>
  )
}
