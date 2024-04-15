import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function BrandsDetails() {
  const [isLoading,setIsLoading]=useState(false)
  const {id} =useParams()
   
  const[brandDetails,setBrandDetails]=useState({})


  async function getBrandDetails() {
    setIsLoading(true)
    let {data}= await axios.get('https://ecommerce.routemisr.com/api/v1/brands/' + id)
    setBrandDetails(data.data)
    console.log(data)
    setIsLoading(false)
  }
  useEffect(()=>{
    getBrandDetails()
  },[])




  return (<>
    
    
      { isLoading ? 
      <div className='parent'>
        <div class="preloader">
        <svg class="cart" role="img" aria-label="Shopping cart line animation" viewBox="0 0 128 128" width="128px" height="128px" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="8">
            <g class="cart__track" stroke="hsla(0,10%,10%,0.1)">
              <polyline points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" />
              <circle cx="43" cy="111" r="13" />
              <circle cx="102" cy="111" r="13" />
            </g>
            <g class="cart__lines" stroke="currentColor">
              <polyline class="cart__top" points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" stroke-dasharray="338 338" stroke-dashoffset="-338" />
              <g class="cart__wheel1" transform="rotate(-90,43,111)">
                <circle class="cart__wheel-stroke" cx="43" cy="111" r="13" stroke-dasharray="81.68 81.68" stroke-dashoffset="81.68" />
              </g>
              <g class="cart__wheel2" transform="rotate(90,102,111)">
                <circle class="cart__wheel-stroke" cx="102" cy="111" r="13" stroke-dasharray="81.68 81.68" stroke-dashoffset="81.68" />
              </g>
            </g>
          </g>
        </svg>
        <div class="preloader__text">
          <p class="preloader__msg">Bringing you the goods…</p>
          <p class="preloader__msg preloader__msg--last">This is taking long. Something’s wrong.</p>
        </div>
      </div></div>
    : <div className='row align-items-center py-5' >
    <div className='col-md-3'>
        <img src={brandDetails.image} className='w-100'/> 

      </div>
      <div className='col-md-9'>
       <h5 className='font-sm mt-2 text-main' >{brandDetails?.name}</h5>

      
      </div>
  </div>
     }
      
  
  </>
)}
