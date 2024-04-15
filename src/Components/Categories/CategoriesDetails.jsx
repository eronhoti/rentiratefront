import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function CategoriesDetails() {
  const [isLoading,setIsLoading]=useState(false)
  const[specificCategory,setSpecificCategory]=useState()
  // const{noOfCartIteams,setNoOfCartIteams}=useContext(CartContext)
  const{id}= useParams()
    async function getSpecificCategory() {
      setIsLoading(true)
        const{data}= await axios.get('https://ecommerce.routemisr.com/api/v1/categories/'+ id +'/subcategories')
        setSpecificCategory(data.data)
        console.log(data.data)
        setIsLoading(false)
      }
      
  useEffect(()=>{
    getSpecificCategory()
  },[])
  return (<>
    
    
    { isLoading ? 
      <div className='d-flex align-items-center justify-content-center my-5 py-5' >
    <i className="fa-solid fa-spinner fa-spin fa-2x"></i>
    </div>
  : <div className="row mt-3 d-flex justify-content-center">
  { specificCategory?.map((specificCategory,index)=>{
  return <Link className=' col-md-3 a d-flex justify-content-center my-4 cWidth' key={index} >
 
     <h2 className='p-3 text-center border my-auto  d-flex align-self-center align-items-center w-100  ' style={{height:200}} >{specificCategory.name}</h2>
    
</Link>}) } </div>
   }
    

</> )
}
