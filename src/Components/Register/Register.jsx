import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import signup from '../../Assets/Images/Sign-up-1024x1024.png'
import {Helmet} from "react-helmet";

export default function Register() {

  const validationSchema = Yup.object({
  name: Yup.string().required("Name is required").min(3,'Min lenght must be 3 character'),
  password :Yup.string().required('Password is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,'Invalid password format'),
  rePassword :Yup.string().required('rePassword is required').oneOf([Yup.ref('password')]),
 


  })

  const [errorMsg,setErrorMsg]=useState('')
  const [isLoading,setIsLoading]=useState(false)
  const navigate = useNavigate()

 const{values,handleChange,handleBlur,handleSubmit,errors,touched,isValid}=useFormik({
  initialValues:{
    name : "",
    email: "",
    password: "",
    rePassword: "",
     },
     onSubmit: async()=>{
      setErrorMsg('')
      try {
        setIsLoading(true)
         const {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values)
        
         if (data.message == 'success') {
           navigate('/Login')
         }
      
      } catch (error) {
        setErrorMsg(error.response.data.message)
        console.log(error)
      }
      setIsLoading(false)
     },
     validationSchema
  
  })
  
  return (<>
   <Helmet>
                <meta charSet="utf-8" />
                <title>Fresh cart || Register</title>
                
            </Helmet>
    <div className=' '> 

      <div className='row d-flex justify-content-center' >
        <div className='col-md-6'>
       <img src={signup} className='w-100'/>
        </div>
        <div className='col-md-6 mt-5'>
        <h1  className ='text-start my-4 '>Sign up Now:</h1>
      <form onSubmit={handleSubmit}  >
  <div className="form-row">
  <div className="form-group">
    <label  htmlFor="inputName">Name:</label>
    <input name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} type="text" className="form-control" id="inputName" placeholder="Enter your Name"/>
    {errors.name && touched.name && <p className='alert alert-danger mt-2'>{errors.name}</p>}
     
  </div>  
    <div className="form-group ">
      <label htmlFor="inputEmail4">Email:</label>
      <input name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} type="email" className="form-control " id="inputEmail4" placeholder="Enter your Email" />
      {errors.email && touched.email&& <p className='alert alert-danger mt-2 '>{errors.email}</p> }
    </div>
    <div className="form-group ">
      <label htmlFor="inputPassword4">Password:</label>
      <input name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} type="password" className="form-control" id="inputPassword" placeholder="Enter your Password" />
      {errors.password && touched.password && <p className='alert alert-danger mt-2'>{errors.password}</p>}
    </div>
    <div className="form-group ">
      <label htmlFor="inputrePassword">rePassword:</label>
      <input name="rePassword" onChange={handleChange} onBlur={handleBlur} value={values.rePassword} type="password" className="form-control" id="inputrePassword" placeholder="Enter your Password"/>
      {errors.rePassword && touched.rePassword && <p className='alert alert-danger mt-2 '>{errors.rePassword}</p>}
    </div>

  </div>
 
  {errorMsg && <p className=' alert alert-danger mt-2'>{errorMsg}</p>}

  <div className='w-100 d-flex justify-content-end' >
    { isLoading ?   <button type="submit" className="btn bg-main my-2  me-2  "><i className="fa-solid fa-spinner fa-spin px-3"></i></button>
    :
    <button type="submit" disabled={!isValid} className="btn bg-main my-2  me-2 ">Register</button>
  }

  
  </div>
</form>
    </div></div></div>
    </>
  )
}
