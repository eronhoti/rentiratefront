import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from "react-slick";
import { AddToCartContext } from '../../Contexts/AddToCartContext/AddToCartContext';

export default function ProductDetails() {
  const [isLoading,setIsLoading]=useState(false)
  const {id} =useParams()
  const{addProductToCart}=useContext(AddToCartContext)
  
  const[productDetails,setProductDetails]=useState({})


  async function getProductDetails() {
    setIsLoading(true)
    let {data}= await axios.get('https://ecommerce.routemisr.com/api/v1/products/' + id)
    setProductDetails(data.data)
    console.log(data)
    setIsLoading(false)
  }
  useEffect(()=>{
    getProductDetails()
  },[])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


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
       <Slider {...settings}>
        {productDetails?.images?.map((img,index)=>{
        return <div key={index}>
        <img src={img} className='w-100'/> 
      </div> 
        }
        )}
    </Slider>


      </div>
      <div className='col-md-9'>
       <h2 className='mt-2' >{productDetails?.title}</h2>
       <h5 className='font-sm mt-2 text-main' >{productDetails?.category?.name}</h5>
       <p className='mt-2'>{productDetails?.description}</p>
       <div className='d-flex justify-content-between mt-2'>
        <span>{productDetails?.price}EGP</span>
        <span>
          <i className='rating-color fas fa-star me-1'></i>
          {productDetails?.ratingsAverage}
        </span>

      </div>
      <button className='btn bg-main text-white w-100 mt-2' onClick={()=>{addProductToCart(productDetails.id)}}>+Add To Cart</button>
      </div>
  </div>
     }
      
  
  </>
)}
