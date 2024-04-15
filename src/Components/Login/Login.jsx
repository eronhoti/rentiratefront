import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { AuthContext } from '../../Contexts/AuthContext/AuthContext'
import login from '../../Assets/Images/Login-e1645110820608.png'
import {Helmet} from "react-helmet";



export default function Login() {

  const validationSchema = Yup.object({
  // email: Yup.string().required('Email is required').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,'Invalid  email format'),
  password :Yup.string().required('Password is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,'Invalid password format'),

  })
 

  const [errorMsg,setErrorMsg]=useState('')
  const [isLoading,setIsLoading]=useState(false)

  const{isUserLogged,setisUserLogged}= useContext(AuthContext)
  const navigate = useNavigate()




 const{values,handleChange,handleBlur,handleSubmit,errors,touched,isValid}=useFormik({
  initialValues:{
    email: "",
    password: "",
    
     },
     onSubmit: async()=>{
      setErrorMsg('')
      try {
        setIsLoading(true)
         const {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values)
          console.log(data)
         if (data.message == 'success') {
          setisUserLogged(true)
          localStorage.setItem('token', data.token)
          localStorage.setItem('name', data.user.name)  
          localStorage.setItem('email', data.user.email)  
        
           if (window.location.pathname === '/login') {
            navigate('/home')
           }else{
           navigate(window.location.pathname)}
         }
      
      } catch (error) {
        setErrorMsg(error.response.data.message)
      }
      setIsLoading(false)
     },
     validationSchema
  
  })

  
  return (<>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Rentirate || Login</title>
                
            </Helmet>
    <div className=' '> 
    
      <div className='row d-flex justify-content-center' >
        <div className='col-md-6'>
       <img src={login} className='w-100'/>
        </div>
        <div className='col-md-6 mt-5'>
        <h1  className ='text-start  my-4'>Login Now:</h1>
      <form onSubmit={handleSubmit}  >
  <div className="form-row">
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
  </div>
 

  {errorMsg && <p className=' alert alert-danger mt-2'>{errorMsg}</p>}
  
  <div className='w-100 d-flex justify-content-end' >
    { isLoading ?   <button type="submit" className="btn bg-main my-2  me-2  "><i className="fa-solid fa-spinner fa-spin px-3"></i></button>
    :
    <button type="submit" disabled={!isValid} className="btn bg-main my-2  me-2 text-white ">Login</button>
  }

  </div>
  <Link to={'/forgetPassword'} ><a>Forget Password?</a></Link>
</form>
    </div></div></div>
    </>
  )
}
