import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext,  useEffect,  useState } from 'react'
import {Link, useParams } from 'react-router-dom'
import * as Yup from 'yup'
import { LoggedUserAdressContext } from '../../Contexts/getLoggedUserAdress/GetLoggedUserAdress'
import AddNewAdress from './AddNewAdress'
import UserAdress from './UserAdress'
import UpdateProfile from '../Profile/UpdateProfile'

export default function Adress() {
 
  
  const [isLoading,setIsLoading]=useState(false)
  let { cartId }=useParams()

  const [selectedAddress, setSelectedAddress] = useState(null);

 

 const{values,handleChange,handleBlur,handleSubmit,errors,touched,isValid}=useFormik({
  initialValues:{
    details: selectedAddress ? selectedAddress.details : '',
      city: selectedAddress ? selectedAddress.city : '',
      phone: selectedAddress ? selectedAddress.phone : '',

   
     },
     onSubmit: async()=>{
      
      try {
        setIsLoading(true)
         let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`,
         {
          shippingAddress:values},
          {headers:{
            token: localStorage.getItem('token')
          },
          params:{
            url: 'http://localhost:3000'
          }
        
      })
      localStorage.setItem('details', values.details)
          localStorage.setItem('city', values.city)  
          localStorage.setItem('phone', values.phone) 
        
        
      console.log(data)
      window.open(data.session.url,'_self')
      } catch (error) {
       console.log(error.data.status)
       
      }
      setIsLoading(false)
     }

     
  
  })
  
  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
    
    handleChange({
      target: {
        name: 'details',
        value: address.details,
      },
    });
    handleChange({
      target: {
        name: 'city',
        value: address.city,
      },
    });
    handleChange({
      target: {
        name: 'phone',
        value: address.phone,
      },
    });
  };

  
   

  // const[[details, setdetails],[city, setCity],[phone, setphone]]=useContext(LoggedUserAdressContext)
  
  return (<>
   <div className='w-75 m-auto my-5' >
      <h1  className ='text-start '>Adress:</h1>
      <form onSubmit={handleSubmit}  >
  <div className="form-row">
  <div className="form-group">
    <label className='my-1' htmlFor="details">Details:</label>
    <input name="details" onChange={handleChange} onBlur={handleBlur} value={values.details} type="text" className="form-control mb-3" id="details" placeholder="Enter your details"/>
     
  </div>  
    <div className="form-group ">
    <label className='my-1' htmlFor="city">City:</label>
    <input name="city" onChange={handleChange} onBlur={handleBlur} value={values.city} type="text" className="form-control mb-3" id="city" placeholder="Enter your city"/>
    </div>


    <div className="form-group ">
    <label className='my-1' htmlFor="phone">Phone:</label>
    <input name="phone" onChange={handleChange} onBlur={handleBlur} value={values.phone} type="text" className="form-control mb-3" id="phone" placeholder="Enter your Phone"/>
    </div>

  
 
 

  <div className='w-100 d-flex justify-content-end' >
    
    <button type="submit"  className="btn btn-success my-2  me-2 ">Check out</button>
  
  

  </div>
  </div>
</form>
    
    </div>
    <section className="address">
      <div className="container">
        <div className="address-wrapper checkout-wrapper">
          <div className="left-main-wrapper">
            <div className="cart-breadcrumb-wrapper">
              {/* Include your cart breadcrumb component */}
            </div>
            <div className="address-item-wrapper">
              <h1>Last Adress</h1>
              <AddNewAdress/>
             
              <UserAdress onSelectAddress={handleAddressSelect}/>
              
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
    </>
  )
  
}
