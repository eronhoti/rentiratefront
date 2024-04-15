import React from 'react'
import CategoriesHelper from './CategoriesHelper'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";

export default function Categories() {
  async function getAllCategories() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
   
  }
 
const{data}= useQuery('Categories',getAllCategories)

console.log(data?.data.data)

return(<>
  <Helmet>
                <meta charSet="utf-8" />
                <title>Rentirate || Categories</title>
                
            </Helmet>
<div className="row d-flex justify-content-between "  >
{data?.data.data.map((category,index)=>{
  return <Link to={'/categoriesDetails/'+category._id} key={index} className='my-5 a card col-md-3 mx-3 '>
  <img style={{height:200}} src={category.image} className='w-100 card-img p-3'/> 
  <h5 className='text-center pt-3'>{category.name}</h5>
</Link> 
  }
  )}
</div>
</>)}
