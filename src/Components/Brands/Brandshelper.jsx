import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AddToCartContext } from '../../Contexts/AddToCartContext/AddToCartContext';

export default function Brandsshelper( {brand} ) {
  

 
  return (
    
    <div className='product mt-5 '>
      <Link to={'/BrandsDetails/'+ brand?._id} className='a '>
      <img className='w-100 ' src={brand?.image}/>
      <h5 className='text-center fw-bold' >{brand?.name}</h5>

      </Link>

     
    </div>
  )
}
