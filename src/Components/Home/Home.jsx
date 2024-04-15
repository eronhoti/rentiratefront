import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import Slider from "react-slick"
import Productshelper from '../Products/Productshelper'
import CategoriesHelper from '../Categories/CategoriesHelper'

import slider1 from '../../Assets/Images/slider-image-1.jpeg'
import slider2 from '../../Assets/Images/slider-image-2.jpeg'
import slider3 from '../../Assets/Images/slider-image-3.jpeg'
import img1 from '../../Assets/Images/assortment-citrus-fruits.png'


export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  
  
   const[products,setProducts]=useState([])
   const [isLoading,setIsLoading]=useState(false)


   async function getAllProducts() {
    setIsLoading(true)
    const{data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
    setProducts(data.data)
    console.log(data)
    setIsLoading(false)

  
  }

  useEffect(()=>{
    getAllProducts() 
  },[])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return <>
  {isLoading? <div className='parent'>
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
      </div></div>:<>
   <div className="row d-flex justify-content-center  " >
    <div className='col-md-9 mx-auto '>
    <Slider {...settings}>
         <div >
        <img src={slider1} className='w-100'/> 
      </div> 
         <div >
        <img src={slider2} className='w-100'/> 
      </div> 
         <div >
        <img src={slider3} className='w-100'/> 
      </div> 
        
    </Slider>
</div>
    <div className='col-md-3' >
    <div >
        <img src={img1} className='w-100 hImg'/> 
      </div> 
         <div >
        <img src={img1} className='w-100 hImg'/> 
      </div> 
         
   
</div  >
  </div> 
<h1 className='mt-5 fw-3' >Our Categories</h1>
    <CategoriesHelper/>
    <div className="row" >
    <h1 className='mt-5 fw-3' >Our Products</h1>
      { isLoading?<div className='parent'>
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
      : 
      products?.map((product,index) => {
       return <div className='col-md-3' key={index} >
       
       <Productshelper product={product} />
       
      </div>
      }
      )}
      
    </div></>}
  </>
}
