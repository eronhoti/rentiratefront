import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick"

export default function CategoriesHelper() {

  const[categories,setCategories]=useState([])
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
   async function getAllCategories() {
    const{data}= await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    setCategories(data.data)
    console.log(data)
    
  }
  



  useEffect(()=>{
    getAllCategories()

  },[])


  return (
    <div>
      <Slider {...settings}>
      {categories.map((category,index)=>{
        return <Link to={'/categoriesDetails/'+category._id} key={index} className='my-5 a'>
        <img style={{height:200}} src={category.image} className='w-100'/> 
        <h5 className='text-center'>{category.name}</h5>
      </Link> 
        }
        )}
    </Slider>
    </div>
  )
}
