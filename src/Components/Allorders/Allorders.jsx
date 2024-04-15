import React, { useEffect, useState } from 'react'
import { jwtDecode } from "jwt-decode"
import axios from 'axios'
import {Helmet} from "react-helmet";

export default function Allorders() {
  const {id}= jwtDecode(localStorage.getItem('token'))
  const allData= jwtDecode(localStorage.getItem('token'))
  console.log(allData)

 const[orders,setOrders]=useState()
 const [isLoading,setIsLoading]=useState(false)
  async function getUserOrders() {
    setIsLoading(false)
    const{data}= await axios.get('https://ecommerce.routemisr.com/api/v1/orders/user/'+id)
    setOrders(data)
    console.log(data)
    setIsLoading(true)
   
  }
   useEffect(()=>{
    getUserOrders()
   },[])
  
  return (<>
  <Helmet>
                <meta charSet="utf-8" />
                <title>Rentirate || My orders</title>
                
            </Helmet>
    {orders?.length > 0 || !isLoading  ? 
       orders?.map((order,index) =>{
        return <div key={index} className='row mt-5' >
               <div className='order shadow rounded p-4 my-5' >
                 <div className='d-flex align-iteams-center'>
                  <h2 className='fw-bolder h1' >#{order.id}</h2>
                  {order.isDelivered?
                  <h4 className='fw-bold tex-primary mx-4' >Order has been deliverd <i className="fa-solid fa-truck-arrow-right"></i></h4>
                 :
                 <h4 className='fw-bold tex-primary mx-4' >Processing  <i className="fa-solid fa-truck-ramp-box fs-2"></i></h4>
                  }
               
                 </div>
                 <p> You have ordered {order.cartItems.length} iteams</p>
                 <div className='d-flex' >
                 {order.cartItems.map((iteam,index)=>{
                  return <div key={index} >
                   <img src={iteam.product.imageCover} style={{width:150}} className='img-thumbnail mx-1' />
                  </div>
                 }
                 )}
               </div>
               <hr/>
               <p><strong>Total amount: </strong>{order.totalOrderPrice} EGP</p>
              {order.isPaid?
              <p  >Order has been paid successfly <i className="fa-solid fa-circle-check fs-2"></i> </p> 
             :
             <p className='alert alert-danger mt-2 '>Order hasn't been paid successfly </p>
             } 
          </div> 
          </div>
      }
       )
    :
    <h2 className='alert alert-warning mt-5 text-center' >No orders yet.</h2>
  }
    


    
     
    
  
</>)}
