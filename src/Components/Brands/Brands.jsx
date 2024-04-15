import React from 'react'
import Brandsshelper from './Brandshelper'
import axios from 'axios'
import {  useQuery } from 'react-query'


export default function Brands() {
  
   async function getAllBrands() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/brands')
   
  }
 
const{data}= useQuery('Brands',getAllBrands)
console.log(data)

  return( <>

    <div className="row" >
      {  data?.data.data.map((brand,index) => {
       return <div className='col-md-3' key={index} >
       <Brandsshelper brand={brand} />
       
      </div>
      }
      )}
      
    </div>
  </>
  )
}
