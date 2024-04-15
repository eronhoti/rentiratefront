import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

export default function NewPasswordAfterReset() {
    const [errorMsg,setErrorMsg]=useState('')
    const [isLoading,setIsLoading]=useState(false)
    const navigate = useNavigate()

    const validationSchema = Yup.object({
        newPassword :Yup.string().required('Password is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,'Invalid password format'),
      
      
        })
  
  
    

    const{values,handleChange,handleBlur,handleSubmit,errors,touched,isValid}=useFormik({
        initialValues:{
            email: "",
            newPassword:"",
          
           },
           onSubmit: async()=>{
            setErrorMsg('')
            try {
              setIsLoading(true)
              
               const {data} = await axios.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',values)
             toast.success('Your password has been changed successfully', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          
          });
          navigate('/login') 
          

            console.log(data)
            
            } catch (error) {
            setErrorMsg(error.status)
              
            }
            setIsLoading(false)
           },
           validationSchema
        })
        
        return (<>
          <div className=' '> 
            <h1  className ='text-start '>New Password:</h1>
            <form onSubmit={handleSubmit}  >
        <div className="form-row">
        
        <div className="form-group ">
            <label htmlFor="inputEmail">Email:</label>
            <input name="email" onChange={handleChange} onBlur={handleBlur} value={values.email}  type="email" className="form-control " id="inputEmail" placeholder="Enter your Email" />
            {errors.email && touched.email&& <p className='alert alert-danger mt-2 '>{errors.email}</p> }
          </div>
        <div className="form-group ">
            <label htmlFor="inputPassword">New Password:</label>
            <input name="newPassword" onChange={handleChange} onBlur={handleBlur} value={values.newPassword}  type="password" className="form-control " id="inputPassword" placeholder="Enter your Code" />
            {errors.newPassword && touched.newPassword&& <p className='alert alert-danger mt-2 '>{errors.newPassword}</p> }
          </div>
          
        </div>

      
        {errorMsg && <p className=' alert alert-danger mt-2'>{errorMsg}</p>} 
        
        <div className='w-100 d-flex justify-content-end' >
          { isLoading ?   <button type="submit" className="btn btn-success my-2  me-2  "><i className="fa-solid fa-spinner fa-spin px-3"></i></button>
          :
          <button type="submit" disabled={!isValid} className="btn btn-success my-2  me-2 ">Update the password</button>
        }
      
        </div>
      </form>
          </div>
          </>
        )
      
      
      
    
    }



